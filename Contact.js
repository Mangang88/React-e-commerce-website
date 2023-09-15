import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome } from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import Container from '../components/Container';
const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d219.01451540418097!2d77.19453726668146!3d28.562787915373185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692889839297!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                    <button type="submit"className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">Hno:   68A , Near NCC gate , Humayunpur, New Delhi</address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiPhoneCall className="fs-5" />
                    <a href="tell:+91 9625419466">+91 9625419466</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:inunganbamangang88@gmail.com">
                        inunganbamangang88@gmail.com
                        </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsInfoCircle className="fs-5" />
                      <p className="mb-0">
                        Monday - Friday 10AM - 8PM
                        </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};
export default Contact;