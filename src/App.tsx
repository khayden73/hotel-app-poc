import './App.css'
import {HotelProvider} from "./context/HotelContext.tsx";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
        <HotelProvider>
            <h1>Hello World</h1>
            <Outlet />
        </HotelProvider>
    </>
  )
}

export default App
