import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center">WELCOME TO FRUIT MASTER</h1>
      <p className="text-center">Exclusive Fruits for every Fruitsalad.</p>
      <NavLink to={"/products"} className="btn btn-outline-primary d-grid">SHOP NOW </NavLink>
    </div>
  );
};

export default Home;
