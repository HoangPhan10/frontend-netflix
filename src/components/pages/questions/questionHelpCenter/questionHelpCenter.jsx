import Footer from "../../../common/Footer"
import Navbar from "../../../common/Navbar"
import QuestionHelpCenterBody from "./questionHelpCenterBody"
import {useEffect} from 'react'

function QuestionHelpCenter() {
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div>
        <Navbar/>
        <QuestionHelpCenterBody/>
        <Footer/>
    </div>
  )
}

export default QuestionHelpCenter