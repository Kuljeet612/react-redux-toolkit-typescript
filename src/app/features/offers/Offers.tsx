import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getOffers } from "../../../redux/reducers/offersSlice";
import { OfferItem } from "./OfferItem";
import Success from "../../components/Success";
import Error from "../../components/Error";

export const Offers = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.offers.status);

  useEffect(() => {
    dispatch(getOffers());    
  }, [dispatch]);

  const renderComponent = () => {
    return status === "success" ? <OfferItem /> : status === "loading" ? <Success /> : <Error />
  }

  return (
    <div>
      {renderComponent()}
    </div>
  );
};
