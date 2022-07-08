import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from 'styled-components';


const StyledYesNo= styled.div`

body {
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .example-container {
    width: 100vw;
    height: 100vh;
  }
  
  .box {
    background: white;
    border-radius: 30px;
    width: 150px;
    height: 150px;
    position: absolute;
    top: calc(50% - 150px / 2);
    left: calc(50% - 150px / 2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .progress-icon {
    width: 80%;
    height: 80%;
  }
  
  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  `


export const YesNoWidget = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)"
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <StyledYesNo> 
    <motion.div className="example-container" style={{ background }}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <svg className="progress-icon" viewBox="0 0 50 50">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ translateX: 5, translateY: 5 }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M17,17 L33,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathA }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M33,17 L17,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathB }}
          />
        </svg>
      </motion.div>
    </motion.div>
    </StyledYesNo>
  );
};



const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 }
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } }
};

export const Refresh = ({ onClick }) => {
  return (
    <motion.div
      className="refresh"
      onClick={onClick}
      variants={button}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      <motion.svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        variants={arrow}
      >
        <path
          d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2.4886-3.1-4.5308-3.1C4.8665 3.7 2.7 5.85 2.7 8.5s2.1665 4.8 4.8422 4.8c1.3035 0 2.523-.512 3.426-1.4079a.7.7 0 0 1 .986.9938C10.7915 14.0396 9.2186 14.7 7.5422 14.7 4.0957 14.7 1.3 11.9257 1.3 8.5s2.7957-6.2 6.2422-6.2c2.1801 0 4.137 1.1192 5.2578 2.8541z"
          fill="#fff"
          fillRule="nonzero"
        />
      </motion.svg>
    </motion.div>
  );
};
