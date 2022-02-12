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
              <h3 className="title">Technical Online Marketing</h3>
              <p>......</p>
            </div>
            {/* END DETAILS */}
            <div className="main_content ">
              <div className="descriptions">
                <h5>Mastery of the following SaaS services: </h5>
                <div className="listOfSkills">
                  <ul>
                    <li>
                      <h6>Twilio</h6>
                    </li>
                    <li>
                      <h6>MailChimp</h6>
                    </li>
                    <li>
                      <h6>Various Live-Chat SaaS</h6>
                    </li>
                    <li>
                      <h6>SendGrid</h6>
                    </li>
                    <li>
                      <h6>Autopilot</h6>
                    </li>
                    <li>
                      <h6>various CRMs</h6>
                    </li>
                    <li>
                      <h6>A/B Testing tools</h6>
                    </li>
                  </ul>
                </div>
                <h5>... And many more!</h5>
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
