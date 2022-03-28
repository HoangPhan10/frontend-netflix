import styles from './common.module.scss'
import {logo} from '../../assets/images/introduceNetflix/'
import {Link} from  'react-router-dom'
import { useTranslation } from 'react-i18next';
import Button from './Button'
function Navbar(){
  const {t} =useTranslation()

    return (
        <div className={styles.navbar}>

        <div className={styles.navbarLogo}>
        <img src ={logo} alt=""/>
        <p>|</p>
        <Link className={styles.navbarLogoLink} to="/helpCenter">{t("description.part51")}</Link>
        </div>

        <div className={styles.navbarSingup}>
        <Link to="/login" className={styles.navbarSingupButton}>{t("description.part52")}</Link>
        <Button title={t("description.part0")}/>
        </div>
        </div>
    )
}

export default Navbar