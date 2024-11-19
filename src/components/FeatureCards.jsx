import React from 'react';
import { Clock, Truck, RefreshCcw, Shield, Gift } from 'lucide-react';

const FeatureCards = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 px-4">
        {/* Card for 24/7 Support */}
        <div className="flex flex-col items-center bg-gray-200 hover:bg-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <Clock className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-semibold text-xl text-gray-800">24/7 Support</h3>
          <p className="text-gray-600 mt-2">Always here to help, anytime.</p>
        </div>
  
        {/* Card for Fast Shipping */}
        <div className="flex flex-col items-center bg-gray-200 hover:bg-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <Truck className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-semibold text-xl text-gray-800">Fast Shipping</h3>
          <p className="text-gray-600 mt-2">Get your orders delivered quickly.</p>
        </div>
  
        {/* Card for Return & Refund */}
        <div className="flex flex-col items-center bg-gray-200 hover:bg-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <RefreshCcw className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-semibold text-xl text-gray-800">Return & Refund</h3>
          <p className="text-gray-600 mt-2">Easy returns and refunds policy.</p>
        </div>
  
        {/* Card for Secure Payment */}
        <div className="flex flex-col items-center bg-gray-200 hover:bg-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <Shield className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-semibold text-xl text-gray-800">Secure Payment</h3>
          <p className="text-gray-600 mt-2">Your transactions are safe with us.</p>
        </div>
  
        {/* Card for Gift Voucher Cards */}
        <div className="flex flex-col items-center bg-gray-200 hover:bg-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <Gift className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-semibold text-xl text-gray-800">Gift Voucher Cards</h3>
          <p className="text-gray-600 mt-2">The perfect gift for anyone.</p>
        </div>
      </div>
    );
  };


  export default FeatureCards