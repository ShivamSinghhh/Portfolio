import React from "react";

// import photo from '../../Aui.jpg'
import { 
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
      
          <div className="AboutBio">
            Hello! My name is <strong>Shivam Singh</strong> .
          </div>
          <div className="AboutBio tagline2">
            I am an aspiring FullStack Developer and a curious person who loves to know how different things work together. I love to build stuff and connect with people!

            When I am away from keyboard, you will find me listening music or connecting with people.

            Currently I am a student at Masai School.
          </div>
      
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
