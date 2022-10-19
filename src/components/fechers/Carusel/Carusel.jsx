import React from "react";
import "./Carusel.css";
import Carousel from "react-material-ui-carousel";
import { useContext } from "react";
import { usersContext } from "../../../contexts/user";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function Popular() {
  const { data } = useContext(usersContext);
  return (
    <>
      <div className="homeAbout">
        <div className="div-space">
          <Carousel sx={{zIndex:"-2",margin:"100px"}}
            NextIcon={<img src="http://random.com/next" />}
            PrevIcon={<img src="http://random.com/prev" />}
            autoPlay={true}
          >
            <img
              src={
                "https://thumbs.dreamstime.com/b/spices-oriental-markets-markets-colorful-hats-arab-countries-130444946.jpg"
              }
              alt=""
              width="50%"
              height="360px"
              
            />
            <img
              src={
                "https://thumbs.dreamstime.com/b/roasted-coffee-beans-light-ethiopia-146291564.jpg"
              }
              alt=""
              width="50%"
              height="360px"
            />
            <img
              src={
                "https://thumbs.dreamstime.com/b/local-grains-sale-lalibela-market-grain-spices-february-ethiopia-145107014.jpg"
              }
              alt=""
              width="50%"
              height="360px"
            />
              <img
              src={
                "https://thumbs.dreamstime.com/b/local-grains-sale-lalibela-market-grain-spices-february-ethiopia-145107014.jpg"
              }
              alt=""
              width="50%"
              height="360px"
            />
          </Carousel>
  
          
        </div>
      </div>
    </>
  );
}
