import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/signup";
import Profile from "./pages/Profile";
import { PrivateRoute } from "./pages/PrivateRoute";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
import Orders from "./pages/Admin/Orders";

import Home from "./pages/Admin/Home";
import AdminProducts from "./pages/Admin/Products";

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute admin={true}>
                <Admin />
              </PrivateRoute>
            }
          >
            <Route path="" element={<Home />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<AdminProducts />} />
          </Route>

          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
