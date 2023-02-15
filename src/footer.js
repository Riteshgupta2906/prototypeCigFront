import React, { Component } from "react";
import logo from "./logo.svg";
import "./footer.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import rectangle from "./images/rectangle.png";
import iitr from "./images/iitr.png";
import cig_logo from "./images/cig_logo.png";
import msg from "./images/msg.png";
//import call from "./images/call.png";
import location from "./images/location.png";
import luv from "./images/luv.png";
import lnk from "./images/lnk.png";
import fb from "./images/fb.png";
import link from "./images/linkdin.svg";
import fb_hov from "./images/fb.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="rect">
        <img id="foot" src={iitr} alt="" />
        <img id="foot_b" src={cig_logo} alt="" />
        <img id="msg" src={msg} alt="" />
        {/* <img id="call" src={call} alt="" /> */}
        <img id="location" src={location} alt="" />
        <img id="luv" src={luv} alt="" />
        <img id="lnk" src={lnk} alt="" />
        <img id="fb" src={fb} alt="" />
        <img id="lnk_hov" src={link} alt="" />
        <img id="fb_hov" src={fb_hov} alt="" />

        <div id="footer_a">
          {" "}
          We bring Corporate and Academia together for valuable collaborations.
        </div>

        <div id="footer_b">For institute details visit </div>
        <a id="footer_c" href="https://www.iitr.ac.in/">
          www.iitr.ac.in
        </a>

        <Link to="/contact" id="footer_d">
          Information
        </Link>
        <Link to="/contact" id="footer_e">
          Our Projects
        </Link>
        <Link to="/contact" id="footer_f">
          Resources
        </Link>
        <Link to="/contact" id="footer_g">
          Team
        </Link>

        <a id="footer_h">Collaborate </a>
        <a id="footer_i">Deliver Lecture </a>
        <a id="footer_j">Start Project </a>
        <a id="footer_k"> Conduct Workshop </a>

        <a id="footer_l">contact us </a>
        <a id="footer_m">cig@iitr.ac.in </a>
        <a id="footer_n">13332-28-6264 </a>
        <a id="footer_o">
          {" "}
          SAC, IIT Roorkee Roorkee, Uttrakhand, India- 247667
        </a>
        <a id="footer_p"> Crafted with </a>
        <a id="footer_q"> by Design Studio</a>
      </div>
    );
  }
}

export default Footer;
