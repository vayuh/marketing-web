import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <footer className="footer bg-color-primary flex flex-col items-center text-white p-12 width-100">
            <div className="footer-content flex flex-wrap content-expanded justify-between">

                {/* Vayuh Section */}
                <div className="w-full font-7 flex flex-col space-between md:w-1/4 mb-8 mx-1">
                    <div style={{ width: `300px` }}>
                        <StaticImage
                            src="../images/Vayuh-Logo_White.webp"
                            alt="gatsby astronaut"
                        />
                    </div>
                    <a href="mailto:sales@vayuh.ai" className="underline mt-2" style={{ fontFamily: "open sans,sans-serif;" }}>sales@vayuh.ai</a>
                    <p className="my-4">Follow Us On: <a href="#" className="underline">LinkedIn</a></p>
                    <p className="mt-4 font-14-px">
                        Terms & Conditions
                        <br />
                        <span>© 2023 Vayuh Inc.</span>
                    </p>

                </div>

                <div className="w-full md:w-1/5 mb-8 font-7 font-14-px">
                    {/* Quick Links */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2 font-5 brightness-9">Quick Links</h2>
                        <Link to="/home" className="block underline mb-1">Home</Link>
                        <Link to="/company" className="block underline mb-1">Company</Link>
                        <Link to="/discover" className="block underline mb-1">Discover</Link>
                    </div>

                    {/* Products */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2 font-5 brightness-9">Products</h2>
                        <Link to="/home" className="block mb-1">Weather Forecasts</Link>
                        <Link to="/home" className="block mb-1">Climate Risk</Link>
                        <Link to="/home" className="block mb-1">Services</Link>
                    </div>

                    {/* Industries */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 font-5 brightness-9">Industries</h2>
                        <Link to="/home" className="block mb-1">Insurance & Asset Managers</Link>
                        <Link to="/home" className="block mb-1">Supply Chains</Link>
                        <Link to="/home" className="block mb-1">Energy Markets</Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className='l-lab-logo' style={{ width: `300px`, filter: "brightness(0) saturate(100%) invert(1);" }}>
                        <h2 className="text-2xl font-semibold mb-2 font-5 brightness-9">In Collaboration with</h2>
                        <StaticImage
                            src="../images/lab.svg"
                            alt="gatsby astronaut"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
