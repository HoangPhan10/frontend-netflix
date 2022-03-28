import styles from './QuestionCookie.module.scss'
import { useTranslation } from 'react-i18next';
function QuestionCookieBody() {
  const {t}=useTranslation()
  return (
    <div className={styles.cookie}>
      <h1>{t("description.part374")}</h1>
      <h2>{t("description.part375")}</h2>
      <p>{t("description.part376")}</p>
      <p>{t("description.part377")}</p>
      <p>{t("description.part378")}</p>
      <p>{t("description.part379")}</p>
      <p>{t("description.part380")}</p>
      <p>{t("description.part381")}</p>
      <h2>{t("description.part382")}</h2>
      <p>{t("description.part383")}</p>
      <p>{t("description.part384")}</p>
      <h2>{t("description.part385")}</h2>
      <p>{t("description.part386")}</p>
      <p>{t("description.part387")}</p>

    </div>
  )
}

export default QuestionCookieBody