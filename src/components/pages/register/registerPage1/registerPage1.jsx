import {Link} from 'react-router-dom'
import { devices } from "../../../../assets/images/banner"
import styles from './registerPage1.module.scss'
import { useTranslation } from 'react-i18next';
import {useEffect} from 'react'
function RegisterPage1() {
  const {t} =useTranslation()
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div className={styles.registerPage1}>
        <div className={styles.margin}>
        <img src={devices} alt=""/>
        <span>{t("description.part388")}</span>
        <h2>{t("description.part389")}</h2>
        <p>{t("description.part390")}</p>
        <Link to="/register2" className={styles.link}>{t("description.part391")}</Link>
        </div>
    </div>
  )
}

export default RegisterPage1