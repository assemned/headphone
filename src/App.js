import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Checkout, Confirmation } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/checkout" Component={Checkout} />
      <Route path="/confirmation/:id" Component={Confirmation} />
    </Routes>
  );
};

export default App;
