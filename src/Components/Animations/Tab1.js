import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled from 'styled-components';



const StyledTab1= styled.div`
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    // align-items: center;
    height:100vh;
  margin:150px auto;
 ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
 ul {
    width: 370px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 25px;
  }
  
 li {
    background-color: #F3EBDE;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
    color:#4C241B;
  }
  
 li:last-child {
    margin-bottom: 0px;
  }
  
.avatar {
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 20px;
  }
  
.row {
    width: 100%;
    height: 5px;
    background-color: #4C241B;
    border-radius: 10px;
    margin-top: 15px;
  }
  
`

export default function Tab1() {
  return (
      <StyledTab1>
    <AnimateSharedLayout >
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
    </StyledTab1>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="" layout > Where is my order?</motion.div>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

const items = [0, 1, 2];


