import Header from "./Components/Header";

import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserLIstScreen from "./Screens/UserLIstScreen";
import ProductLIstScreen from "./Screens/ProductListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/about" component={AboutUs} />
          <Route path="/admin/userlist" component={UserLIstScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route
            path="/admin/productlist"
            component={ProductLIstScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductLIstScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />{" "}
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
