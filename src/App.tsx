import "./App.css";
import { HotelProvider } from "./context/HotelContext.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HotelProvider>
        <Outlet />
      </HotelProvider>
    </>
  );
}

export default App;
