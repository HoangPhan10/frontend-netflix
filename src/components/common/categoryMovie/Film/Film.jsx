import { useState,useEffect } from 'react';
import CallApi from '../../../../api/postApi';
import Form from '../../form'
function Film() {
    const [films,setFilms]=useState([])
  useEffect(()=>{
    CallApi("films","GET",null).then(res=>{
      if(res){
          const filmArr=[]
        res.data.forEach((el)=>{
          const arr = el.category.split(",")
          arr.forEach(elm=>{
            if(elm==="Phim hài truyền hình lãng mạn"||elm==="Chương trình truyền hình y học"||elm==="Phim truyền hình chính kịch"||elm==="Phim truyền hình kinh dị"||elm==="Phim truyền hình chiếu rạp"){
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
     <div style={{display:"flex",flexWrap:"wrap"}}>
     {films.map((el,index)=>(
          <Form film={el} index={index}/>
      ))}
     </div>
    </div>
  )
}

export default Film