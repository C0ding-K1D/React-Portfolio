import React from "react";
import classes from "./IconSkillsPage.module.css";
import background from "../assets/skills-test.png";
import SecondaryLogo from "../assets/SecondaryLogo";
import BootstrapIcon from "../assets/BootstrapIcon";
import CssIcon from "../assets/CssIcon";
import ReactIcon from "../assets/ReactIcon";
import SassIcon from "../assets/SassIcon";
import JsIcon from "../assets/JsIcon";
import NodeJsIcon from "../assets/NodeJsIcon";
import SmallLogo from "../assets/SmallLogo";
import Header from "./Header";

const IconsSkillsPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          // marginRight: "4.5rem",
        }}
      >
        <section className={classes.container}>
          <Header />
          <SmallLogo />
          <h1 className={classes["heading-primary"]}>SKILLS</h1>
          <NodeJsIcon />
          <BootstrapIcon />
          <CssIcon />
          {/* <HtmlIcon /> */}
          <JsIcon />
          <ReactIcon />
          <SassIcon />
        </section>
      </div>
      <div className={classes["skills-container"]}>
        <div>
          <h2 className={classes["section-heading"]}>nucamp</h2>
          <hr />
          <p>html</p>
          <p>bootstrap</p>
          <p>css</p>
          <p>js</p>
        </div>
        <div>
          <h2 className={classes["section-heading"]}>freecodecamp</h2>
          <hr />
          <p>html</p>
          <p>bootstrap</p>
          <p>css</p>
          <p>js</p>
        </div>
        <div>
          <h2 className={classes["section-heading"]}>udemy</h2>
          <hr />
          <p>html</p>
          <p>bootstrap</p>
          <p>css</p>
          <p>js</p>
        </div>
      </div>
      <footer>
        <SecondaryLogo className={classes.align} />
        <div className={classes.icons}>
          <i class="fa fa-github-square icon"></i>
          <i class="fa fa-linkedin icon"></i>
          <i class="fa fa-twitter-square icon"></i>
        </div>
        <div className={classes["grid-container"]}>
          <nav>
            <hr className={classes.line} />
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SKILLS</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </nav>
          <div className="copyright">
            <hr className={classes.line} />
            <p>WEBSITE CREATED BY MATTHEW ALVAREZ. © COPYRIGHT 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IconsSkillsPage;
