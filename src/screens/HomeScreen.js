import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/pizza";
import { getPizza } from "../actions/pizzaActions";
function HomeScreen() {
  const dispatch = useDispatch();
  const { pizzas, error, isLoading } = useSelector((state) => state.pizzas);
  useEffect(() => {
    dispatch(getPizza());
  }, []);

  return (
    <div className="row">
      {isLoading ? (
        <h1>Loading......</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        pizzas.map((pizza, i) => (
          <div key={i} className="col-md-4">
            <Pizza pizza={pizza} />
          </div>
        ))
      )}
    </div>
  );
}

export default HomeScreen;
