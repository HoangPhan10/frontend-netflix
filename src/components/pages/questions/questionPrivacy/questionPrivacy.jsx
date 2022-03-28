import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";
import QuestionPrivacyBody from './questionPrivacyBody';
import { useEffect } from 'react';
function QuestionPrivacy() {
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div>
      <Navbar/>
      <QuestionPrivacyBody/>
      <Footer/>
    </div>
  )
}

export default QuestionPrivacy