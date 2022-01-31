import React from "react";

import images from "../../constants/images";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="letter g" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spa} alt="about spa" className="spoon__img" />
        <p className="p__opensans">
          Our commitment is quality and high-end services. With years of
          experience and dedicated staff who are ready to serve you with
          techniques enquired from their training. We don’t compromise quality
          services to their clients. Create your dream Spa experience with
          Gericht Spa.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.about} alt="spa" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spa} alt="about spa" className="spoon__img" />
        <p className="p__opensans">
          In the midst of this golden age, Gericht was built. Centrally located
          between two thriving cities. Kevin wanted to create an elite spa and
          resort experience for high rolling shoppers. This hidden luxury gem
          has it all—from private executive chefs, to massage therapists, gentle
          exercise and tennis courts and even an indoor pool housed in an
          expansive atrium.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
