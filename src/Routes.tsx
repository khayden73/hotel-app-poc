import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Hotels } from "./components/Hotels.tsx";
import App from "./App.tsx";
import { HotelDetails } from "./components/HotelDetails.tsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Hotels />} />
          <Route path="/hotel/:hotelId" element={<HotelDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
