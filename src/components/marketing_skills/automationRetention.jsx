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
                To generate brand loyalty and increase customer retention at
                scale takes a lot of time and effort. Actually, that's only
                partially true. The key to scale any businesses marketing
                efforts horizontally (impact as many customers) and vertically
                (generate a deep impact on each and every customer), with the
                least amount of effort takes sophistication and adoption of the
                best technologies available at our disposal, to automate and
                scale up smart, pin-point data-driven marketing activities to
                match as many small audience groups while maximizing the
                relevance of the message.
              </p>
            </div>
            {/* END DETAILS */}
            <div className="main_content ">
              <div className="descriptions">
                <div className="listOfSkills">
                  <ul>
                    <li>
                      <h4>Extensive copywriting experience - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>DB Segmentation, Triggers &#38; Actions - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>User life cycles &#38; Funnel based Communications - </h4>
                      <p></p>
                    </li>
                    <li>
                      <h4>Live Chat, Push, Call &#38; SMS Strategy, copy, and implementation.</h4>
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
