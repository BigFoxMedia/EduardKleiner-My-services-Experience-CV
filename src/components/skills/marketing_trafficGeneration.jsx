import React, { useState } from "react";
import Social from "./../Social";

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
                <p className="date">Learn more about</p>
              </div>
              <h3 className="title">My marketing skills &#38; experience</h3>
            </div>
            {/* END DETAILS */}
            <div className="main_content ">
              <div className="descriptions">
                <p className="bigger">
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to stop taking pictures. There’s
                  still plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes.
                </p>
                <div className="quotebox">
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
                </div>
                {/* END QUOTEBOX */}
                <p>
                  Pretend everything is new and that you haven’t seen it before,
                  and then you will be free to notice the leading lines, the
                  places where one edge meets another in delightful geometric
                  harmony, and how the ordinary things in the kitchen are
                  transformed when the light is on or off.
                </p>
              </div>
              {/* END DESCRIPTION */}

              <div class="target"></div>
              <div className="news_share">
                <span style={{textDecoration: 'underline'}} onClick={() => props.tabNavigation(6)}>Reach out for collaborations</span>
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