import styles from "./questionFaq.module.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../../../../assets/images/questions";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function QuestionFaqBody() {
  const { t } = useTranslation();

  return (
    <div className={styles.Question}>
      <h1>{t("description.part78")}</h1>
      <div className={styles.QuestionCol}>
        <div className={styles.QuestionCol1}>
          <img src={image1} alt="" />
          <p>{t("description.part79")}</p>
          <p>
            {t("description.part80")}
            <a href="https://help.netflix.com/vi/node/54816">
              {t("description.part81")}
            </a>
            {t("description.part82")}
          </p>
          <p className={styles.borderBottom}>
            {t("description.part83")}
            <a href="https://help.netflix.com/vi/node/102377">
              {t("description.part84")}
            </a>
          </p>
          <h2>{t("description.part85")}</h2>
          <img src={image2} alt="" />
          <p>{t("description.part86")}</p>
          <p className={styles.borderBottom}>{t("description.part87")}</p>
          <h2>{t("description.part88")}</h2>
          <img src={image3} alt="" />
          <p>
            {t("description.part89")}
            <a href="https://devices.netflix.com/fr/">
              {t("description.part90")}
            </a>
            {t("description.part91")}
          </p>
          <p>
            {t("description.part92")}
            <Link className={styles.ctf24} to="/helpCenter">
              {t("description.part40")}
            </Link>
            {t("description.part93")}
          </p>
          <strong>
            {t("description.part94")}
            <span>{t("description.part95")}</span>
          </strong>
          <h2 className={styles.h2BorderTop}>{t("description.part96")}</h2>
          <img src={image5} alt="" />
          <p>{t("description.part97")}</p>
          <p className={styles.borderBottom} >
            <a href="https://help.netflix.com/vi/node/24926">
              {" "}
              {t("description.part98")}
            </a>
            {t("description.part99")}
          </p>
          <h2 >{t("description.part100")}</h2>
          <img src={image4} alt="" />
          <p>{t("description.part101")}</p>
          <p>1.  {t("description.part102")} <Link to="/login">netflix.com/singup</Link></p>
          <p>2. <a href="https://help.netflix.com/vi/node/24926">{t("description.part103")}</a> {t("description.part104")}</p>
            <p>3. {t("description.part105")}  </p>
            <p>4. {t("description.part106")} <a>{t("description.part107")}</a>  {t("description.part108")}  </p>
          <p>{t("description.part109")}</p>
        
        </div>
        <div className={styles.QuestionCol2}>
          <h4>{t("description.part111")}</h4>
          <ul>
            <li>
              <a href="https://help.netflix.com/vi/node/102377">
                {t("description.part112")}
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/vi/node/41049">
                {t("description.part113")}
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/vi/node/32950">
                {t("description.part114")}
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/vi/node/470">
                {t("description.part115")}
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/vi/node/10421">
                {t("description.part116")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contact}>
          <h2>{t("description.part110")}</h2>
          <div>
          <a className={styles.Button}> {t("description.part62")}</a>
          <a className={styles.Button}> {t("description.part65")}</a>
          </div>
        </div>
    </div>
  );
}

export default QuestionFaqBody;
