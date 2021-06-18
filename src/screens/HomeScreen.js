import React from "react";
import pizzas from "../pizzasdata";
import Pizza from "../components/pizza";
function HomeScreen() {
  return (
    <div className="row">
      {pizzas.map((pizza, i) => (
        <div key={i} className="col-md-4">
          <Pizza pizza={pizza} />
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;
