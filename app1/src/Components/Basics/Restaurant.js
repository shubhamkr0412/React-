import React from "react";
import "./style.css";
import Menu from "./menuApi"
import { useState } from "react";
import MenuCard from "./MenuCard";
const Restaurant = () => {
    const [menuData,setMenuData]=useState(Menu);
  return (
    <>
     <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
