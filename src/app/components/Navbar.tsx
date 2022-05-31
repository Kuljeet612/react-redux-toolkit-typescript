import styles from "../../../src/App.module.css";
import { SIXT_LOGO_URL } from "../../constants";

export const Navbar = () => {
  return (
    <>
    <div className={styles.headerWrapper} role="navigation">
    <header className={styles.header}>
      <nav>
        <div className={styles.navLink} >
        <img src={SIXT_LOGO_URL} alt="logo" className={styles.templateLogo}/>
        </div>
        <div className={styles.navLink}>
          Offers
        </div>        
      </nav>
    </header>
  </div>
  </>
  )
}

export default Navbar