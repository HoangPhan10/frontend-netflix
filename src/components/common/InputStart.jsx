import styles from './common.module.scss'
import {Link} from  'react-router-dom'
import { useTranslation } from 'react-i18next';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector, useDispatch } from "react-redux";
import {changeEmail} from '../../redux/slices/mainSlice'
import {useState} from 'react'
import {useGetUsersQuery} from '../../api/users'
import validateEmail from "../../constants/validate/checkEmail"
function InputStart(){

  const {data}=useGetUsersQuery()
  const {t} =useTranslation()
  const dispatch = useDispatch();
  const email = useSelector((state) => state.main.email);
  const [checkEmail,setCheckEmail]=useState(false)
  const [linkTo,setLinkTo]=useState("/")

  const onChangeEmail =(email)=>{
    const action=changeEmail(email)
    dispatch(action)
    const resultEmail = validateEmail(email)
    setCheckEmail(!resultEmail)
    if(resultEmail){
      if(!data.find(el=>el.email===email)){
        setLinkTo("/register")
      }else{
        setLinkTo("/login")
      }
    } else{
      setLinkTo("/")
    }
  }

    return (
        <>
        <div className={styles.input}>
      <input placeholder={t("description.part4")} className={styles.inputStart} onChange={(e)=>onChangeEmail(e.target.value)} value={email} type="email" /> 
      <Link to ={linkTo} className={styles.inputButton}>
        <p> {t("description.part5")}</p>
       <p className={styles.inputButtonIcon}> <ChevronRightIcon className={styles.Right} /></p>
      </Link>
        </div>
   {checkEmail &&( <p className={styles.inputWarning}>{t("description.partEmail")}</p>)}
        </>
    )
}
export default InputStart;

    
 