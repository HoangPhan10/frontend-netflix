import NavbarRegister from "../../../common/NavbarRegister"
import Footer from "../../../common/Footer"
import { checkmark } from "../../../../assets/images/banner"
import styles from './registerPage3.module.scss'
import { useTranslation } from 'react-i18next';
function RegisterPage3() {
  const {t} = useTranslation()
  return (
    <div>
      <NavbarRegister/>
      <div className={styles.registerPage3}>
        <div>
        <img src={checkmark} alt=""/>
        <strong>{t("description.part402")}</strong>
        <h1>{t("description.part403")}</h1>
        <p>{t("description.part404")}</p>
        <a className={styles.link} href="/login">{t("description.part391")}</a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default RegisterPage3