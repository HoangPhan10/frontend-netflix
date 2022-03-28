import styles from './questionHelpCenter.module.scss'
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'
import SortSharpIcon from '@mui/icons-material/SortSharp';
function QuestionHelpCenterBody() {
  const { t } = useTranslation();

  return (
    <div className={styles.helpCenter}>
        <div className={styles.helpCenterDiv1}>
        <h1>{t("description.part117")}</h1>
        <div className={styles.helpCenterButton}>
          <Link to='/login' className={styles.ButtonLink}>{t("description.part0")}</Link>
          <Link to='/login' className={styles.ButtonLink}>{t("description.part52")}</Link>
        </div>
        <p>{t("description.part118")}</p>
        <div className={styles.helpCenterTopic}>
        <a href='https://help.netflix.com/vi/node/112419'> <SortSharpIcon className={styles.topicIcon}/>{t("description.part119")}</a>
        <a href='https://help.netflix.com/vi/node/24926'> <SortSharpIcon className={styles.topicIcon}/>{t("description.part120")}</a>
        <a href='https://help.netflix.com/vi/node/470'> <SortSharpIcon className={styles.topicIcon}/>{t("description.part121")}</a>
        </div>
        </div>

        <div className={styles.helpCenterDiv2}>
          <div className={styles.row}>
            <h2>{t("description.part5")}</h2>
            <a href='https://help.netflix.com/vi/node/112419?ui_action=kb-article-popular-categories'>
            {t("description.part119")}
            </a>
            <Link to="/faq">
            {t("description.part20")}
            </Link>
            <a href='https://help.netflix.com/vi/node/24926?ui_action=kb-article-popular-categories'>
            {t("description.part120")}
            </a>
          </div>
          <div className={styles.row}>
            <h2>{t("description.part122")}</h2>
            <a href='https://help.netflix.com/vi/node/365?ui_action=kb-article-popular-categories'>
            {t("description.part123")}
            </a>
            <a href='https://help.netflix.com/vi/node/59095?ui_action=kb-article-popular-categories'>
            {t("description.part124")}
            </a>
            <a href='https://help.netflix.com/vi/node/57688?ui_action=kb-article-popular-categories'>
            {t("description.part125")}
            </a>
          </div>
          <div className={styles.row}>
            <h2>{t("description.part126")}</h2>
            <a href='https://help.netflix.com/vi/node/470?ui_action=kb-article-popular-categories'>
            {t("description.part127")}
            </a>
            <a href='https://help.netflix.com/vi/node/2070?ui_action=kb-article-popular-categories'>
            {t("description.part128")}
            </a>
            <a href='https://help.netflix.com/vi/node/111934?ui_action=kb-article-popular-categories'>
            {t("description.part129")}
            </a>
          </div>
          <div className={styles.row}>
            <h2>{t("description.part130")}</h2>
            <a href='https://help.netflix.com/vi/node/14361?ui_action=kb-article-popular-categories'>
            {t("description.part131")}
            </a>
            <a href='https://help.netflix.com/vi/node/33222?ui_action=kb-article-popular-categories'>
            {t("description.part132")}
            </a>
            <a href='https://help.netflix.com/vi/node/54816?ui_action=kb-article-popular-categories'>
            {t("description.part133")}
            </a>
          </div>
          <div className={styles.row}>
            <h2>{t("description.part134")}</h2>
            <a href='https://help.netflix.com/vi/node/14361?ui_action=kb-article-popular-categories'>
            {t("description.part135")}
            </a>
            <a href='https://help.netflix.com/vi/node/33222?ui_action=kb-article-popular-categories'>
            {t("description.part136")}
            </a>
            <a href='https://help.netflix.com/vi/node/54816?ui_action=kb-article-popular-categories'>
            {t("description.part137")}
            </a>
            <a href='https://help.netflix.com/vi/node/54816?ui_action=kb-article-popular-categories'>
            {t("description.part138")}
            </a>
            <a href='https://help.netflix.com/vi/node/54816?ui_action=kb-article-popular-categories'>
            {t("description.part139")}
            </a>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>{t("description.part110")}</h2>
          <div>
          <a className={styles.Button}> {t("description.part62")}</a>
          <a className={styles.Button}> {t("description.part65")}</a>
          </div>
        </div>
    </div>
  )
}

export default QuestionHelpCenterBody