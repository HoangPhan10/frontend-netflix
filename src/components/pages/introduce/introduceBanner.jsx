import { banner, logo } from '../../../assets/images/introduceNetflix'
import styles from './introduce.module.scss'
import Button from '../../common/Button'
import InputStart from '../../common/InputStart'
import { useTranslation } from 'react-i18next';
import SelectLang from '../../common/SelectLang';
function IntroduceBanner() {
  const {t} =useTranslation()

    return (
        <div className={styles.introduceBanner}>
            <img src={banner} alt="" />
            <div className={styles.introduceBannerOverlay}>
                <div className={styles.introduceBannerOverlayHeader}>
                    <img src={logo} alt="" />
                    <div className={styles.header}>
                    <SelectLang />
                    <Button title={t("description.part0")} />
                    </div>
                </div>
                <div className={styles.introduceBannerOverlayContent}>
                <h1>{t("description.part1")}</h1>
                <p>{t("description.part2")}</p>
                <span>{t("description.part3")}</span>
                <InputStart/>
                </div>
            </div>
        </div>
    )
}
export default IntroduceBanner