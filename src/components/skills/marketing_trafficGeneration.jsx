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
              <h3 className="title">Traffic generation</h3>
              <p>
                Top to bottom, Hands-on experience, creating creative campaigns
                to market challenging products, often in strict regulatory
                environments, and in very competitive global markets. Managed
                PPC specialist teams under me in several companies, returning
                ROI with budgets of over $100K / month.
                <br />
                <br />
                Used and created from scratch, sophisticated tracking solutions
                for advanced user attributions and smart micro-targeting over
                scalable marketing efforts. Integration of marketing generated
                data with internal BI and other data-warehouses to deliver
                actionable, zero-latency business decisions to improve campaign
                management and ROI.
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
                      <h4>PPC Marketing - </h4>
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
                      <h4>Display Media Buying (Direct, RTB, etc.)</h4>
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
                      <h4>Affiliate Management (Hunt, Deals)</h4>
                      <p>
                        Arranging and attending multiple conferences & booths
                        around the world, representing brands and promoting
                        existing and new product lines. Managing multiple
                        affiliate mangers in my marketing teams, with the goal
                        of retaining and increasing profitability of existing
                        affiliates, while working tirelessly to increase the
                        affiliate program's reach to more affiliates
                        consistently.
                        <br />
                        <br />
                        Usage of
                        <span className="emph"> custom made advanced A.I. + data-mining </span>
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
