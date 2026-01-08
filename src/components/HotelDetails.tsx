import { useParams } from "react-router-dom";
import { useHotels } from "../context/HotelContext.tsx";
import styles from "./HotelDetails.module.css";
import { DateSelector } from "./DateSelector.tsx";
import { useEffect, useState } from "react";
import { addDays, daysBetween } from "../utils/dates.ts";
import { DaysInput } from "./DaysInput.tsx";

function HotelDetails() {
  const [dateError, setDateError] = useState<string | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [totalDays, setTotalDays] = useState<number>(1);
  const [selectCheckOut, setSelectCheckOut] = useState<boolean>(false);
  const { hotelId } = useParams();
  const { getHotelById } = useHotels();

  console.info("on render", {
    selectCheckOut,
    checkInDate,
    checkOutDate,
    totalDays,
  });

  useEffect(() => {
    if (selectCheckOut) {
      if (checkInDate && checkOutDate) {
        validateDates(checkInDate, checkOutDate);
      }
      return;
    }
    if (checkInDate && totalDays > 0) {
      setCheckOutDate(addDays(checkInDate, totalDays));
    }
  }, [checkInDate, selectCheckOut, totalDays]);

  /*useEffect(() => {
    if (!selectCheckOut && !checkInDate) return;
    const checkOut = addDays(checkInDate!, totalDays);
    console.info("checkin plus days", {
      checkInDate,
      totalDays,
      checkOut,
    });
    // setCheckOutDate(checkOut);
  }, [checkInDate, totalDays, selectCheckOut]);*/

  if (!hotelId) return <p>No hotel selected</p>;

  const hotel = getHotelById(hotelId);

  if (!hotel) return <p>Hotel not found</p>;

  const validateDates = (checkIn: Date, checkOut: Date) => {
    const rightNow = new Date();
    const timestampUTC = Date.UTC(
      rightNow.getFullYear(),
      rightNow.getMonth(),
      rightNow.getDate(),
    );
    const todayUTC = new Date(timestampUTC);
    todayUTC.setUTCHours(0, 0, 0, 0);

    console.info("dates", {
      rightNow,
      timestampUTC,
      todayUTC,
      checkIn,
      checkOut,
    });

    if (checkIn > checkOut) {
      setDateError("Check-in date must be before check-out date");
      return;
    }
    if (checkIn.getTime() === checkOut.getTime()) {
      setDateError("Check-in and check-out dates must be different");
      return;
    }
    if (checkIn.getTime() < todayUTC.getTime()) {
      console.info("date error", {});
      setDateError("Check-in date must not be in the past");
      return;
    }
    // if (checkOut.getTime() < Date.now()) {
    //   setDateError("Check-out date must be in the future");
    //   return;
    // }
    setDateError(null);
  };

  return (
    <div className={styles.hotelDetails}>
      <section className={styles.dates}>
        <DateSelector
          title="Check-In"
          onSelected={(date) => setCheckInDate(date)}
        />
        {selectCheckOut ? (
          <>
            <DateSelector
              title="Check-Out"
              onSelected={(date) => setCheckOutDate(date)}
            />
            {totalDays > 0 && <p>Total Days: {totalDays}</p>}
          </>
        ) : (
          <div>
            <DaysInput onUpdate={(days) => setTotalDays(days)} />
            <p>Checkout Date: {checkOutDate?.toUTCString()}</p>
            {/*<p>OR</p>
            <button onClick={() => setSelectCheckOut(true)}>
              Select Check-Out Date
            </button>*/}
          </div>
        )}
      </section>
      <p className={styles.dateError}>{dateError}</p>
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
    </div>
  );
}

export { HotelDetails };
