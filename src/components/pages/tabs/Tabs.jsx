import React from "react";
import { useContext } from "react";
import { usersContext } from "../../../contexts/user";
import Cards from "../../fechers/card/Card";
function Tabs() {
  const { data } = useContext(usersContext);
  // console.log(data);
 
  return (
    <div className="Tabs">
      <h1 className="title-page">Tabs</h1>
      <div
        className="div-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data.map((item ,index) => (
          <Cards data={item} />
        ))}
      </div>
    </div>
  );
}

export default Tabs;
