import React, { useState } from "react";
import HubspotForm from 'react-hubspot-form';
import vayuh_background from '../images/vayuh_background.webp';

const ContactForm = ({ className }) => {

  return (
    <div id="signup" className={`flex flex-col items-center ${className}`} style={{ width: '100%', backgroundImage: `url(${vayuh_background})` }}>
      <div className="content contact-form my-4">
        <h3 className="font_3">Sign up to receive one-pagers</h3>
        <HubspotForm
          portalId='23115881'
          formId='9821729d-1bd0-4288-93fb-93cb9763c0bc'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
        />
        {/* <h4 style={{color:"rgb(var(--color_42))", fontWeight: 350}}>Lookout for the invite to Vayuh + Lloyd's Lab Workshop on <span style={{fontWeight: 800}}>CLIMATE CHANGE AND AI TO TACKLE PERILS</span> from us shortly</h4> */}
      </div>
    </div>

    // <div className="w-full max-w-lg mx-auto mt-10">
    //   <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white">
    //     <div className="mb-4">
    //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
    //         Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="name"
    //         type="text"
    //         placeholder="Your Name"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleInputChange}
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
    //         Email
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="email"
    //         type="email"
    //         placeholder="Your Email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleInputChange}
    //         required
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
    //         Message
    //       </label>
    //       <textarea
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-36"
    //         id="message"
    //         placeholder="Your Message"
    //         name="message"
    //         value={formData.message}
    //         onChange={handleInputChange}
    //         required
    //       />
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <button
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //         type="submit"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default ContactForm;
