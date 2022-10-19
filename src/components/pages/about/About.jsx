import "./about.css";
function About() {
  return (
    <>
      <div className="About">
        <h1>About Us </h1>
        <div className="div-first">
          <h2>Our Story</h2>
          <p>
            In Ethiopia, spices like Berbere carry tradition, memories, history
            and culture that have evolved over generations. These spices are
            sources of flavor and a reminder of the depth and richness of the
            history shared by all.
          </p>
          <br />
          <p>
            It’s that history Fetlework Tefferi wanted to share when she opened
            Cafe Colucci, one of the first Ethiopian restaurants in Oakland,
            California, only to discover that she could not consistently source
            high quality, authentic ingredients because a robust supply chain
            didn’t exist.
          </p>
        </div>
      </div>
      <div className="div-title-team">
        <h1 className="title-team">OUR TEAM</h1>
      </div>
      <div className="img">
        <img
          src="https://cdn.shopify.com/s/files/1/0984/4296/files/Chili_Pep_dpt.png?v=1631739626"
          alt=""
          width={"300px"}
          style={{marginTop:"5px"}}
        />
       
         <img
          src="https://cdn.shopify.com/s/files/1/0984/4296/files/ayantu.png?v=1631739244"
          alt=""
          width={"300px"}
          style={{marginTop:"5px"}}

        /> <img
        src="https://cdn.shopify.com/s/files/1/0984/4296/files/meron_cede31c3-204b-49dd-86e7-c175255baccd.png?v=1631121632"
        alt=""
        width={"300px"}
        style={{marginTop:"5px"}}

      />
      </div>
      
    </>
  );
}

export default About;
