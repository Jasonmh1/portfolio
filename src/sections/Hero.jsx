import {words} from '../constants/index.js'
import Button from "../components/button.jsx";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(() => {

        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0,
            },
            {
                y:0,
                opacity:1,
                stagger:0.2,
                duration:1,
                ease:"power2.inOut"
            },
            )
        }
    );
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/*left: hero content */}
                <header className="flex-col justify-center md:w-full w-screen md:px-20 px-5 ">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1> Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                             <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                 <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                 />
                                                 <span>{word.text}</span>
                                             </span>

                                        ))}
                                    </span>
                                </span>

                            </h1>
                                <h1> into Real Projects </h1>
                            <h1> that Deliver Results </h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Jasonmh, A developer based in Egypt with a passion for management.</p>
                    </div>
                    <Button className="md:w-80 md:h-16 w-60 h-12 pt-8"
                    id="button"
                    text="Check out my work"/>
                </header>

                {/*right: 3d model*/}
                <div className=' w-lvw'>
                    <div className="Hero-3d-layout">

                    </div>
                </div>
            </div>
            <AnimatedCounter />
        </section>
    )
}
export default Hero
