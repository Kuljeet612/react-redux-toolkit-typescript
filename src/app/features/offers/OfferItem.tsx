import { useAppSelector } from "../../../redux/hooks";
import styles from "./OfferItem.module.css";
import { FALLBACK_IMG_URL } from "../../../constants";

export const OfferItem = () => {
  const offers = useAppSelector((state) => state.offers.items);

  const renderOffers = () => {  
    return (
      <ul className={styles.offers}>
        {offers && offers.map((offer) => (
          <li key={offer["id"]}>
            <article className={styles.offer}>
              <div className={styles.text}>               
                <img 
                  loading="lazy"
                  src={offer["carGroupInfo"]["modelExample"]["imageUrl"] ? offer["carGroupInfo"]["modelExample"]["imageUrl"] : FALLBACK_IMG_URL}                  
                  alt={offer["carGroupInfo"]["modelExample"]["name"]}
                  title={offer["carGroupInfo"]["modelExample"]["name"]}
                  className={styles.moduleImg}
                />
                 <h1 className={styles.title}>
                  {offer["carGroupInfo"]["modelExample"]["name"]}
                </h1>
                <p>{offer['prices']['totalPrice']['amount']['display']} {offer['prices']['totalPrice']['amount']['currency']}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    );
  };

  return <>{renderOffers()}</>;
};
