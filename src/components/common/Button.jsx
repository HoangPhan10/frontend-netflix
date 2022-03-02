import styles from './common.module.scss'
import {Link} from  'react-router-dom'
function Button(props){
    return (
        <div>
            <Link to="/login" className={styles.button}>{props.title}</Link>
        </div>
    )
}
export default Button