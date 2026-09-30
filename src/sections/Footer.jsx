import { socialImgs } from "../constants";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a href="/terms" className="text-center transition-colors hover:text-white md:text-start">
                        Terms & Conditions
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a href={socialImg.link}> <img src={socialImg.imgPath} alt="social icon" /> </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Jasonmh. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;