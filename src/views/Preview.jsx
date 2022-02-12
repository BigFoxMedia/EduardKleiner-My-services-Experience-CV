import React from "react";
import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const Preview = () => {
  document.body.classList.remove("dark");
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={50}
        color="0, 0, 0"
        outerAlpha={0.2}
        innerScale={0.41}
        outerScale={1}
      />
      <div className="tokyo_tm_all_wrap">
        <div className="tokyo_tm_intro">
          <div className="tokyo_tm_intro_fixed_price">
            <span className="anim"></span>
            <span className="anim"></span>
            <span className="anim"></span>
            <a href="#rtl" className="pricing-info anim">
              RTL
            </a>
          </div>
          {/* END TOKYO INTRO FIXED PRICE */}

          <div className="short_info">
            <img src="assets/img/logo/dark.png" alt="" />
            <h3>React Personal Portfolio Template + RTL</h3>
          </div>
          {/* END SHORT INFO */}

          <span className="intro_line"></span>
          <span className="intro_line_2"></span>
          <span className="intro_line_3"></span>
          {/* END VERTICAL LINE */}

          <div className="demos">
            <div className="left">
              <Link to="/home-light" target="_blank">
                <div className="desc">
                  <img src="assets/img/intro/light.png" alt="" />
                  <h3 className="title">Light Demo</h3>
                </div>
              </Link>
            </div>
            {/* END LEFT DEMO */}
            <div className="right">
              <Link to="/home-dark" target="_blank">
                <div className="desc">
                  <img src="assets/img/intro/dark.png" alt="" />
                  <h3 className="title"> Dark Demo</h3>
                </div>
              </Link>
            </div>
            {/* END RIGHT DEMO */}
          </div>
          {/* END DEMOS */}
          <div className="demos" id="rtl">
            <div className="left">
              <Link to="/rtl-home-light" target="_blank">
                <div className="desc">
                  <img src="assets/img/intro/light-rtl.png" alt="demo" />
                  <h3 className="title">RTL Light Demo</h3>
                </div>
              </Link>
            </div>
            {/* END LEFT DEMO */}
            <div className="right">
              <Link to="/rtl-home-dark" target="_blank">
                <div className="desc">
                  <img src="assets/img/intro/dark-rtl.png" alt="demo" />
                  <h3 className="title">RTL Dark Demo</h3>
                </div>
              </Link>
            </div>
            {/* END RIGHT DEMO */}
          </div>
          {/* END DEMOS */}
        </div>
      </div>
    </>
  );
};

export default Preview;
