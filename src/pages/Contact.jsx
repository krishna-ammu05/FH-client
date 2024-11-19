import React from "react";
import { Mail, Phone, Pin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-800 to-gray-600">
      {/* Page Title */}
      <div className="w-full py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Contact Us</h1>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Info Section */}
        <div className="bg-gradient-to-br from-gray-700 to-gray-500 p-8 flex flex-col gap-6 justify-center items-center text-white">
          <ContactCard
            icon={<Mail className="h-10 w-10 text-white" />}
            info="abc@gmail.com"
          />
          <ContactCard
            icon={<Phone className="h-10 w-10 text-white" />}
            info="9876543210"
          />
          <ContactCard
            icon={<Pin className="h-10 w-10 text-white" />}
            info="1/11, ASD, DFG, WERT"
          />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Get in Touch</h2>
          <form className="flex flex-col gap-6">
            <InputField placeholder="Name" type="text" />
            <InputField placeholder="Email" type="email" />
            <InputField placeholder="Phone" type="tel" />
            <TextAreaField placeholder="Message" rows="6" />
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 rounded-md font-semibold hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ icon, info }) => (
  <div className="flex items-center gap-4 bg-gray-600 rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
    {icon}
    <p className="text-lg font-medium">{info}</p>
  </div>
);

// Input Field Component
const InputField = ({ placeholder, type }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
  />
);

// TextArea Field Component
const TextAreaField = ({ placeholder, rows }) => (
  <textarea
    placeholder={placeholder}
    rows={rows}
    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
  />
);

export default Contact;