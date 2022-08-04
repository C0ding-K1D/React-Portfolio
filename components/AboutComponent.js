import { Fragment } from "react";
import SmallLogo from "../assets/SmallLogo";
import Header from "./Header";
import background from "../assets/bg-ill.png";
import SecondaryLogo from "../assets/SecondaryLogo";
import classes from "./AboutComponent.module.css";

const AboutComponent = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <section>
          <Header />
          <SmallLogo />
          <h1 className={classes["heading-primary"]}>ABOUT</h1>
        </section>
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
    </Fragment>
  );
};

export default AboutComponent;
