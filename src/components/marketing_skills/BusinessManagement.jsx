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
              Business Management
              </h3>
              <p>
                ......
              </p>
            </div>
            {/* END DETAILS */}
            <div className="main_content ">
              <div className="descriptions">
                <div className="listOfSkills">
                  <ul>
                    <li>
                      <h4>Project Management - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>B2B Negotiations - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Budget Management - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Talent Recruitment - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Rapid testing of POC’s and results-based business pivotable-agility - </h4>
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
