import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import { useEffect, useState } from "react";
import Menu from "./components/Menu";

import { Suspense } from "react";
//import { useTranslation } from "react-i18next";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Career from "./pages/Careers";
import LocationPage from "./pages/Location";
import Popup from "./components/Popup";
import Booking from "./pages/Booking";
import { HelmetProvider } from "react-helmet-async";
import Verify from "./pages/Verify";

interface CarType {
  id: number;
  img: string;
  model: string;
  type: string;
  price: string;
}

function App() {
  //onst { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showBooking, setShowBooking] = useState(false);

  const [selectCar, setSelectCar] = useState<CarType | undefined>();

  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);
  const [signed, setSigned] = useState<boolean>(false);

  console.log(typeof signed);
  useEffect(() => {
    const storedSignedState = localStorage.getItem("signupFormData");
    setSigned(storedSignedState ? JSON.parse(storedSignedState).signed : false);
  });
  console.log("signed: ", signed);

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <main>
        {showBooking && (
          <Booking selectCar={selectCar} setShowBooking={setShowBooking} />
        )}
        {/*<Header setShowMenu={setShowMenu} showMenu={showMenu} />*/}
        {shouldShowHeader && (
          <Header
            setShowMenu={setShowMenu}
            showMenu={showMenu}
            signed={signed}
            setShowPopup={setShowPopup}
          />
        )}
        {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
        {showPopup ? (
          <Popup setShowPopup={setShowPopup} setSigned={setSigned} />
        ) : null}

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Home
                setSelectCar={setSelectCar}
                setShowBooking={setShowBooking}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<Verify />} />
          {/*<Route path="/booking" element={<Booking />} />*/}
        </Routes>
        {shouldShowHeader && <Footer />}
      </main>
    </HelmetProvider>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
