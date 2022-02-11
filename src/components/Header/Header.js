import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import "./header.css"
const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo>
          <div id="logo">
            <p>
              <span className="code">&#x0003C;</span>
              <span className="first">S</span>
              <span className="last">hivam Singh</span>
              <span className="code">&#x0002F;&#x0003E;</span>
            </p>
          </div>   
    
       
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BWngzf25c3-x_KJpmMtDX8TgA_xxnE7uMQ&usqp=CAU" alt= "logo" width="300px"/> */}
        
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="skills" smooth={true}>
            Skills
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1Zd_WpdGRgWsHIkDrhobKkflN_6QAZPY2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
