import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="home" />
      </Routes>
    </main>
  );
}

export default App;
