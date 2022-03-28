import styles from './introduce.module.scss'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function IntroduceFooter(){
  const {t} =useTranslation()
    return (
        <div className={styles.introduceFooter}>
            <Link to='/question' className={styles.introduceFooterLink}>{t("description.part35")}</Link>
            <div className={styles.introduceFooterGrid}>

            <div className={styles.introduceFooterGridRow}>
            <Link to='/faq' className={styles.introduceFooterGridRowLink}>{t("description.part36")}</Link>
            <a href='https://ir.netflix.net/ir-overview/profile/default.aspx' className={styles.introduceFooterGridRowLink}>{t("description.part37")}</a>
            <Link to='/privacy' className={styles.introduceFooterGridRowLink}>{t("description.part38")}</Link>
            <a href='https://fast.com/' className={styles.introduceFooterGridRowLink}>{t("description.part39")}</a>
            </div>
            <div className={styles.introduceFooterGridRow}>
            <Link to='/helpCenter' className={styles.introduceFooterGridRowLink}>{t("description.part40")}</Link>
            <a href='https://jobs.netflix.com/' className={styles.introduceFooterGridRowLink}>{t("description.part41")}</a>
            <Link to='/cookie' className={styles.introduceFooterGridRowLink}>{t("description.part42")}</Link>
            <Link to='/legalNotices' className={styles.introduceFooterGridRowLink}>{t("description.part43")}</Link>
            </div>
            <div className={styles.introduceFooterGridRow}>
            <Link to='/login' className={styles.introduceFooterGridRowLink}>{t("description.part44")}</Link>
            <a href='https://devices.netflix.com/fr/' className={styles.introduceFooterGridRowLink}>{t("description.part45")}</a>
            <Link to='/corporateInformation' className={styles.introduceFooterGridRowLink}>{t("description.part46")}</Link>
            <a href='https://www.netflix.com/vn-en/browse/genre/839338' className={styles.introduceFooterGridRowLink}>{t("description.part47")}</a>
            </div>
            <div className={styles.introduceFooterGridRow}>
            <a href='https://media.netflix.com/fr/' className={styles.introduceFooterGridRowLink}>{t("description.part48")}</a>
            <Link to='/termsOfUse' className={styles.introduceFooterGridRowLink}>{t("description.part49")}</Link>
            <Link to='/question' className={styles.introduceFooterGridRowLink}>{t("description.part50")}</Link>
            </div>
           
            </div>

            <p>Website designed by phanhoang1022002@gmail.com</p>
        </div>
    )
}

export default IntroduceFooter;