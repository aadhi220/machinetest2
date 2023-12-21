import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Slider.css";
const Slider = () => {
  const parallax = useRef(null);
  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div >
      <Parallax className="container" ref={parallax} pages={3} horizontal>
        <ParallaxLayer offset={0} speed={0.2} onClick={() => scroll(2)}>
          <img className="bg-image" src="https://images7.alphacoders.com/536/thumb-1920-536269.jpg" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1.2} speed={1} onClick={() => scroll(1)}>
          <div className={`divider`} />
        </ParallaxLayer>

        <ParallaxLayer className={`text number`} offset={0} speed={0.3}>
          <span>The</span>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}  onClick={() => scroll(0)}>
        <img className="bg-image" src="https://www.pixground.com/wp-content/uploads/2023/09/Great-Wall-Of-China-Sunset-4K-Wallpaper-jpg.webp" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} factor={1.2} onClick={() => scroll(2)}>
        <div className={`divider`} />
        </ParallaxLayer>

        <ParallaxLayer className={`text number`} offset={1} speed={0.3}>
          <span>Wonders</span>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} onClick={() => scroll(1)}>
        <img className="bg-image" src="https://images6.alphacoders.com/458/458510.jpg" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} factor={1.2} onClick={() => scroll(0)}>
        <div className={`divider`} />
        </ParallaxLayer>

        <ParallaxLayer className={`text number`} offset={2} speed={0.3}>
          <span>of world</span>
        </ParallaxLayer>




        
      </Parallax>
    </div>
  );
};

export default Slider;
