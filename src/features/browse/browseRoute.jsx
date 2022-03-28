import {Route,Routes} from 'react-router-dom';
import BrowseHome from './../../components/pages/browse/browseHome/BrowseHome';
import BrowseSeries from './../../components/pages/browse/browseSeries/BrowseSeries';
import EspisodesInformation from './../../components/common/categoryMovie/espisodes/espisodesInformation';
import Video from './../../components/common/video/video';

function BrowseRoute(){
    return (
        <Routes>
        {/* <Route path="/browse" element={<BrowseHome/>}/> */}
        <Route path="/browse/series" element={<BrowseSeries/>}/>
        <Route path="/browse/informationMovie" element={<EspisodesInformation/>}/>
        <Route path="/browse/watchMovie" element={<Video/>}/>
        </Routes>
    )
}
export default BrowseRoute