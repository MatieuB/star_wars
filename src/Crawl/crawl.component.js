import React from "react";
// import PropTypes from "prop-types";

import { romanNumerals } from "../utils";

import "./crawl.css";

function logo() {
  const image = document.getElementsByClassName("swlogo")[0];
  const scroll = document.getElementsByClassName("fade")[0];
  const sw = document.getElementsByClassName("star-wars")[0];
  sw.style.visibility = "collapse";
  scroll.style.visibility = "collapse";
  image.style.visibility = "visible";
}

const StarWarsCrawl = ({ title, opening_crawl, episode_id }) => {
  return (
    <>
      <div className="fade">
        <img
          className="swlogo"
          style={{
            visibility: "collapse",
            width: "30%",
            verticalAlign: "center",
            position: "relative",
            marginTop: "5%"
          }}
          alt="logo"
          src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
        />
      </div>
      <section className="star-wars">
        <div className="crawl" onAnimationEnd={logo}>
          <div className="title">
            <p>Episode {romanNumerals(episode_id)}</p>
            <h1>{title}</h1>
          </div>
          <div>{opening_crawl}</div>
        </div>
      </section>
    </>
  );
};

// StarWarsCrawl.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default StarWarsCrawl;
