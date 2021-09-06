import React from "react";
import Social from "./Social";

const Home = (props) => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/profile.jfif)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Eduard Kleiner</h3>
            <p className="job">
              Passionate and creative <span className="linker" onClick={() => props.updateTab(3)}>online marketer</span>, <span className="linker" onClick={() => props.updateTab(4)}>Product manager</span> and <span className="linker" onClick={() => props.updateTab(5)}>Full-Stack developer.</span><br/><br/>
              I enjoy taking products from a bare-bones concept stage, planning and creating MVP's to test the idea, through full scale product launch and finally mass-market scale!<br/><br/>
              A Jack-Of-All trades, and a master of All - reach out!<br/>
              <span className="linker" onClick={() => props.updateTab(6)}>Contact me</span> for freelance gigs, cooperation and business opportunities alike.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
