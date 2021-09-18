import React from "react";
import Social from "./Social";
import Swiss_Army_Knife from "./../components/Swiss_Army_Knife";

const Home = (props) => {
  const Styles = {
    leftCta: {
      marginRight: "25px",
      position: "relative",
      display: "inline-block",
    },
  };

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
            {/* <Swiss_Army_Knife /> */}
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Eduard Kleiner</h3>
            <p className="job">
              I am a passionate and creative about all things product related.
              My skills include{" "}
              <span className="linker" onClick={() => props.updateTab(3)}>
                Online marketing
              </span>
              ,{" "}
              <span className="linker" onClick={() => props.updateTab(4)}>
                Product management
              </span>{" "}
              and{" "}
              <span className="linker" onClick={() => props.updateTab(5)}>
                Full-Stack development
              </span>
              .
              <br />
              <br />I enjoy taking products from a bare-bones concept stage,
              planning and creating MVP's to test the idea, through full scale
              product launch and finally mass-market scale! Learn more{" "}
              <span className="linker" onClick={() => props.updateTab(1)}>
                about me
              </span>
              .
              <br />
              <br />
              checkout my{" "}
              <span className="linker" onClick={() => props.updateTab(2)}>
                Portfolio
              </span>{" "}
              for examples of my work. <br />
              <br />
              <span className="linker" onClick={() => props.updateTab(6)}>
                Contact me
              </span>{" "}
              for freelance gigs, cooperation and business opportunities alike.
            </p>
            {/* END JOB */}
            <Social />
            <a
              href="./Eduard Kleiner - FullStack.docx"
              download="Eduard Kleiner FullStack CV"
              style={Styles.leftCta}
            >
              <button
                className="callToAction_main"
                style={{ marginTop: "25px" }}
              >
                FULL-STACK CV
              </button>
            </a>
            <a
              href="./Eduard Kleiner - Marketing.docx"
              download="Eduard Kleiner Marketing CV"
            >
              <button
                className="callToAction_main"
                style={{ marginTop: "25px" }}
              >
                MARKETING CV
              </button>
            </a>
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
