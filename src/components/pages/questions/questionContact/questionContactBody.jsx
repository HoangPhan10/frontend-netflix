import styles from "./questions.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
function QuestionContactBody() {
  const { t } = useTranslation();
  return (
    <div className={styles.QuestionContact}>
      <h1>{t("description.part53")}</h1>
      <div className={styles.QuestionContactContent}>
        <div className={styles.column1}>
          <h2>{t("description.part54")}</h2>
          <p>{t("description.part55")}</p>
          <h4>{t("description.part56")}</h4>
          <div className={styles.column1App}>
            <a
              href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient"
              className={styles.column1AppLink}
            >
              <FaGooglePlay className={styles.Icon} />
              <p>Google Play</p>
            </a>
            <a
              href="https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&path=apps%2fnetflix"
              className={styles.column1AppLink}
            >
              <AiFillApple className={styles.Icon} />
              <p>App Store</p>
            </a>
          </div>
          <p className={styles.column1Border}>
            {t("description.part57")}
            <Link to="/login" className={styles.Link}>
              {t("description.part58")}
            </Link>
          </p>
          <h2>{t("description.part59")}</h2>
          <h4>{t("description.part60")}</h4>
          <p>{t("description.part61")}</p>
          <a
            href="https://help.netflix.com/vi/node/407"
            className={styles.column1Button}
          >
            {" "}
            {t("description.part62")}
          </a>
          <h2 className={styles.borderTop}>{t("description.part63")}</h2>
          <p>{t("description.part64")}</p>
          <a
            href="https://help.netflix.com/vi/node/407"
            className={styles.column1Button}
          >
            {" "}
            {t("description.part65")}
          </a>
        </div>
        <div className={styles.column2}>
          <h4>{t("description.part66")}</h4>
          <ul>
            <li>
              <a
                href="https://help.netflix.com/vi/node/365"
                className={styles.column2Link}
              >
                {t("description.part67")}
              </a>
            </li>
            <li>
              <a
                href="https://help.netflix.com/vi/titlerequest"
                className={styles.column2Link}
              >
                {t("description.part68")}
              </a>
            </li>
            <li>
              <a
                href="https://help.netflix.com/vi/node/407"
                className={styles.column2Link}
              >
                {t("description.part69")}
              </a>
            </li>
            <li>
              <a
                href="https://help.netflix.com/vi/troubleshooting"
                className={styles.column2Link}
              >
                {t("description.part70")}
              </a>
            </li>
            <li>
              <a
                href="https://help.netflix.com/vi/node/412"
                className={styles.column2Link}
              >
                {t("description.part71")}
              </a>
            </li>
          </ul>
          <h4>{t("description.part72")}</h4>
          <input placeholder={t("description.part73")} />
        </div>
      </div>
    </div>
  );
}

export default QuestionContactBody;
