import React from "react";
import Aa from "./img/aa.jpeg";
import Abc from "./img/abc.jpg";
import Bb from "./img/bb.jpeg";
import Dd from "./img/dd.jpeg";
import Photo from "./pass.jpg";
import Story from "./Story";
import "./StoryReel.css";
import An from "./img/an.jpg";
import Sa from "./img/sa.jpg";
import { useStateValue } from "./StateProvider";

function StoryReel() {
  const [{user},dispatch]= useStateValue();
  return (
    <div className="storyReel">
      <Story image={Aa} profileSrc={user.photoURL} title={user.displayName} />

      <Story image={Abc} profileSrc={Photo} title="Sumit" />

      <Story image={Bb} profileSrc={An} title="Anik" />

      <Story image={Dd} profileSrc={Sa} title="Sagor " />

      <Story image={Abc} profileSrc={Photo} title="Sohel" />
    </div>
  );
}

export default StoryReel;
