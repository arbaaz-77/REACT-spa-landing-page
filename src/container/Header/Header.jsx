import React from "react";
import { SubHeading } from "../../components";

import images from "../../constants/images";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Immerse yourself" />
      <h1 className="app__header-h1">The Key to Relaxation</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Gericht Spa is a massage parlor having well experienced and
        professional therapists. Not only do we offer Massage but also other
        services for both men and women which includes: Hair-cuts, Pedicure &
        Manicure, Professional Make-up, Steam-Bath, Moroccan Bath.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Services
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.header} alt="header_img" />
    </div>
  </div>
);

export default Header;
