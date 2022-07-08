import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';


const StyledTab2= styled.div`

margin:150px auto;

.tab2-container{
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:375px;
margin:150px auto;
}
body{
    background-repeat: no-repeat;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start; 
    margin:auto;
    wdth:100%;
    height:100vh;
}
  
  .example-container {
    padding: 20px;
    
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
  
  .content-placeholder {
    padding: 20px;
    transform-origin: top center;
   
  }
  
  header {
    background: #4C241B;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    height: 40px;
    margin-bottom: 20px;

  }
  
  .word {
    height: 18px;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 8px;
    margin-right: 8px;
    background: #0055ff;
    border-radius: 10px;
    display: inline-block;
  }
  
  .paragraph {
    margin-bottom: 20px;
  }
  
  section {
    overflow: hidden;

  }
  
  @media (max-width: 600px) {
    .content-placeholder {
      padding-left: 20px;
    }
  
    .header .word {
      height: 30px;
    }
  
    .word {
      height: 14px;
      margin-bottom: 5px;
      margin-right: 5px;
    }
  
    .paragraph {
      margin-bottom: 20px;
    }
  }
  
`


export const Word = ({ width }) => <div className="word" style={{ width }} />;

const Paragraph = ({ words }) => (
  <div className="paragraph">
'There is a moment in the life of any aspiring astronomer that it is time to buy that first...' 
  </div>
);

export const ContentPlaceholder = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
      <Paragraph words={Paragraph} />
  </motion.div>
);

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
      <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#4C241B" : "#F3EBDE" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder />
          </motion.section>
        )}
      </AnimatePresence>
      </>
  );
};
const accordionIds = [0, 1, 2, 3];

const Tab2 = () => {
  const [expanded, setExpanded] = useState(0);
  return(
    <StyledTab2>

  <div className="tab2-container"> 
   {accordionIds.map((i) => (
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
  ))}
  </div>
  </StyledTab2>)

};

export default Tab2