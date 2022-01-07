import React from "react";
import { stackList } from "../../data/ProjectData";
import photo from '../../Aui.jpg'
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={photo}
            alt="man-svgrepo"
            className="smimg"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Shivam Singh</strong> .
          </div>
          <div className="AboutBio tagline2">
            I am a FullStack Developer and a curious person who loves to know how different things work together. I love to BUILD STUFF and connect with people smarter than me!

            When I am not smashing the keyboard, you will find me playing football, listening music.

            Currently I am a student at Masai School.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
