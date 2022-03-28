import NavbarBrowse from "../../components/common/NavbarBrowse"
import BrowseHome from './../../components/pages/browse/browseHome/BrowseHome';
import { useEffect } from 'react';
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
    </div>
  )
}

export default Browse