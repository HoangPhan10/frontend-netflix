import styles from './common.module.scss'
import SelectLang from './SelectLang'
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'
function Footer() {
  const { t } = useTranslation();
  
  return (
    <div className={styles.Footer}>
     <div className={styles.FooterSelect}>
     <SelectLang/>
     </div>
     <div>
       <Link to="/termsOfUse" className={styles.FooterLink}>{t("description.part74")}</Link>
       <Link to="/privacy" className={styles.FooterLink}>{t("description.part75")}</Link>
       <Link to="/cookie" className={styles.FooterLink}>{t("description.part76")}</Link>
       <Link to="/corporateInformation" className={styles.FooterLink}>{t("description.part77")}</Link>
       
     </div>
    </div>
  )
}

export default Footer