import type { Hotel } from "../types.ts";
import { createContext, useContext, useEffect, useState } from "react";
import { getHotels } from "../services/hotels.ts";

interface HotelContextProps {
  hotels: Hotel[];
  isLoading: boolean;
  getHotelById: (id: string) => Hotel | undefined;
  // bookings: Booking[];
}

const HotelContext = createContext<HotelContextProps>({
  hotels: [],
  isLoading: true,
  getHotelById: () => undefined,
});

export const HotelProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  // const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (hotels.length === 0) {
      getHotels().then((data) => {
        setIsLoading(false);
        setHotels(data as Hotel[]);
      });
    }
  });

  const getHotelById = (id: string) => hotels.find((hotel) => hotel.id === id);

  const ProviderProps = {
    hotels,
    isLoading,
    getHotelById,
  };

  return (
    <HotelContext.Provider value={ProviderProps}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotels = () => useContext(HotelContext);
