import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import Marketing_trafficGeneration from "./skills/marketing_trafficGeneration";

Modal.setAppElement("#root");

const News = (props) => {
  const [modalIdOpen, setModalIdOpen] = useState(0);

  const openModalId = (id) => {
    console.log("openModalId to ID - ", id);
    if (modalIdOpen !== id) {
      setModalIdOpen(id);
    }
  };

  const closeModal = () => {
    console.log("closeModal fired");
    setModalIdOpen(0);
  };

  const tabNavigationHandler = (tab) => {
    props.tabNavigation(tab);
  };

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>List of my</span>
              <h3>Marketing skills &#38; experience</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={() => openModalId(1)}>
                {/* <img src="assets/img/dark_bg.jpg" alt="thumb" /> */}
                <div
                  className="main alt"
                  style={{
                    backgroundImage: "url(assets/img/dark_bg.jpg)",
                  }}
                >
                  <h2>Traffic Generation</h2>
                </div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date"></p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={() => openModalId(1)}>
                  PPC, Media buying, Affiliates 
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={() => openModalId(1)}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={modalIdOpen === 1}
                onRequestClose={() => closeModal()}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <Marketing_trafficGeneration
                  closeModal={() => closeModal()}
                  tabNavigation={(tab) => tabNavigationHandler(tab)}
                />
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={() => openModalId(2)}>
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="thumb" /> */}
                <div
                  className="main alt"
                  style={{
                    backgroundImage: "url(assets/img/dark_bg.jpg)",
                  }}
                >
                  <h2>Online Marketing</h2>
                </div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  {/* <p className="date">
                    By <a href="#">Brook Kennedy</a>
                    <span>22 March 2021</span>
                  </p> */}
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={() => openModalId(2)}>
                  .
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={() => openModalId(2)}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={modalIdOpen === 2}
                onRequestClose={() => closeModal()}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <Marketing_trafficGeneration
                  closeModal={() => closeModal()}
                  tabNavigation={(tab) => tabNavigationHandler(tab)}
                />
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={() => openModalId(3)}>
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="thumb" /> */}
                <div
                  className="main alt"
                  style={{
                    backgroundImage: "url(assets/img/dark_bg.jpg)",
                  }}
                >
                  <h2>Marketing Automation &#38; Communications</h2>
                </div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  {/* <p className="date">
                    By <a href="#">Paola Atkins</a>
                    <span>15 Feb 2021</span>
                  </p> */}
                </div>

                <h3 className="title" onClick={() => openModalId(2)}>
                  .
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={() => openModalId(3)}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={modalIdOpen === 3}
                onRequestClose={() => closeModal()}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <Marketing_trafficGeneration
                  closeModal={() => closeModal()}
                  tabNavigation={(tab) => tabNavigationHandler(tab)}
                />
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={() => openModalId(4)}>
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="thumb" /> */}
                <div
                  className="main alt"
                  style={{
                    backgroundImage: "url(assets/img/dark_bg.jpg)",
                  }}
                >
                  <h2>Business Management</h2>
                </div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  {/* <p className="date">
                    By <a href="#">Kevin Stone</a>
                    <span>22 Jan 2021</span>
                  </p> */}
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={() => openModalId(2)}>
                  .
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={() => openModalId(4)}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={modalIdOpen === 4}
                onRequestClose={() => closeModal()}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <Marketing_trafficGeneration
                  closeModal={() => closeModal()}
                  tabNavigation={(tab) => tabNavigationHandler(tab)}
                />
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={() => openModalId(5)}>
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="thumb" /> */}
                <div
                  className="main alt"
                  style={{
                    backgroundImage: "url(assets/img/dark_bg.jpg)",
                  }}
                >
                  <h2>Marketing Automation &#38; Communications</h2>
                </div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  {/* <p className="date">
                    By <a href="#">Paola Atkins</a>
                    <span>15 Feb 2021</span>
                  </p> */}
                </div>

                <h3 className="title" onClick={() => openModalId(2)}>
                  .
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={() => openModalId(5)}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={modalIdOpen === 5}
                onRequestClose={() => closeModal()}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <Marketing_trafficGeneration
                  closeModal={() => closeModal()}
                  tabNavigation={(tab) => tabNavigationHandler(tab)}
                />
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={() => openModalId(6)}>
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="thumb" /> */}
                <div
                  className="main alt"
                  style={{
                    backgroundImage: "url(assets/img/dark_bg.jpg)",
                  }}
                >
                  <h2>Business Management</h2>
                </div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  {/* <p className="date">
                    By <a href="#">Kevin Stone</a>
                    <span>22 Jan 2021</span>
                  </p> */}
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={() => openModalId(2)}>
                  .
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={() => openModalId(6)}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={modalIdOpen === 6}
                onRequestClose={() => closeModal()}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <Marketing_trafficGeneration
                  closeModal={() => closeModal()}
                  tabNavigation={(tab) => tabNavigationHandler(tab)}
                />
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}
        </ul>
      </div>
    </>
  );
};

export default News;
