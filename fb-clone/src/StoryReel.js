import React from "react";
import Aa from "./img/aa.jpeg";
import Abc from "./img/abc.jpg";
import Bb from "./img/bb.jpeg";
import Dd from "./img/dd.jpeg";
import Photo from "./pass.jpg";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={Aa} profileSrc={Photo} title="Sohel Sorowar" />

      <Story image={Abc} profileSrc={Photo} title="Sumit" />

      <Story image={Bb} profileSrc={Photo} title="Anik" />

      <Story image={Dd} profileSrc={Photo} title="Sagor " />

      <Story image={Abc} profileSrc={Photo} title="Sumit" />
    </div>
  );
}

export default StoryReel;
