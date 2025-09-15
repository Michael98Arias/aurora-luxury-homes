import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    name.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    message.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmitted(true);
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className={styles["contact-section"]}>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-left"]}>
          <h1 className={styles["contact-title"]}>{t("contact.title")}</h1>
          <p className={styles["contact-text"]}>{t("contact.description")}</p>
          <p className={styles["contact-text"]}>
            <strong>Email:</strong> {t("contact.emailInfo")}
          </p>
          <p className={styles["contact-text"]}>
            <strong>Teléfono:</strong> {t("contact.phoneInfo")}
          </p>
        </div>

        <div className={styles["contact-right"]}>
          <form className={styles["contact-form"]} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t("contact.form.enterName")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles["contact-input"]}
            />
            <input
              type="text"
              placeholder={t("contact.form.enterLastName")}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles["contact-input"]}
            />
            <input
              type="email"
              placeholder={t("contact.form.enterEmail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles["contact-input"]}
            />
            <input
              type="tel"
              placeholder={t("contact.form.enterPhone")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles["contact-input"]}
            />
            <textarea
              placeholder={t("contact.form.enterMessage")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles["contact-input"]}
              rows={4}
            />
            <button
              type="submit"
              disabled={!isFormValid}
              className={styles["contact-button"]}
            >
              {submitted ? t("contact.form.sent") : t("contact.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
