"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login as loginService } from "../services/authService";
import { useUserStore } from "@/store/useUserStore";

const generateTestJWT = (payload: object) => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = btoa(JSON.stringify(payload));
  const signature = btoa("test-signature");
  return `${header}.${body}.${signature}`;
};

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { login: setUser, logout: clearUser } = useUserStore();

  const handleLogin = async (username: string, password: string) => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await loginService({ username, password });

      // JWT simulado
      const token = generateTestJWT({ id: data.id, username: data.userName });

      setUser(data.userName, token);
      router.push("/profile");
    } catch (err) {
      setError("Error al iniciar sesión");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      clearUser();
      router.push("/login");
    } catch (err) {
      setError("Error al cerrar sesión");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleLogin,
    handleLogout,
  };
};
