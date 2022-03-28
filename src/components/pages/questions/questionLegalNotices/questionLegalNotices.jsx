import Navbar from '../../../common/Navbar'
import QuestionLegalNoticesBody from './questionLegalNoticesBody'
import Footer from './../../../common/Footer';
import { useEffect } from 'react';
function QuestionLegalNotices() {
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div>
        <Navbar/>
        <QuestionLegalNoticesBody/>
        <Footer/>
    </div>
  )
}

export default QuestionLegalNotices