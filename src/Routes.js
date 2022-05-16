import React from "react";
import Trackorder from "pages/Trackorder";
import Desktop7 from "pages/Desktop7";
import Forgetpassword from "pages/Forgetpassword";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Payment from "pages/Payment";
import Singleproductdescription from "pages/Singleproductdescription";
import Cart from "pages/Cart";
import Productlist from "pages/Productlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Productlist />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/singleproductdescription"
          element={<Singleproductdescription />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/desktop7" element={<Desktop7 />} />
        <Route path="/trackorder" element={<Trackorder />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
