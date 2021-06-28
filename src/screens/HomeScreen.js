import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/pizza";
import { getPizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
function HomeScreen() {
  const dispatch = useDispatch();
  const { pizzas, error, isLoading } = useSelector((state) => state.pizzas);
  console.log("kk", error);
  useEffect(() => {
    dispatch(getPizza());
  }, []);

  return (
    <div className="row">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
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
