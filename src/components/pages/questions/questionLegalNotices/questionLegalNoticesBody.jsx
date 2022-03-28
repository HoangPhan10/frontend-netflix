import styles from './questionLegalNotices.module.scss'
import { useTranslation } from 'react-i18next';
function QuestionLegalNoticesBody() {
  const {t} = useTranslation()
  return (
    <div className={styles.legalNotices}>
      <h1>{t("description.part362")}</h1>
      <p>{t("description.part363")}</p>
      <h3>{t("description.part364")}</h3>
      <p>{t("description.part365")}</p>
      <h3>{t("description.part366")}</h3>
      <p>{t("description.part367")}</p>
      <p>{t("description.part368")}</p>
      <p>{t("description.part369")}</p>
      <h3>{t("description.part370")}</h3>
      <p>{t("description.part371")}</p>
      <h3>{t("description.part372")}</h3>
      <p>{t("description.part373")}</p>
      <p><strong>{t("description.part235")}</strong> {t("description.part236")}</p>
    </div>
  )
}

export default QuestionLegalNoticesBody