import Footer from "../../../common/Footer";
import Navbar from "../../../common/Navbar";
import QuestionFaqBody from "./questionFaqBody";
import {useEffect} from 'react'

function QuestionFaq() {
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div>
        <Navbar/>
        <QuestionFaqBody/>
        <Footer/>
    </div>
  )
}

export default QuestionFaq