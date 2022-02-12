import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import Marketing_trafficGeneration from "./marketing_skills/marketing_trafficGeneration";
import Marketing_OnlineAndOfflineMarketing from "./marketing_skills/OnlineAndOfflineMarketing";
import Marketing_automationRetention from "./marketing_skills/automationRetention";
import Marketing_BusinessManagement from "./marketing_skills/BusinessManagement";
import Marketing_TechnicalOnlineMarketing from "./marketing_skills/marketing_TechnicalOnlineMarketing";

Modal.setAppElement("#root");

const ModalContent = (props) => {
  return (
    <>
      {console.log("TEST - props - ")}
      {console.log(props)}

      {props.data.modalContent !== false && (
        <props.data.modalContent
          closeModal={() => props.closeModal()}
          tabNavigation={(tab) => props.tabNavigationHandler(tab)}
        />
      )}

      {props.data.modalContent === false && (
        <div className="tokyo_tm_modalbox_news">
          <button className="close-modal" onClick={() => props.closeModal()}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="details">
                <h3 className="title">Coming soon...</h3>
              </div>
              {/* END DETAILS */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
      )}
    </>
  );
};

const News = (props) => {
  const [modalIdOpen, setModalIdOpen] = useState(0);

  const [listOfItems, setListOfItems] = useState([
    {
      title: "Traffic Generation",
      subtitle: "PPC, Media buying, Affiliate Programs",
      background: "url(assets/img/dark_bg.jpg)",
      modalContent: Marketing_trafficGeneration,
    },
    {
      title: "Online & Offline Marketing",
      subtitle: "Branding, Guerilla-Marketing, PR, Postals, Magazines",
      background: "url(assets/img/dark_bg.jpg)",
      modalContent: Marketing_OnlineAndOfflineMarketing,
    },
    {
      title: "Marketing Automation & User Retention",
      subtitle: "Copywriting, User life cycles, Funnel Communications",
      background: "url(assets/img/dark_bg.jpg)",
      modalContent: Marketing_automationRetention,
    },
    {
      title: "Business Management",
      subtitle: "Project & Budget Management, B2B Negotiations, Rapid POC's",
      background: "url(assets/img/dark_bg.jpg)",
      modalContent: Marketing_BusinessManagement,
    },
    {
      title: "Technical Online Marketing",
      subtitle: "Twilio, MailChimp, Live-Chat, SendGrid, Autopilot & more...",
      background: "url(assets/img/dark_bg.jpg)",
      modalContent: Marketing_TechnicalOnlineMarketing,
    },
    {
      title: "Tools of the trade",
      subtitle: "Mastery of Excel, Photoshop, After effects, Premiere & more...",
      background: "url(assets/img/dark_bg.jpg)",
      modalContent: false,
    }
  ]);

  const listItems = listOfItems.map((item, index) => (
    <li>
      <div className="list_inner">
        <div className="image" onClick={() => openModalId(index + 1)}>
          {/* <img src="assets/img/dark_bg.jpg" alt="thumb" /> */}
          <div
            className="main alt"
            style={{
              backgroundImage: "url(assets/img/dark_bg.jpg)",
            }}
          >
            <h2>
              {item.title}
            </h2>
          </div>
        </div>
        {/* END IMAGE */}
        <div className="details">
          <div className="extra">
            <p className="date"></p>
          </div>
          {/* END EXTRA */}

          <h3 className="title" onClick={() => openModalId(index + 1)}>
            {item.subtitle}
          </h3>
          <div className="tokyo_tm_read_more">
            <a onClick={() => openModalId(index + 1)}>
              <span>Read More</span>
            </a>
          </div>
          {/* END READ MORE BUTTON */}
        </div>
        {/* END DETAILS */}

        {/* START MODAL */}
        <Modal
          isOpen={modalIdOpen === index + 1}
          onRequestClose={() => closeModal()}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          {/* <{item.modalContent !== false ? item.modalContent : ""}
            closeModal={() => closeModal()}
            tabNavigation={(tab) => tabNavigationHandler(tab)}
          /> */}
          <ModalContent
            data={item}
            closeModal={() => closeModal()}
            tabNavigation={(tab) => tabNavigationHandler(tab)}
          />
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL */}
      </div>
    </li>
  ));

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
              <span>#TopSkills</span>
              <h3>Marketing skills &#38; experience</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>{listItems}</ul>
      </div>
    </>
  );
};

export default News;
