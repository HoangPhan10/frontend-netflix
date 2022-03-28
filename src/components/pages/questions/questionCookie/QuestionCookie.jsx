import Navbar from "../../../common/Navbar"
import QuestionCookieBody from './QuestionCookieBody';
import Footer from './../../../common/Footer';
import { useEffect } from 'react';
function QuestionCookie() {
    const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div>
        <Navbar/>
        <QuestionCookieBody/>
        <Footer/>
    </div>
  )
}

export default QuestionCookie