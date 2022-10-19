import "./home.css";
import React, { useContext } from "react";
import { usersContext } from "../../../contexts/user";
import { useNavigate } from "react-router-dom";
import Title from "../../fechers/HomeTitle/Tiitle";
import Popular from "../../fechers/Carusel/Carusel";
import CardHome from "../../fechers/CardHome/CardHome";
function Home() {
 

  const navigate = useNavigate();

  return (
    <>
      <Title />
      <Popular/>
      <CardHome/>
      

    </>
  );
}

export default Home;
