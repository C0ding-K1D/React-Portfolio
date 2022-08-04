import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
// import { useGesture } from 'react-use-gesture'
import { useDrag } from "@use-gesture/react";
import classes from "./ProjectsComponent.module.css";
import Header from "./Header";
import test from "../assets/test.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import SmallLogo from "../assets/SmallLogo";
import SecondaryLogo from "../assets/SecondaryLogo";
import background from "../assets/projectBg.png";
// import Button from "../ui/Button";

const cards = [
  `url(${project5})`,
  `url(${project4})`,
  `url(${project3})`,
  `url(${project2})`,
  `url(${test})`,
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function ProjectsComponent() {
  const [gone] = useState(() => new Set());

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.001;

      if (!active && trigger) gone.add(index);

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Header />
        <SmallLogo />
        <h1 className={classes["heading-primary"]}>PROJECTS</h1>
        {props.map(({ x, y, rot, scale }, i) => (
          <div className={classes.container}>
            <animated.div className={classes.deck} key={i} style={{ x, y }}>
              <animated.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                  backgroundImage: cards[i],
                }}
              >
                <button className={classes.btnLeft}>Link</button>
                <button className={classes.btnRight}>Code</button>
              </animated.div>
            </animated.div>
            {/* <div className={classes.test}></div> */}
          </div>
        ))}
      </div>
      <footer>
        <SecondaryLogo className={classes.align} />
        <div className={classes.icons}>
          <i className="fa fa-github-square icon"></i>
          <i className="fa fa-linkedin icon"></i>
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
}

export default ProjectsComponent;
