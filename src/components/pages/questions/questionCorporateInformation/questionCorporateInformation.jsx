import Navbar from "../../../common/Navbar"
import QuestionCorporateInformationBody from "./questionCorporateInformationBody"
import Footer from './../../../common/Footer';
import {useEffect} from 'react'
function QuestionCorporateInformation() {
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div>
        <Navbar/>
        <QuestionCorporateInformationBody/>
        <Footer/>
    </div>
  )
}

export default QuestionCorporateInformation