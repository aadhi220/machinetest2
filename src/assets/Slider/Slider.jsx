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
        <ParallaxLayer offset={0} speed={0.6} onClick={() => scroll(2)}>
          <img className="bg-image" src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1.2} speed={0.2} onClick={() => scroll(1)}>
          <div className={`divider`} />
        </ParallaxLayer>

        <ParallaxLayer className={`text number`} offset={0} speed={0.3}>
          <span>0{1}</span>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}  onClick={() => scroll(0)}>
        <img className="bg-image" src="https://plus.unsplash.com/premium_photo-1671229456411-659ff6049231?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.6} factor={1.2} onClick={() => scroll(2)}>
        <div className={`divider`} />
        </ParallaxLayer>

        <ParallaxLayer className={`text number`} offset={1} speed={0.3}>
          <span>0{2}</span>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} onClick={() => scroll(1)}>
        <img className="bg-image" src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.6} factor={1.2} onClick={() => scroll(0)}>
        <div className={`divider`} />
        </ParallaxLayer>

        <ParallaxLayer className={`text number`} offset={2} speed={0.3}>
          <span>0{3}</span>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Slider;
