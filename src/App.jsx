import React, { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import { AuthThemes } from "./AuthTheme/ThemeContext";
import Form from "./Component/Form/Form";
import Mens from "./Products/Clothes/Mens/Mens";
import Womens from "./Products/Clothes/Womens/Womens";
import ProductPath from "../public/path";
import Display from "./DashboardDisplay/Display";
import SimpleSlider from "./Component/Slider/Slider";
import MensComponent from "./Products/Clothes/Mens/MensComponent";
import WomensComponent from "./Products/Clothes/Womens/WomensComponent";
import Children from "./Products/Clothes/Children/Children";
import ChildrenComponent from "./Products/Clothes/Children/ChildrenComponent";
import Babies from "./Products/Clothes/Babies/Babies";
import BabiesComponent from "./Products/Clothes/Babies/BabiesComponent";
import Phones from "./Products/Electronics/Phones/Phones";
import PhonesComponents from "./Products/Electronics/Phones/PhonesComponents";
import Laptops from "./Products/Electronics/Laptop/Laptop";
import LaptopComponents from "./Products/Electronics/Laptop/LaptopComponents";
import Ovens from "./Products/HomeAppliance/Ovens/Oven";
import OvensComponents from "./Products/HomeAppliance/Ovens/OvenComponents";
import Refrigerators from "./Products/HomeAppliance/Refrigerators/Refrigerators";
import RefrigeratorsComponent from "./Products/HomeAppliance/Refrigerators/RefrigeratorsComponent";
import Login from "./Component/Form/Form";
import Orderform from "./OrderForm/Orderform";
import AuthRoutes from "./AuthContext/AuthRoutes";
import Cart from "./CartPage/Cart";
import Footer from "./Component/Footer/Footer";
// import CartShow from "./CartPage/CartShow";

function App() {
  const { themes } = useContext(AuthThemes);
  const location = useLocation();

  // use State for CartItems
  const [cartItems, setCartItems] = useState([]);

  // this is used for Handling (submit data to cart)
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  // this is used to delete the data::
  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };


  return (
    <div className={`min-h-[100vh] max-w-[100vw] ${themes === "dark" ? "bg-gray-800 text-gray-100" : "bg-slate-200 text-gray-600"}`}>
      <Navbar cartItems={cartItems} />
      <SimpleSlider />
      {location.pathname === "/" && <Display />}
      <Routes>
        <Route path={ProductPath.Form} element={<Form />} />
        {/* Clothes */}
        <Route path={ProductPath.Mens} element={<Mens />} />
        <Route path={ProductPath.MensComponent} element={<MensComponent handleAddToCart={handleAddToCart} />} />
        <Route path={ProductPath.Womens} element={<Womens />} />
        <Route path={ProductPath.WomensComponent} element={<WomensComponent handleAddToCart={handleAddToCart} />} />
        <Route path={ProductPath.Children} element={<Children />} />
        <Route path={ProductPath.ChildrenComponent} element={<ChildrenComponent handleAddToCart={handleAddToCart} />} />
        <Route path={ProductPath.Babies} element={<Babies />} />
        <Route path={ProductPath.BabiesComponent} element={<BabiesComponent handleAddToCart={handleAddToCart} />} />
        {/* Electronics */}
        <Route path={ProductPath.Phones} element={<Phones />} />
        <Route path={ProductPath.PhonesComponent} element={<PhonesComponents handleAddToCart={handleAddToCart} />} />
        <Route path={ProductPath.Laptop} element={<Laptops />} />
        <Route path={ProductPath.LaptopComponent} element={<LaptopComponents handleAddToCart={handleAddToCart} />} />
        {/* Home Appliances */}
        <Route path={ProductPath.Oven} element={<Ovens />} />
        <Route path={ProductPath.OvenComponent} element={<OvensComponents handleAddToCart={handleAddToCart} />} />
        <Route path={ProductPath.Refrigerators} element={<Refrigerators />} />
        <Route path={ProductPath.RefrigeratorsComponent} element={<RefrigeratorsComponent handleAddToCart={handleAddToCart} />} />
        
        {/* Form */}
        <Route path={ProductPath.Form} element={<Login />} />
        {/* Order and Cart */}
        <Route element={<AuthRoutes/>}>

        <Route path="/order" element={<Orderform />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
        </Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
