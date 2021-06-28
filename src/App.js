import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart" component={CartScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
