import styles from './common.module.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import clsx from "clsx"
function Form(props) {
    const handleClick=(id)=>{
        window.localStorage.setItem("idMovie", JSON.stringify(id));
      }
      const handleClickMovie = ()=>{
        const film =props.film
        window.localStorage.setItem("idEspisodes", JSON.stringify(film.espisodes[0]._id));
        window.localStorage.setItem("idMovie", JSON.stringify(props.film._id));
      }
  return (
    <div key ={props.index} className={clsx(styles.romantic,{
      [styles.marginTop]:parseInt(props.index+1)>5
    })}>
    <img  width="235px" height="137px" src={props.film.image} alt="ảnh"/>
    <div className={clsx(styles.hoverFilm,{
      [styles.right]:parseInt(props.index+1)%5===0,
      [styles.center]:(parseInt(props.index+1)%3===0||parseInt(props.index+1)%2===0)&&parseInt(props.index)%5!==0
    })}>
    <img  width="100%" height="177px" src={props.film.image} alt="ảnh"/>
   <div className={styles.controll}>
       <div>
       <Link to="/browse/watchMovie" onClick={handleClickMovie} className={styles.link}><PlayArrowIcon className={styles.icon}/></Link>
       <Link to="/browse" className={styles.link}><AddIcon className={styles.icon}/></Link>
       <Link to="/browse" className={styles.link}><ThumbUpAltIcon className={styles.icon}/></Link>
       </div>
       <Link onClick={()=>handleClick(props.film._id)} to="/browse/informationMovie" className={styles.link}><ArrowDropDownIcon className={styles.icon}/></Link>
   </div>
   <h4>M1:T1"Tập 1"</h4>
   <div className={styles.progress}>
       <p className={styles.P}></p>
       <p className={styles.P2}>60/60ph</p>
   </div>
    </div>
</div>
  )
}

export default Form