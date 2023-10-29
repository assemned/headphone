import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Checkout, Confirmation } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" component={Main} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/confirmation/:id" component={Confirmation} />
    </Routes>
  );
};

export default App;
