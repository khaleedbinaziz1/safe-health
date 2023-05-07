import React from 'react';
import { FaAddressCard, FaHome, FaUserAlt, FaMousePointer, FaThList, FaStarHalfAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import doc from '../../assets/images/docs.svg'

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
          <img src={doc} alt="" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-2/3 mt-12 sm:mt-0">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Safe Health</h1>
            <p className="text-lg mb-8">
            Welcome to Safe Health, your go-to destination for hassle-free online appointment booking with healthcare professionals. Our mission is to make healthcare accessible and convenient for everyone.
             </p>
             <p>
             At Safe Health, we pride ourselves on our partnerships with some of the best hospitals in the country. These partnerships allow us to provide our users with a wide range of healthcare services, from routine checkups to specialized treatments, all at their fingertips.
             </p>
             <br />
            <div className="flex items-center mb-4">
              <FaAddressCard className="text-lg text-gray-700 mr-2" />
              <p className="text-lg text-gray-700">123 Main St, Anytown USA</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-lg text-gray-700 mr-2" />
              <p className="text-lg text-gray-700">(123) 456-7890</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-lg text-gray-700 mr-2" />
              <p className="text-lg text-gray-700">info@safehealth.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
