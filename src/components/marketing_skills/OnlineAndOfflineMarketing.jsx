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
              <h3 className="title">Online &#38; Offline Marketing</h3>
              <p>
                .....
              </p>
            </div>
            {/* END DETAILS */}
            <div className="main_content ">
              <div className="descriptions">
                <div className="listOfSkills">
                  <ul>
                    <li>
                      <h4>Branding - </h4>
                      <p>
                        Developing a{" "}
                        <span className="emph">brand identity and image</span>{" "}
                        for the casino industry, creating multiple brands from
                        scratch. Determining brand{" "}
                        <span className="emph">tone of voice</span>, generating
                        brand recognition brand engagement in order to foster{" "}
                        <span className="emph">brand loyalty</span> through
                        <span className="emph">
                          {" "}
                          online and offline marketing
                        </span>{" "}
                        activities.
                        <br />
                        <span className="emph"></span>
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
                      <h4>Creative direct postals to targeted audience</h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Targeted magazine ad placements &#38; inserts</h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Data-driven Market Penetration Strategy</h4>
                      <p></p>
                    </li>
                  </ul>
                </div>
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
