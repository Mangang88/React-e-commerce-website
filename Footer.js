import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="" style={{ backgroundColor: 'blue', color: 'white' }}>
                  Subscribe
                  </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-7">
                  Hno: 68A, Jat Choupal, Humayunpur, Safdarjang Enclave <br />
                  Pincode: 110029
                </address>
                <a href="tel:+919625419466" className="mt-3 d-block mb-0 text-white">
                  +91 9625419466
                </a>
                <a href="mailto:inunganbamangang88@gmail.com" className="mt-3 d-block mb-0 text-white">
                  inunganbamangang88@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" to="">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a className="text-white" to="">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a className="text-white" to="">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a className="text-white" to="">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div>
                <div className="footer-link d-flex flex-column">
                  <Link to="/privacy-policy" className="text-white py-2 mb-1">
                    Privacy Policy
                  </Link>
                  <Link to="/refund-policy" className="text-white py-2 mb-1">
                    Refund Policy
                  </Link>
                  <Link to="/shipping-policy" className="text-white py-2 mb-1">
                    Shipping Policy
                  </Link>
                  <Link to="/term-conditions" className="text-white py-2 mb-1">
                    Terms & Conditions
                  </Link>
                  <Link to="#" className="text-white py-2 mb-1">
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div>
                <div className="footer-link d-flex flex-column">
                  <Link to="#" className="text-white py-2 mb-1">
                    About Us
                  </Link>
                  <Link to="#" className="text-white py-2 mb-1">
                    FAQ
                  </Link>
                  <Link to="#" className="text-white py-2 mb-1">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="#" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} powered by Mangang
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;