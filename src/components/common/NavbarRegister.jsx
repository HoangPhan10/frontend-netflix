import styles from './common.module.scss'
import {logo} from '../../assets/images/introduceNetflix'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
function NavbarRegister() {
    const {t} = useTranslation()
  return (
    <div className={styles.register}>
        <img src={logo} alt=""/>
        <Link className={styles.registerLink} to="/login">{t("description.part0")}</Link>
    </div>
  )
}

export default NavbarRegister