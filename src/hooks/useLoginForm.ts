import { useState } from "react";

export function useLoginForm(initialUsername = "", initialPassword = "") {
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);
  const inputType = visible ? "text" : "password";

  const isUsernameValid = username.length >= 4 && username.length <= 14;
  const isPasswordValid = password.length >= 6 && password.length <= 15;
  const isFormValid = isUsernameValid && isPasswordValid;

  return {
    username,
    setUsername,
    password,
    setPassword,
    visible,
    toggle,
    inputType,
    isUsernameValid,
    isPasswordValid,
    isFormValid,
  };
}
