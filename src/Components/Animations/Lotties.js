import React, { useEffect, useRef } from "react";
import "./Lotties.css";
import Lottie from "lottie-web";

function Lotties() {
  const burgerMenu = useRef(null);
  const burgerMenu2= useRef(null);
  const burgerMenu3= useRef(null);
  const burgerMenu4= useRef(null);

  const chatBubble = useRef(null);
  const chatBubble2= useRef(null);
  const chatBubble3= useRef(null)
  const smileyLoader= useRef(null)
  const smileyLoader2= useRef(null)
  const smileyLoader3= useRef(null)
  const smileyLoader4= useRef(null)



  const lotties= [
    {
      lottieName: burgerMenu,
      lottieData: require("./Lotties/burgerMenu.json"),
      link:'https://lottiefiles.com/13205-menu-close-button'
    },
    {
      lottieName: burgerMenu2,
      lottieData: require("./Lotties/burgerMenu2.json"),
      link:'https://lottiefiles.com/13205-menu-close-button'

    },
    {
      lottieName: burgerMenu3,
      lottieData: require("./Lotties/burgerMenu3.json"),
      link:'https://lottiefiles.com/13205-menu-close-button'

    },
    {
      lottieName: burgerMenu4,
      lottieData: require("./Lotties/burgerMenu4.json"),
      link:'https://lottiefiles.com/78600-menu-blue'
    },
    {
      lottieName: smileyLoader,
      lottieData: require("./Lotties/smileyLoader.json"),   
      link:'https://lottiefiles.com/82869-smiley-pre-loader'
    },
    {
      lottieName: smileyLoader2,
      lottieData: require("./Lotties/smileyLoader2.json"),    
      link:'https://lottiefiles.com/13205-menu-close-button'
  
    },
    {
      lottieName: smileyLoader3,
      lottieData: require("./Lotties/smileyLoader3.json"),    
      link:'https://lottiefiles.com/13205-menu-close-button'
    },
  
    {
      lottieName: smileyLoader4,
      lottieData: require("./Lotties/smileyLoader4.json"),    
      link:'https://lottiefiles.com/14895-fun-physical-interaction-loader'
  
    },
    {
      lottieName: chatBubble,
      lottieData: require("./Lotties/chatBubble.json"),
      link:'https://lottiefiles.com/13205-menu-close-button'

    },
    {
      lottieName: chatBubble2,
      lottieData: require("./Lotties/chatBubble2.json"),
      link:'https://lottiefiles.com/26025-chat-loader'

    },
    {
      lottieName: chatBubble3,
      lottieData: require("./Lotties/chatBubble3.json"),
      link:'https://lottiefiles.com/40346-dot-pulse-loader'

    },

  ]


  useEffect(() => {
    lotties.map((lottie, index) => {
      return(
      Lottie.loadAnimation({
        index,
        container: lottie.lottieName.current,
        renderer: "svg",
        loop: true,
        autoPlay: true,
        animationData: (lottie.lottieData),
      }))
    })
    
  });


  return (
    <div>
      <div className="App-header">
        <h1> React Lottie Demo</h1>
      </div>
      <div className="lottie-widget">
        <h2> Menus</h2>
        <div className="lottie-container">
         
          <div className="" ref={burgerMenu} />
          <div className="" ref={burgerMenu2} />
          <div className="" ref={burgerMenu3} />
          <div className="" ref={burgerMenu4} />

        </div>
        </div>
        <div className="lottie-widget">
          <h2> Loaders</h2>
          <div className="lottie-container">
            <div className="" ref={smileyLoader} />
            <div className="" ref={smileyLoader2} />
            <div className="" ref={smileyLoader3} />
            <div className="" ref={smileyLoader4} />

          </div>
        </div>
        <div className="lottie-widget">
          <h2> Messages</h2>
          <div className="lottie-container">
          <div className="" ref={chatBubble} />
          <div className="" ref={chatBubble2} />
          <div className="" ref={chatBubble3} />

          </div>
        </div>
      </div>
   
  );
}

export default Lotties;