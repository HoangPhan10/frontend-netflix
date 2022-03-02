import styles from './introduce.module.scss'
import { useTranslation } from 'react-i18next';
import { tv, video, phone, film, children, mobile } from '../../../assets/images/introduceNetflix'
import CircularProgress from '@mui/material/CircularProgress';
import IntroduceQuestion from './introduceQuestion';
function IntroduceContent() {
    const { t } = useTranslation()
    return (
        <section className={styles.introduceContent}>
            <div className={styles.contentGrid}>
                <div className={styles.contentGridTitle}>
                    <h1>{t("description.part6")}</h1>
                    <h2>{t("description.part7")}</h2>
                </div>
                <div className={styles.contentGridVideo} >
                    <video src={video} />
                </div>
                <div className={styles.contentGridImage}>
                    <img src={tv} alt="" />
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.contentGridImage2}>
                    <img src={phone} alt="" />
                    <div className={styles.dowload}>
                        <img src={film} alt="" />
                        <div>
                            <p>{t("description.part10")}</p>
                            <span>{t("description.part11")}</span>
                        </div>
                        <CircularProgress className={styles.dowloadNow} disableShrink />
                    </div>
                </div>
                <div className={styles.contentGridTitle2}>
                    <h1>{t("description.part8")}</h1>
                    <h2>{t("description.part9")}</h2>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.contentGridTitle3}>
                    <h1>{t("description.part12")}</h1>
                    <h2>{t("description.part13")}</h2>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div style={{ marginLeft: 0 }} className={styles.contentGridImage2}>
                    <img src={children} alt="" />
                </div>
                <div className={styles.contentGridTitle2}>
                    <h1>{t("description.part14")}</h1>
                    <h2>{t("description.part15")}</h2>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.contentGridTitle} style={{paddingBottom:80}}>
                    <h1>{t("description.part16")}</h1>
                    <h2>{t("description.part17")}</h2>
                    <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient">
                        {t("description.part18")}
                      <span>{">"}</span>
                        </a>
                </div>
                <div style={{ marginTop: 50 }} className={styles.contentGridImage}>
                    <img src={mobile} alt="" />
                </div>
            </div>
            <IntroduceQuestion/>
        </section>
    )
}
export default IntroduceContent
