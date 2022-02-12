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
              <p>...</p>
            </div>
            {/* END DETAILS */}
            <div className="main_content ">
              <div className="descriptions">
                <div className="listOfSkills">
                  <ul>
                    <li>
                      <h4>
                        React + React native (modern hooks &#38; classes) +
                        Next.js (SSR) + Redux &#38; Context API for state
                        management -{" "}
                      </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Vue.js + Vuex + Nuxt.js (SSR) - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>HTML5 &#38; CSS3 - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>JSON, AJAX, REST API - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Angular (learning) - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Various Frontend Libraries (Three.js, Etc.) - </h4>
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
