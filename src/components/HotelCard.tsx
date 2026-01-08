import type { Hotel } from "../types.ts";
import { Link } from "react-router-dom";
import styles from "./HotelCard.module.css";

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className={styles.hotelCard}>
      <h3>{hotel.name}</h3>
      <p>{hotel.location}</p>
      <p>{hotel.description}</p>
      <p>${Number(hotel.price).toFixed(2)}</p>
      <Link to={`/hotel/${hotel.id}`}>Book Now</Link>
      {/*<button className={styles.bookNow}>book now</button>*/}
    </div>
  );
};

export { HotelCard };
