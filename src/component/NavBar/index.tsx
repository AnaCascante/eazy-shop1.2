import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";
import React from "react";




function NavBar() {
  return (
    <nav className="flex flex-grow bg-slate-200">
        <Logo/>
         <NavLink to="/" className="hover:text-pink-500 m-3 ">Home</NavLink>
         <NavLink to="/ContactPage" className="hover:text-pink-500 m-3">Contact</NavLink>
         <div className=" m-0">
         <NavLink to="/CheckoutPage" className="hover:text-pink-500 m-0.5"><FaShoppingCart /></NavLink>
         </div> 
    </nav>
  );
}

export default NavBar; 
