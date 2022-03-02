import IntroduceBanner from '../../components/pages/introduce/introduceBanner'
import IntroduceContent from '../../components/pages/introduce/introduceContent';
import IntroduceFooter from '../../components/pages/introduce/introduceFooter';

function IntroducePage() {
    return (
        <div style={{margin:"-8px",backgroundColor:"black"}}>
        <IntroduceBanner/>
        <IntroduceContent/>
        <IntroduceFooter/>
        </div>
    )
}
export default IntroducePage;