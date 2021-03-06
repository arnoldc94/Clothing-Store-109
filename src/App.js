import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Header from "./components/header";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Admin from "./components/admin";
import Cart from "./components/cart";
import HistoryPurchase from "./components/history";
import OrderSaved from "./components/orderSaved";
import GlobalState from './store/globalCotext';


function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">

          <Header></Header>

          <NavBar></NavBar>
          
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/admin" exact component={Admin}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/order-saved" exact component={OrderSaved}></Route>
            <Route path="/purchase-history" exact component={HistoryPurchase}></Route>
          </Switch>
          
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalState>  
  );
}

export default App;


