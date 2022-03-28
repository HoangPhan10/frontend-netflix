import styles from "./login.module.scss";
import { banner1 } from "../../../assets/images/banner";
import { logo } from "../../../assets/images/introduceNetflix";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useGetUsersQuery } from "../../../api/users";
import checkEmail from "../../../constants/validate/checkEmail";
import { useSelector, useDispatch } from "react-redux";
import {changeEmail, changePassword} from '../../../redux/slices/mainSlice'
import Footer from '../../common/Footer'
function Login() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.main.email);
  const password = useSelector((state) => state.main.password);
  const { data } = useGetUsersQuery();
  const { t } = useTranslation();
  const [link,setLink] =useState("/login")
  const inputRef = useRef();
  const index = window.location.href.split("/")[3];
  const [focus,setFocus]=useState(0)
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const setEmail =(email)=>{
    const action=changeEmail(email)
    dispatch(action)
  }
  const setPassword=(password)=>{
    const action=changePassword(password)
    dispatch(action)
  }
  const findEmail =()=>{
    if(data!==undefined){
      const find = data.find((el)=>{
      return el.email===email&&el.password===password
    })
    if(find!==undefined){
      setLink("/browse")
    }else{
      setLink("/login")
    }
    }
  }
  const id = JSON.parse(window.localStorage.getItem("id"));
  useEffect(()=>{
    if(id!==0){
        window.location.href="/browse"
      }
   },[id])
  useEffect(() => {
    window.scrollTo(0, 0);
    inputRef.current.focus();
  }, [index]);
  useEffect(() => {
    const check = checkEmail(email);
    if (!check) {
      if (email.trim().length === 0) {
        setShow1(true);
        setShow2(false);
      } else {
        setShow2(true);
        setShow1(false);
      }
    } else {
      setShow2(false);
      setShow1(false);
    }
    findEmail()
  }, [email]);

  const handleFocus =()=>{
    setFocus(1)
  }
  const handleSubmit =()=>{
    if(link==="/login"&&show1===false&&show2===false&&show3===false){
      setShow(true)
    }
    if(link==="/browse"){
      const find = data.find((el)=>{
        return el.email===email&&el.password===password
      })
      window.localStorage.setItem("id", JSON.stringify(find._id));
    }
    
  }

  useEffect(()=>{
    if(password.trim().length>5){
      setShow3(false)
    }
    if(password.trim().length<=5&&focus===1){
      setShow3(true)
    }
    findEmail()
  },[password])
 
  return (
    <div className={styles.login}>
      <img src={banner1} alt="" />
      <div className={styles.loginOverlay}>
        <img src={logo} alt="" />
        <div className={styles.formLogin}>
          <h1>{t("description.part0")}</h1>
         {show &&  <p className={styles.error}>
          {t("description.part151")}
          <Link to="/" className={styles.errorLink}>{t("description.part152")}</Link>
          </p>}
          <input
            ref={inputRef}
            className={styles.Input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("description.part140")}
          />
          {show1 && <span>{t("description.part141")}</span>}
          {show2 && <span>{t("description.part142")}</span>}
          <input
            className={styles.Input}
            placeholder={t("description.part143")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleFocus}
            type="password"
          />
          {show3 && <span>{t("description.part144")}</span>}
          <Link to={link} className={styles.Button} onClick={handleSubmit}>
            {t("description.part0")}
          </Link>
          <div className={styles.remember}>
            <div>
              <input type="checkbox" />
              <p>{t("description.part145")}</p>
            </div>
            <p>{t("description.part146")}</p>
          </div>
          <p>
            {t("description.part147")}
            <Link to="/">{t("description.part148")}</Link>
          </p>
          <span className={styles.Span} style={{ color: "blue" }}>
            {t("description.part149")}
          </span>
          <span className={styles.Span}>{t("description.part150")}</span>
        </div>
        <Footer styles={{backgroundColor:"red"}}/>
      </div>
    </div>
  );
}

export default Login;
