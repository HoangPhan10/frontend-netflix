import {Routes,Route} from 'react-router-dom'
import QuestionContact from '../../components/pages/questions/questionContact/questionContact'
function IntroduceRoutes(){
    return (
        <Routes>
        <Route path="/question" element={<QuestionContact/>}/>
        </Routes>
    )
}
export default IntroduceRoutes;