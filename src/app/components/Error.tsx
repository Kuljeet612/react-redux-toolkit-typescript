import error from './assets/Error.gif';
import styles from './Error.module.css'

const Error = () => {
    return (
    <div className={styles.error}>
        <img className="my-3" src={error} alt="loading"/>
    </div>
    ) 
}
export default Error;