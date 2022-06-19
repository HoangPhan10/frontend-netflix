import styles from './Account.module.scss'
import Footer from '../../common/Footer'
import NavbarBrowse from '../../common/NavbarBrowse'
import { useGetUsersQuery } from "../../../api/users";
import {useState,useEffect} from 'react'
import CallApi from '../../../api/postApi';
function Account() {
  const { data } = useGetUsersQuery();
  const [infoUser,setInfoUser]=useState({})

  const [password,setPassword]=useState("")
  const [newPassword,setNewPassword]=useState("")
  const [repeatPassword,setRepeatPassword]=useState("")
  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)
  const [message,setMessage]= useState("")
  const [isPassword,setIsPassword]=useState(false)
  const [isNewPassword,setIsNewPassword]=useState(false)
  const [isRepeatPassword,setIsRepeatPassword]=useState(false)

  const id = JSON.parse(localStorage.getItem("id"))
  useEffect(()=>{
    if(data){
      const info = data.find(el=>el._id===id)
      setInfoUser(info)
    }
  },[data])

  const OnChangeNewPassword=(e)=>{
  setNewPassword(e);
  setIsNewPassword(e.trim().length<6)
  }
  const OnChangeRepeatPassword=(e)=>{
    setRepeatPassword(e)
    setIsRepeatPassword(e!==newPassword)
  }
  const HandlePassword=()=>{
    if(password===infoUser.password){
      setIsPassword(false)
      if(!isNewPassword&&!isRepeatPassword&&!isPassword&&newPassword.length>0&&repeatPassword.length>0){
        CallApi("users/update","POST",{
          id:infoUser._id,
          password:newPassword
        }).then(()=>{
          setSuccess(true)
          setError(false)
          setPassword("")
          setNewPassword("")
          setRepeatPassword("")
        }).catch((e)=>{
          setMessage(e)
        })
      }else{
        setSuccess(false)
        setError(true)
    }
    }else{
      setIsPassword(true)
    }
  }
  return (
    <>
      <NavbarBrowse />
      <div className={styles.account}>
        <h2>TÀI KHOẢN</h2>
        <div className={styles.accountInfo}>
          <div className={styles.info}>
           {success&& <span className={styles.success}>Thay đổi mật khẩu thành công</span>}
           {error&& <span className={styles.error}>Vui lòng nhập đầy đủ thông tin</span>}
            <div>
              <strong>Email</strong>
              <input type="email" disabled value={infoUser?.email}/>
            </div>
            <div>
              <strong>Mật khẩu</strong>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
             {isPassword&& <span>Mật khẩu không chính xác</span>}
            </div>
            <div>
              <strong>Mật khẩu mới</strong>
              <input type="password" value={newPassword} onChange={(e)=>OnChangeNewPassword(e.target.value)} />
              {isNewPassword&&<span>Mật khẩu ít nhất phải có 6 kí tự</span>}
            </div>
            <div>
              <strong>Nhập lại mật khẩu</strong>
              <input type="password" value={repeatPassword} onChange={(e)=>OnChangeRepeatPassword(e.target.value)} />
             {isRepeatPassword&& <span>Mật khẩu không khớp</span>}
            </div>
            <button onClick={HandlePassword}>THAY ĐỔI MẬT KHẨU</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Account
