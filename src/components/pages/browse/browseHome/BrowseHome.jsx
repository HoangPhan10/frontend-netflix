import styles from './browseHome.module.scss'
import RomanticTvComedy from './../../../common/categoryMovie/romanticTvComedy/romanticTvComedy';
import MediaTvShow from './../../../common/categoryMovie/medicalTvShow/medicalTvShow';
import DramaTvSeries from '../../../common/categoryMovie/dramaTvSeries/dramaTvSeries';
import CrimeTvShow from '../../../common/categoryMovie/CrimeTvShow/CrimeTvShow';
import HorrorTvSeries from '../../../common/categoryMovie/horrorTvSeries/horrorTvSeries';
import TheaterTvSeries from '../../../common/categoryMovie/theaterTvSeries/theaterTvSeries';
function BrowseHome() {
  
  return (
    <div className={styles.browseHome}>
      <RomanticTvComedy/>
      <MediaTvShow/>
      <DramaTvSeries/>
      <CrimeTvShow/>
      <HorrorTvSeries/>
      <TheaterTvSeries/>
    </div>
  )
}

export default BrowseHome