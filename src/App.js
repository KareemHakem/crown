import "./App.css";

import NavBar from "../src/app/components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "../src/app/page/homePage/HomePage";
import ShopPage from "../src/app/page/shopPage/ShopPage";
import ContactPage from "../src/app/page/CONTACT/ContactPage";
import SingIn from "./app/page/sing In/SingIn";
import Cart from "./app/page/cart/Cart";
// import ToDo from "./app/page/TODO/ToDo";
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/shopPage">
            <ShopPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/SingIn">
            <SingIn />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>

      {/* <ToDo /> */}
    </>
  );
}

export default App;
