import React from 'react';
import { useInView } from "react-intersection-observer";

const Hero = () => {

       
    const {ref: refA, inView: isVisibleA} = useInView( {threshold: 0.7, triggerOnce: true })
    const {ref: refB, inView: isVisibleB} = useInView( {threshold: 0.7, triggerOnce: true })
    const {ref: refC, inView: isVisibleC} = useInView( {threshold: 0.7, triggerOnce: true })
       

    return (
        <div>
            <div className="hero">
                <h2 className="heroTitle">Foot Shop :</h2>
                <p ref={refA} className={!isVisibleA ? "p1" : "p1 visible"}>Lorem1 Cupidatat nisi est consectetur velit cillum vitae oc nisi<span > Best Style </span>veniam labore fugiat veniam ipsum consectetur duis cupidatat.veniam labore fugiat veniam ipsum consectetur duis cupidatat.</p>
                <p ref={refB} className={!isVisibleB ? "p1" : "p1 visible"}>Lorem1Cupidatat nisi est<span > Best Price </span>consectetur velit veniam labore fugiat veniam ipsum consectetur duis cupidatat cillum nisi.veniam labore fugiat veniam ipsum consectetur duis cupidatat.</p>
                <p ref={refC} className={!isVisibleC ? "p1" : "p1 visible"}>Lorem1 est consectetur vitae velit veniam labore fugiat veniam ipsum cillum  nisi<span > Best Quality  </span>consectetur duis cupidatat.veniam labore fugiat veniam ipsum consectetur duis cupidatat.</p>
            </div>
        </div>
    );
};

export default Hero;