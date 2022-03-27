import React from "react";
import "./style.css";
import Menu from "./menuApi"
import { useState } from "react";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "AllinOne",
];
console.log(uniqueList);

const Restaurant = () => {
    const [menuData,setMenuData]=useState(Menu);
     const [menuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
      if(category==="AllinOne"){
        return setMenuData(Menu);
      }
      const updatedList=Menu.filter((currElem)=>{
        return currElem.category==category;
      });
      setMenuData(updatedList) ;
}
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList} />
     <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
