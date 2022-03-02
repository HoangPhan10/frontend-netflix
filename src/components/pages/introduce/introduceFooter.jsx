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
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part36")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part37")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part38")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part39")}</Link>
            </div>
            <div className={styles.introduceFooterGridRow}>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part40")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part41")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part42")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part43")}</Link>
            </div>
            <div className={styles.introduceFooterGridRow}>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part44")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part45")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part46")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part47")}</Link>
            </div>
            <div className={styles.introduceFooterGridRow}>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part48")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part49")}</Link>
            <Link to='/home' className={styles.introduceFooterGridRowLink}>{t("description.part50")}</Link>
            </div>
           
            </div>

            <p>Website designed by phanhoang1022002@gmail.com</p>
        </div>
    )
}

export default IntroduceFooter;