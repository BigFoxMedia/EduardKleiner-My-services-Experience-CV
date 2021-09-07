import React, { useState } from "react";

const modalContent = (props) => {
  return (
    <>
      <div className="tokyo_tm_modalbox_news">
        <button className="close-modal" onClick={() => props.closeModal()}>
          <img src="assets/img/svg/cancel.svg" alt="close icon" />
        </button>
        {/* END CLOSE ICON */}
        <div className="box_inner">
          <div className="description_wrap scrollable">
            <div className="details">
              <div className="extra">
                <p className="date">Skills &#38; experience breakdown - </p>
              </div>
              <h3 className="title">
                Marketing Automation &#38; User Retention
              </h3>
              <p>
                Created 6 regulated, global, online Casino brands for two
                different companies - for which I have created and executed
                comprehensive marketing automation plans, UI/UX research and
                research-based upgrades, as well as data driven "Gamification" 
                features to engage and retain users in order to provide a high standard of 
                user experience, which in turn assured high levels of retention 
                which resulted in high average user life time values (LTVs).  
                <br />
                <br />
                Multiple other products 
                <br />
                <br />
                Experienced in both
                <span className="emph">Desktop traffic generation</span>(
                clicks, leads, purchases) and
                <span className="emph">mobile traffic generation</span>
                (clicks, installs, stickiness, retention)
              </p>
            </div>
            {/* END DETAILS */}
            <div className="main_content ">
              <div className="descriptions">
                <div className="listOfSkills">
                  <ul>
                    <li>
                      <h4>Branding, Creating Brands from Scratch - </h4>
                      <p>
                        Some of the networks I bought traffic on:
                        <br />
                        <span className="emph">
                          Google, Facebook, Twitter, Taboola, OutBrain, Bing,
                          Reddit
                        </span>
                        , and many more...
                      </p>
                    </li>
                    <li>
                      <h4>Writing PR Communications - </h4>
                      <p>
                        Extensive experience in reaching out to publishers to
                        close profitable
                        <span className="emph">
                          direct inventory placement deals
                        </span>
                        . In addition, experienced in
                        <span className="emph">
                          rapid testing of various RTBs
                        </span>
                        to quickly find the best media sources or alternatively
                        disqualify a source as incompatible. Maintaining and
                        scaling up profitable media outlets to produce ever
                        <span className="emph">
                          increasing ROI generating streams at scale
                        </span>
                        .
                      </p>
                    </li>
                    <li>
                      <h4>Creative direct postals to targeted audience - </h4>
                      <p>
                        Arranging and attending multiple conferences &#38;
                        booths around the world, representing brands and
                        promoting existing and new product lines. Managing
                        multiple affiliate mangers in my marketing teams, with
                        the goal of retaining and increasing profitability of
                        existing affiliates, while working tirelessly to
                        increase the affiliate program's reach to more
                        affiliates consistently.
                        <br />
                        <br />
                        Usage of
                        <span className="emph">
                          {" "}
                          custom made advanced A.I. + data-mining{" "}
                        </span>
                        based automated hunting techniques to source and engage
                        with potential affiliates at scale.
                      </p>
                    </li>
                    <li>
                      <h4>Targeted magazine ad placements &#38; inserts - </h4>
                      <p>
                        Arranging and attending multiple conferences &#38;
                        booths around the world, representing brands and
                        promoting existing and new product lines. Managing
                        multiple affiliate mangers in my marketing teams, with
                        the goal of retaining and increasing profitability of
                        existing affiliates, while working tirelessly to
                        increase the affiliate program's reach to more
                        affiliates consistently.
                        <br />
                        <br />
                        Usage of
                        <span className="emph">
                          {" "}
                          custom made advanced A.I. + data-mining{" "}
                        </span>
                        based automated hunting techniques to source and engage
                        with potential affiliates at scale.
                      </p>
                    </li>
                    <li>
                      <h4>Data-driven Market Penetration Strategy - </h4>
                      <p>
                        Arranging and attending multiple conferences &#38;
                        booths around the world, representing brands and
                        promoting existing and new product lines. Managing
                        multiple affiliate mangers in my marketing teams, with
                        the goal of retaining and increasing profitability of
                        existing affiliates, while working tirelessly to
                        increase the affiliate program's reach to more
                        affiliates consistently.
                        <br />
                        <br />
                        Usage of
                        <span className="emph">
                          {" "}
                          custom made advanced A.I. + data-mining{" "}
                        </span>
                        based automated hunting techniques to source and engage
                        with potential affiliates at scale.
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <div className="quotebox">
                  <div className="icon">
                    <img
                      className="svg"
                      src="assets/img/svg/quote.svg"
                      alt="tumb"
                    />
                  </div>
                  <p>
                    Most photographers find it hard to see interesting pictures
                    in places in which they are most familiar. A trip somewhere
                    new seems always exactly what our photography needed, as
                    shooting away from home consistently inspires us to new
                    artistic heights.
                  </p>
                </div> */}
                {/* END QUOTEBOX */}
              </div>
              {/* END DESCRIPTION */}

              <div class="target"></div>
              <div className="news_share">
                <span
                  style={{ textDecoration: "underline" }}
                  onClick={() => props.tabNavigation(6)}
                >
                  Reach out for collaborations
                </span>
                {/* END SOCIAL SHARE */}
              </div>
              {/* END NEWS SHARE */}
            </div>
          </div>
        </div>
        {/* END BOX INNER */}
      </div>
    </>
  );
};

export default modalContent;
