import NavbarBrowse from "../../components/common/NavbarBrowse"
import BrowseHome from '../../components/pages/browse/browseHome/BrowseHome';
import { useEffect } from 'react';
import Footer from '../../components/common/Footer'
function Browse() {
  const id = JSON.parse(window.localStorage.getItem("id"));
  useEffect(()=>{
    if(id===0){
        window.location.href="/"
      }
   },[id])
  return (
    <div>
      <NavbarBrowse/>
      <BrowseHome/>
      <Footer/>
    </div>
  )
}

export default Browse