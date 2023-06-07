import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-[40px] bg-[#0f674d]">
      <div className="custom-container flex justify-between items-start">
        <div className="lg:w-3/12 md:w-1/6">
          <div className="flex justify-between items-start">
            <img src={logo} alt="logo" className="w-[100px] mb-2 mr-3" />
            <p className="text-white">
              Discover a world of cuddly wonders at Toyniverse, your ultimate
              destination for enchanting teddy bears and cherished companions.
              Embrace the joy of softness and endless cuddles, as we bring the
              magic of childhood to life, one teddy bear at a time.
            </p>
          </div>
        </div>
        <div className="lg:w-3/12 md:w-1/6 px-10">
          <h3 className="text-white font-bold mb-2">Quick Links</h3>
          <ul className="text-white">
            <li className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/all-toys">All Toys</Link>
            </li>
            <li className="mb-2">
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="lg:w-3/12 md:w-1/6 px-10">
          <h3 className="text-white font-bold mb-2">Contact Us</h3>
          <ul className="text-white">
            <li className="mb-2">Phone: +91 9876543210</li>
            <li className="mb-2">
              Email:
              <a href="mailto:admin@toyniverse.com">admin@toyniverse.com</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-3/12 md:w-1/6">
          <h3 className="text-white font-bold mb-2">Follow Us</h3>
          <ul className="text-white">
            <li className="mb-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
