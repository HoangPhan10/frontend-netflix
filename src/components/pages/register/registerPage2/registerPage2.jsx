import { useEffect,useState } from 'react';
import Footer from '../../../common/Footer';
import NavbarRegister from '../../../common/NavbarRegister';
import { useTranslation } from 'react-i18next';
import styles from './registerPage2.module.scss'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {changeEmail, changePassword} from '../../../../redux/slices/mainSlice'
import { useGetUsersQuery } from '../../../../api/users';
import checkEmail from '../../../../constants/validate/checkEmail'
import CallApi from './../../../../api/postApi';
function RegisterPage2() {
  const {t}=useTranslation()
  const {data}=useGetUsersQuery()
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.main.email);
  const password = useSelector((state) => state.main.password); 
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(false)
  const [show2,setShow2] = useState(false)
  const [show3,setShow3] = useState(false)
  const [show4,setShow4] = useState(false)
  const [focus,setFocus] = useState(0)
  const [focus1,setFocus1] = useState(0)
  const [link,setLink] =  useState("/register2")
  const setEmail =(email)=>{
    const action=changeEmail(email)
    dispatch(action)
  }
  const setPassword=(password)=>{
    const action=changePassword(password)
    dispatch(action)
  }
  const handleSubmit=()=>{
    if(!show&&!show2&&!show3&&!show4&&!show1){
      CallApi(`users`, "POST",{
            email: email,
            password: password,
          }).then(res=>console.log(res))
    }
    
  }
  useEffect(()=>{
    if(focus===1){
      if(email.trim().length===0){
        setShow1(true)
        setShow2(false)
      }else if(!checkEmail(email)){
        setShow2(true)
        setShow1(false)
      }else{
        setShow2(false)
        setShow1(false)
      }
    }
    if(data&&show1===false&&show2===false){
      const check = !data.find((el)=>el.email===email)
      setShow(!check)
    }
    if(!show&&!show2&&!show3&&!show4&&!show1&&email.length!==0&&password.length!==0){
      setLink("/register3")
    }else{
      setLink("/register2")
    }
  },[email])

  useEffect(()=>{
      if(focus1===1){
        if(password.trim().length===0){
          setShow3(true)
          setShow4(false)
        }else if(password.trim().length<6){
          setShow3(false)
          setShow4(true)
        }else{
          setShow3(false)
          setShow4(false)
        }
      }
      if(password.trim().length>5&&!show&&!show2&&!show1){
        setLink("/register3")
      }else{
        setLink("/register2")
      }
  },[password])
  return (
    <div>
      <NavbarRegister/>
      <div className={styles.registerPage2}>
        <div>
        <strong>{t("description.part401")}</strong>
        <h1>{t("description.part392")}</h1>
        <p>{t("description.part393")}</p>
        <p>{t("description.part394")}</p>
        <input type="email" value={email} onFocus={()=>setFocus(1)} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
       {show &&  <p className={styles.error}>{t("description.part400")}</p>}
       {show1 &&  <p className={styles.error}>{t("description.part396")}</p>}
       {show2 &&  <p className={styles.error}>{t("description.part397")}</p>}
        <input type="password" value={password} onFocus={()=>setFocus1(1)} onChange={(e)=>setPassword(e.target.value)}  placeholder={t("description.part143")}/>
        {show3 && <p className={styles.error}>{t("description.part398")}</p>}
       {show4 &&  <p className={styles.error}>{t("description.part399")}</p>}

      <section>
        <input type="checkbox"/>
      <span>{t("description.part395")}</span>
      </section>
        <Link to={link} className={styles.link} onClick={handleSubmit}>{t("description.part391")} </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default RegisterPage2