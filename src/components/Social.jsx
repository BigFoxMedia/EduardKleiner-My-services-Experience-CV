import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/eduard.kleiner/",
  },
  { iconName: "github_mark_black", link: "https://github.com/BigFoxMedia/" },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/eduard-kleiner/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
