"use client";

import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const Wrapper = (props: P) => {
    const router = useRouter();
    const token = useUserStore((state) => state.token);

    useEffect(() => {
      if (!token) {
        router.push("/login");
      }
    }, [token, router]);

    if (!token) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}

export default withAuth;
