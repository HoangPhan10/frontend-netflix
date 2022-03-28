import Navbar from '../../../common/Navbar';
import Footer from './../../../common/Footer';
import QuestionTermsofUseBody from './questionTermsofUseBody';
import { useEffect } from 'react';
function QuestionTermsofUse() {
  const index = window.location.href.split("/")[3];
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [index]);
  return (
    <div>
      <Navbar/>
      <QuestionTermsofUseBody/>
      <Footer/>
    </div>
  )
}

export default QuestionTermsofUse