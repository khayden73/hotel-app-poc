type RoomType = "Single" | "Double" | "Queen" | "King";

export type Hotel = {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
};

export type Inventory = {
  id: string;
  hotelId: string;
  roomType: RoomType;
  quantity: number;
  price: number;
};

export type Booking = {
  id: string;
  hotelId: string;
  roomType: RoomType;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  guestNames: string;
  email: string;
};

export type DateFormatOptions = Intl.DateTimeFormatOptions;
