import { useState,useEffect } from 'react';
import CallApi from '../../../../api/postApi';
import Form from '../../form'
function MediaTvShow() {
    const [films,setFilms]=useState([])
  useEffect(()=>{
    CallApi("films","GET",null).then(res=>{
      if(res){
          const filmArr=[]
        res.data.forEach((el)=>{
          const arr = el.category.split(",")
          arr.forEach(elm=>{
             if(elm==="Chương trình truyền hình y học"){
               filmArr.push(el)
             }
          })
        })
        setFilms(filmArr)
      }
    })
  },[])
  
  return (
    <div >
         <p>Chương trình truyền hình y học</p>
     <div style={{display:"flex",flexWrap:"wrap"}}>
     {films.map((el,index)=>(
          <Form film={el} index={index}/>
      ))}
     </div>
    </div>
  )
}

export default MediaTvShow