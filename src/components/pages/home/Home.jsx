import React, { useEffect, useContext } from "react";
import { usersContext } from "../../../contexts/user";
import { useNavigate } from "react-router-dom";


function Home() {
  const { isLogIn } = useContext(usersContext);
  
  const navigate = useNavigate();
  // useEffect(() => {
  //   if(!isLogIn){
  //     return navigate("SignIn", {replace: true})
  //   }
  // }, [isLogIn]);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
