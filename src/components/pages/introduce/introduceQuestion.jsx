import styles from "./introduce.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import InputStart from '../../common/InputStart'
function IntroduceQuestion() {
  const { t } = useTranslation();
  const [display, setDisplay] = useState(0);
  return (
    <div className={styles.introduceQuestion}>
      <h1>{t("description.part19")}</h1>

      <div className={styles.introduceQuestionDiv}>
        <div onClick={() => setDisplay(1)} className={styles.Title}>
          <h2>{t("description.part20")}</h2>
          <p>{display === 1 ? "" : "+"}</p>
        </div>
        <p className={styles.Focus} onClick={() => setDisplay(0)}>
          {display === 1 ? "x" : ""}
        </p>
        <div
          style={{ display: display === 1 ? "block" : "none" }}
          className={styles.Content}
        >
          <h2>{t("description.part21")}</h2>
          <h2>{t("description.part22")}</h2>
        </div>
      </div>

      <div className={styles.introduceQuestionDiv}>
        <div onClick={() => setDisplay(2)} className={styles.Title}>
          <h2>{t("description.part23")}</h2>
          <p>{display === 2 ? "" : "+"}</p>
        </div>
        <p className={styles.Focus} onClick={() => setDisplay(0)}>
          {display === 2 ? "x" : ""}
        </p>
        <div
          style={{ display: display === 2 ? "block" : "none" }}
          className={styles.Content}
        >
          <h2>{t("description.part24")}</h2>
        </div>
      </div>

      <div className={styles.introduceQuestionDiv}>
        <div onClick={() => setDisplay(3)} className={styles.Title}>
          <h2>{t("description.part25")}</h2>
          <p>{display === 3 ? "" : "+"}</p>
        </div>
        <p className={styles.Focus} onClick={() => setDisplay(0)}>
          {display === 3 ? "x" : ""}
        </p>
        <div
          style={{ display: display === 3 ? "block" : "none" }}
          className={styles.Content}
        >
          <h2>{t("description.part26")}</h2>
          <h2>{t("description.part27")}</h2>
        </div>
      </div>

      <div className={styles.introduceQuestionDiv}>
        <div onClick={() => setDisplay(4)} className={styles.Title}>
          <h2>{t("description.part28")}</h2>
          <p>{display === 4 ? "" : "+"}</p>
        </div>
        <p className={styles.Focus} onClick={() => setDisplay(0)}>
          {display === 4 ? "x" : ""}
        </p>
        <div
          style={{ display: display === 4 ? "block" : "none" }}
          className={styles.Content}
        >
          <h2>{t("description.part29")}</h2>
        </div>
      </div>

      <div className={styles.introduceQuestionDiv}>
        <div onClick={() => setDisplay(5)} className={styles.Title}>
          <h2>{t("description.part30")}</h2>
          <p>{display === 5 ? "" : "+"}</p>
        </div>
        <p className={styles.Focus} onClick={() => setDisplay(0)}>
          {display === 5 ? "x" : ""}
        </p>
        <div
          style={{ display: display === 5 ? "block" : "none" }}
          className={styles.Content}
        >
          <h2>{t("description.part31")}</h2>
        </div>
      </div>
      <div className={styles.introduceQuestionDiv}>
        <div onClick={() => setDisplay(6)} className={styles.Title}>
          <h2>{t("description.part32")}</h2>
          <p>{display === 6 ? "" : "+"}</p>
        </div>
        <p className={styles.Focus} onClick={() => setDisplay(0)}>
          {display === 6 ? "x" : ""}
        </p>
        <div
          style={{ display: display === 6 ? "block" : "none" }}
          className={styles.Content}
        >
          <h2>{t("description.part33")}</h2>
          <h2>{t("description.part34")}</h2>
        </div>
      </div>
     <div className={styles.introduceQuestionMsp}>
     <p className={styles.introduceQuestionMspP} >{t("description.part3")}</p>
      <InputStart />
     </div>
    </div>
  );
}

export default IntroduceQuestion;
