import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import { useState } from "react";
import Menu from "./components/Menu";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Career from "./pages/Careers";

function App() {
  //onst { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <main>
      {/*<Header setShowMenu={setShowMenu} showMenu={showMenu} />*/}
      {shouldShowHeader && (
        <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      )}
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
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
