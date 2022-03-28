import {Routes,Route} from 'react-router-dom'
import QuestionContact from '../../components/pages/questions/questionContact/questionContact'
import QuestionFaq from '../../components/pages/questions/questionFaq/questionFaq';
import QuestionHelpCenter from '../../components/pages/questions/questionHelpCenter/questionHelpCenter';
import QuestionPrivacy from '../../components/pages/questions/questionPrivacy/questionPrivacy';
import QuestionTermsofUse from './../../components/pages/questions/questionTermsofUse/questionTermsofUse';
import QuestionLegalNotices from './../../components/pages/questions/questionLegalNotices/questionLegalNotices';
import QuestionCorporateInformation from '../../components/pages/questions/questionCorporateInformation/questionCorporateInformation';
import QuestionCookie from './../../components/pages/questions/questionCookie/QuestionCookie';
function IntroduceRoutes(){
    return (
        <Routes>
        <Route path="/question" element={<QuestionContact/>}/>
        <Route path="/faq" element={<QuestionFaq/>}/>
        <Route path="/helpCenter" element={<QuestionHelpCenter/>}/>
        <Route path="/termsOfUse" element={<QuestionTermsofUse/>}/>
        <Route path="/privacy" element={<QuestionPrivacy/>}/>
        <Route path="/legalNotices" element={<QuestionLegalNotices/>}/>
        <Route path="/corporateInformation" element={<QuestionCorporateInformation/>}/>
        <Route path="/cookie" element={<QuestionCookie/>}/>
        </Routes>
    )
}
export default IntroduceRoutes;