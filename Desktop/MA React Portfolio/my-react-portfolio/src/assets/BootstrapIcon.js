import React from "react";
import { Fragment, useEffect, useState } from "react";
import {animated, useSpring} from 'react-spring';
import classes from './BootstrapIcon.module.css';

function BootstrapIcon() {
    const [length, setLength] = useState(null);
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        strokeDasharray: length,
        strokeDashoffset: toggle ? 0 : length,
        delay: 400,
    });

    const animatedFill = useSpring({
        fill: toggle ? "#866ffd": 'transparent',
        delay: 1100,
    })

    useEffect(() => {
            setToggle(true);
    },[]);

  return (
      <Fragment>
        <svg className={classes.placement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="100" fill="none">
        <animated.path
            style={{...animatedFill, ...animatedStyle}}
            ref={(ref) => {
                if(ref){
                    setLength(ref.getTotalLength());
                }
            }}
            fill="transparent"
            stroke="#866ffd"
            d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5c32.8-.1 50.9-13.3 50.9-36.9zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1C508.3 60 484.5 32 452.5 32H123.7C91.6 32 67.9 60.1 69 90.5c1 29.3-.3 67.2-9.8 98.1-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1 9.5 30.9 10.9 68.8 9.8 98.1-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5-1-29.3.3-67.2 9.8-98.1 9.6-31 25.7-50.6 52.1-53.1v-28.5c-26.3-2.5-42.5-22.1-52-53.1zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4 0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3 0 42.1-31.3 67.5-83.2 67.5zm-10-108.7h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5 0-25.7-18.6-38.9-54.5-38.9z"
        ></animated.path>
        </svg>
    </Fragment>
  );
}

export default BootstrapIcon;