import loading from './assets/Success.gif';
import styles from './Success.module.css';

const Success = () => {
    return (
    <div className={styles.success}>
        <img className={styles.imgStyles} src={loading} alt="loading" aria-label="loading"/>
    </div>
    ) 
}
export default Success;