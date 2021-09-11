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
