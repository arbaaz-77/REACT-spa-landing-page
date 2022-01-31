import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.word} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            our mission at Gericht is to care for the world we live in,
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          from the services we provide to the ways in which we give back to
          society. at Gericht, we strive to set an example for environmental
          leadership and responsibility, not just in the world of beauty, but
          around the world.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
