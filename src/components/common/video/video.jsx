import styles from './video.module.scss'
import { useEffect, useState } from 'react';
import CallApi from '../../../api/postApi';
function Video() {
  const idEspisodes = JSON.parse(window.localStorage.getItem("idEspisodes"))
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idEspisodes]);
  const [video,setVideo]=useState({})
  const [title,setTitle]=useState("")
  useEffect(()=>{
    CallApi("films","GET",null).then((res)=>{
      if(res){
        const idMovie = JSON.parse(window.localStorage.getItem("idMovie"))
        const film = res.data.find((el)=>el._id===idMovie)
        const movie = film.espisodes.find((el)=>el._id===idEspisodes)
        setVideo(movie)
        setTitle(film.movieName)
      }
    })
  },[idEspisodes])
  return (
    <>
    {video!==undefined&&<div className={styles.video}>
    <video preload='auto' autoPlay  controls src={video.urlMovie}/>
      <div className={styles.videoTitle}>
        <h2>{title} tập {video.espisode}</h2>
      </div>
    </div>}
    {video===undefined&&<p>Trang bị lỗi</p>}
    </>
    
  )
}

export default Video