import React from "react";
import "./Home.css";
import doc from "./images/doctor.png";
const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="main">
      <div className="content1">
      <div className="Welcome"> JAYPEE HOSPITAL</div>
      <div className="image">
        <img src={doc}>

        </img>
      </div>
      </div>
      
      <div className="Content2">
        <div className="Mission">
          <p>Mission</p>
          The Jaypee Group is committed to serve the cause of millions who seek
          dedicated quality and affordable healthcare through its multi-super
          specialty facility, the Jaypee Hospital. With advanced healthcare
          facilities, the latest diagnostic services and state-of-the-art
          technology focused on medical specialities, the Jaypee Hospital
          strives to be the ultimate choice for medical care.
        </div>
        <div className="Vision">
          <p>Vision</p>
          Promoting healthcare to the common masses with the growing needs of
          society by providing quality and affordable healthcare with
          commitment.
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default Home;
