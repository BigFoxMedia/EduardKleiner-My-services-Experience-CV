import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import News from "../../components/News";
import Contact from "../../components/Contact";
import AnimatedCursor from "react-animated-cursor";

const HomeLight = () => {
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
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/dark.png" alt="brand" />
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">News</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <div className="copyright">
                <p>
                  &copy; {new Date().getFullYear()} Tokyo <br /> Created by
                  <a
                    href="https://themeforest.net/user/ib-themes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ib-Themes
                  </a>
                </p>
              </div>
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <Home />
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <About />
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                  <Portfolio />
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}

                <TabPanel>
                  <News />
                </TabPanel>
                {/* END NEWS MENU TAB CONTENT */}

                <TabPanel>
                  <Contact />
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
