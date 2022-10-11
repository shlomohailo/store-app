import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import AddObj from "../components/pages/addObject/AddObject";
import SignIn from "../components/pages/signin/signin";
import Tabs from "../components/pages/tabs/Tabs";
import AllInfoUser from "../components/pages/AllInfoUser/AllInfoUser";
import Contact from "../components/pages/contact/Contact";
import Table from "../components/pages/table/Table";
import PrivateRoutesIsLogIn from "./PrivateRoutesIsLogIn";
import { usersContext } from "../contexts/user";
import SignUp from "../components/pages/signup/signUp";

function Router() {
  const { isLogIn } = useContext(usersContext);
  return (
    <Routes>
      <Route element={<PrivateRoutesIsLogIn isLogIn={isLogIn}/>}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AllInfoUser" element={<AllInfoUser />} />
        <Route path="/Tabs" element={<Tabs />} />
        <Route path="/Table" element={<Table />} />
        {/* <Route path="/AddObj" element={<AddObj/>} /> */}
        <Route path="/Contact" element={<Contact />} />
       
      </Route>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />

    </Routes>
  );
}

export default Router;
