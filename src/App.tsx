import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import { useState } from "react";
import Menu from "./components/Menu";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

function App() {
  //onst { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <main>
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
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
