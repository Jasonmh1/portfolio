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
            <div className="hero-layout flex-col-reverse md:flex-row">
                {/*left: hero content */}
                <header className="relative z-10 flex-col justify-center md:w-3/5 w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1> Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 pb-2">
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

                <figure className="relative z-10 mt-8 flex flex-col items-center md:mt-0 md:mr-16 md:w-2/5">
                    <div className="relative rounded-full border border-white/20 bg-white/4 p-3 shadow-[0_0_70px_rgba(255,255,255,0.12)]">
                        <div
                            className="absolute inset-0 scale-110 rounded-full border border-white/10"
                            aria-hidden="true"
                        />
                        <img
                            src="/images/pfp.png"
                            alt="Jasonmh profile picture"
                            className="relative size-48 rounded-full border-2 border-white/60 object-cover object-center transition-transform duration-500 hover:scale-[1.03] md:size-64 xl:size-72"
                        />
                    </div>
                    <figcaption className="mt-6 flex flex-col items-center gap-2 text-center">
                        <span className="text-2xl font-semibold tracking-wide text-white md:text-3xl">
                            Jasonmh
                        </span>
                        <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400 md:text-sm">
                            Developer · Project Manager
                        </span>
                    </figcaption>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}
export default Hero
