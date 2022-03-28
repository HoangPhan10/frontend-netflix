
import Footer from "../../../common/Footer";
import Navbar from "../../../common/Navbar";
import QuestionContactBody from "./questionContactBody";
import {useEffect} from 'react'
function QuestionContact(){
    const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
    return (
        <div>
        <Navbar/>
        <QuestionContactBody/>
        <Footer/>
        </div>
    )
}

export default QuestionContact;