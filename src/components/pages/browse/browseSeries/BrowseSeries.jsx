import NavbarBrowse from "../../../common/NavbarBrowse"
import styles from '../browseHome/browseHome.module.scss'
import FilmSeries from '../../../common/categoryMovie/FilmSeries/FilmSeries';
import Footer from '../../../common/Footer'
function BrowseSeries() {
  return (
    <div>
        <NavbarBrowse/>
        <div className={styles.browseHome}>
        <FilmSeries/>
        </div>
        <Footer/>
    </div>
  )
}

export default BrowseSeries