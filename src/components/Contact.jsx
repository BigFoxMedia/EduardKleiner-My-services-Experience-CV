import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";

const Contact = () => {
  const [viewport, setViewport] = useState({
    latitude: 32.07046925349984,
    longitude: 34.82311027018386,
    zoom: 12,
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4mkhz9",
        "template_ugoztxr",
        e.target,
        "user_vYmDSd9PwIuRXUQEDjYwN"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}

        <div className="fields">
          <h4>
            Email -{" "}
            <a className="linker" href="mailto:eduardk@affilomania.com">
              Eduardk@affilomania.com
            </a>
          </h4>
          <h4 className="spacer_horizontal_a">
            Call - {" "}
            <a className="linker" href="tel:+972525436090">
              +972 - 525 - 436090
            </a>
          </h4>
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
