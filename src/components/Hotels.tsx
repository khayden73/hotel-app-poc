import { useHotels } from "../context/HotelContext.tsx";
import { HotelCard } from "./HotelCard.tsx";
import styles from "./Hotels.module.css";
// import { useEffect } from "react";

function Hotels() {
  const { hotels, isLoading } = useHotels();

  /*useEffect(() => {
    if(!isLoading && hotels.length === 0){

    }
  });*/

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.hotelsList}>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </>
  );
}

export { Hotels };
