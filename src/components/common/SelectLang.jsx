import styles from './common.module.scss'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';


function SelectLang(){
    const {t,i18n} =useTranslation()
    const changeLanguage =(lang)=>{
      i18n.changeLanguage(lang)
    }
    return (
        <div className={styles.selectLang}>
        <LanguageIcon className={styles.selectLangIcon}/>
       <p>{t("description.part")}</p>
    <KeyboardArrowDownIcon className={styles.selectLangIcon2}/>
    <div className={styles.selectLangFocus}>
        <p onClick={()=>changeLanguage("vi")}>Tiếng Việt</p>
        <p onClick={()=>changeLanguage("en")}>English</p>
    </div>
        </div>
    )
}
export default SelectLang