import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./LoginForm.module.scss";
import { useLoginForm } from "@/hooks/useLoginForm";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function LoginForm() {
  const { handleLogin, loading, error } = useAuth();
  const { t, i18n } = useTranslation();
  const {
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
  } = useLoginForm();

  const [showTempError, setShowTempError] = useState(false);
  const [timerProgress, setTimerProgress] = useState(100);

  useEffect(() => {
    if (error) {
      setShowTempError(true);
      setTimerProgress(100);

      const interval = setInterval(() => {
        setTimerProgress((prev) => prev - 2);
      }, 100);

      const timeout = setTimeout(() => {
        setShowTempError(false);
        setTimerProgress(100);
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [error]);

  const imagesByLang: Record<string, string> = {
    es: "/images/Slogan_ES_c.png",
    en: "/images/Slogan_EN_c.png",
  };
  const selectedImage = imagesByLang[i18n.language] || imagesByLang["en"];

  return (
    <div className={styles["login-section"]}>
      <div className={styles["login-content"]}>
        <div className={styles["login-left"]}>
          <h1 className={styles["login-title"]}>{t("login.title")}</h1>

          <form
            className={styles["login-form"]}
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(username, password);
            }}
          >
            <input
              type="text"
              placeholder={t("login.username")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles["login-input"]}
            />

            <div className={styles["password-wrapper"]}>
              <input
                type={inputType}
                placeholder={t("login.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles["login-input"]}
              />
              <span className={styles["password-toggle"]} onClick={toggle}>
                {visible ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading || !isFormValid}
              className={styles["login-button"]}
            >
              {loading ? t("login.loading") : t("login.submit")}
            </button>

            <ul
              style={{
                marginTop: "10px",
                fontSize: "0.9rem",
                listStyle: "disc",
                paddingLeft: "20px",
                position: "relative",
              }}
            >
              <li style={{ color: isUsernameValid ? "green" : "red" }}>
                {t("login.usernameRange")}
              </li>
              <li style={{ color: isPasswordValid ? "green" : "red" }}>
                {t("login.passwordRange")}
              </li>

              {showTempError && (
                <span
                  style={{
                    display: "block",
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "4px",
                    position: "relative",
                  }}
                >
                {t("login.incorrectData")}
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      height: "2px",
                      backgroundColor: "red",
                      width: `${timerProgress}%`,
                      transition: "width 0.1s linear",
                    }}
                  />
                </span>
              )}
            </ul>
          </form>
        </div>

        <div className={styles["login-right"]}>
          <Image
            src={selectedImage}
            alt={`Slogan - ${i18n.language.toUpperCase()}`}
            width={350}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}
