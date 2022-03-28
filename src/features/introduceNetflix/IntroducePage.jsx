import IntroduceBanner from '../../components/pages/introduce/introduceBanner'
import IntroduceContent from '../../components/pages/introduce/introduceContent';
import IntroduceFooter from '../../components/pages/introduce/introduceFooter';
import {useEffect} from 'react'

function IntroducePage() {
    const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
    const id = JSON.parse(window.localStorage.getItem("id"));
   useEffect(()=>{
    if(id!==0){
        window.location.href="/browse"
      }
   },[id])
    return (
        <div style={{margin:"-8px",backgroundColor:"black"}}>
        <IntroduceBanner/>
        <IntroduceContent/>
        <IntroduceFooter/>
        </div>
    )
}
export default IntroducePage;