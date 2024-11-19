import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const SocialCard = () => {
  return (
    <div className="w-full h-[10vh] flex justify-center items-center mt-10">
      <div className="flex bg-white w-fit px-4 py-2 shadow-lg rounded-2xl dark:bg-gray-800 dark:shadow-gray-700">
        <div className="flex space-x-4">
          {/* Instagram Button */}
          <button
            title="Instagram"
            className="text-light-blue-light hover:text-red-500 dark:text-gray-400 border-2 inline-flex items-center justify-center p-2.5 border-transparent bg-light-secondary rounded-full transition-all duration-300 ease-in-out hover:bg-pink-500 hover:border-pink-500 hover:shadow-md dark:bg-gray-600 dark:hover:bg-pink-700 dark:hover:border-pink-700"
          >
            <Instagram className="w-5 h-5" />
          </button>

          {/* Facebook Button */}
          <button
            title="Facebook"
            className="text-light-blue-light hover:text-blue-500 dark:text-gray-400 border-2 inline-flex items-center justify-center p-2.5 border-transparent bg-light-secondary rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-500 hover:shadow-md dark:bg-gray-600 dark:hover:bg-blue-700 dark:hover:border-blue-700"
          >
            <Facebook className="w-5 h-5" />
          </button>

          {/* Twitter Button */}
          <button
            title="Twitter"
            className="text-light-blue-light hover:text-blue-500 dark:text-gray-400 border-2 inline-flex items-center justify-center p-2.5 border-transparent bg-light-secondary rounded-full transition-all duration-300 ease-in-out hover:bg-blue-400 hover:border-blue-400 hover:shadow-md dark:bg-gray-600 dark:hover:bg-blue-600 dark:hover:border-blue-600"
          >
            <Twitter className="w-5 h-5" />
          </button>

          {/* Email Button */}
          <button
            title="Email"
            className="text-light-orange-light hover:text-green-500 dark:text-gray-400 border-2 inline-flex items-center justify-center p-2.5 border-transparent bg-light-secondary rounded-full transition-all duration-300 ease-in-out hover:bg-green-500 hover:border-green-500 hover:shadow-md dark:bg-gray-600 dark:hover:bg-green-700 dark:hover:border-green-700"
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
