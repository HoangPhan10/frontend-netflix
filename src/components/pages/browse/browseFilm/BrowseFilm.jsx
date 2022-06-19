import NavbarBrowse from "../../../common/NavbarBrowse"
import styles from '../browseHome/browseHome.module.scss'
import Film from '../../../common/categoryMovie/Film/Film';
import Footer from '../../../common/Footer'
function BrowseFilm() {
  return (
    <div>
        <NavbarBrowse/>
        <div className={styles.browseHome}>
        <Film/>
        </div>
        <Footer/>
    </div>
  )
}

export default BrowseFilm