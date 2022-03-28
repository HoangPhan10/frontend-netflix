import styles from './browseHome.module.scss'
import RomanticTvComedy from './../../../common/categoryMovie/romanticTvComedy/romanticTvComedy';
import MediaTvShow from './../../../common/categoryMovie/medicalTvShow/medicalTvShow';
import DramaTvSeries from '../../../common/categoryMovie/dramaTvSeries/dramaTvSeries';
import CrimeTvShow from '../../../common/categoryMovie/CrimeTvShow/CrimeTvShow';
function BrowseHome() {
  
  return (
    <div className={styles.browseHome}>
      <RomanticTvComedy/>
      <MediaTvShow/>
      <DramaTvSeries/>
      <CrimeTvShow/>
    </div>
  )
}

export default BrowseHome