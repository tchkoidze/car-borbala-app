import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import { useState } from "react";
import Menu from "./components/Menu";

import { Suspense } from "react";
//import { useTranslation } from "react-i18next";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Career from "./pages/Careers";
import LocationPage from "./pages/Location";
import Popup from "./components/Popup";

function App() {
  //onst { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);
  const [signed, setSigned] = useState(false);

  return (
    <main>
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
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login setSigned={setSigned} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {shouldShowHeader && <Footer />}
    </main>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
