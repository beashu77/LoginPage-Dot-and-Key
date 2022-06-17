import React from 'react';
import { IoMdPerson } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GoLocation } from "react-icons/go";

const Navbar = () => {

  return (
    <div>
      <Link to="/trackShipment"><GoLocation/></Link>
      <Link to="/login"><IoMdPerson/></Link>
      <Link to="/">Home</Link>
      <Link to="/aboutus">About us</Link>
      <Link to ="/product">product</Link>
    </div>
  )
}

export default Navbar