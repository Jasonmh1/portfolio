import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let animationFrame = 0;

        const handleScroll = () => {
            if (animationFrame) return;

            animationFrame = window.requestAnimationFrame(() => {
                const nextScrolled = window.scrollY > 10;
                setScrolled((current) => current === nextScrolled ? current : nextScrolled);
                animationFrame = 0;
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner relative">
                <a href="#hero" className="logo">
                    Jasonmh
                </a>

                <nav className="desktop" aria-label="Main navigation">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type="button"
                    className="flex size-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                        {menuOpen ? (
                            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        )}
                    </svg>
                </button>

                <nav
                    id="mobile-navigation"
                    className={`${menuOpen ? "block" : "hidden"} absolute left-5 right-5 top-full mt-3 rounded-xl border border-white/10 bg-black/95 p-3 shadow-xl backdrop-blur md:hidden`}
                    aria-label="Mobile navigation"
                >
                    <ul className="flex flex-col">
                        {navLinks.map(({ link, name }) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    onClick={() => setMenuOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-white-50 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" onClick={() => setMenuOpen(false)} className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default NavBar;