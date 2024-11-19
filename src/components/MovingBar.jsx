const MovingBar = () => {
    return (
      <div className="bg-gray-700  text-gray-100 text-2xl py-2 overflow-hidden">
        {/* Container for the moving bar */}
        <div className="flex animate-marquee whitespace-nowrap">
          
          {/* Individual feature items */}
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">24/7 Support</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">Fast Shipping</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">Return & Refund</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">Secure Payment</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl ">Gift Voucher Cards</span>
          </div>
  
          {/* Repeat the items for continuous scrolling */}
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">24/7 Support</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">Fast Shipping</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">Return & Refund</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">Secure Payment</span>
          </div>
          <div className="px-6 py-2 font-medium text-lg">
            <span className="font-semibold text-2xl">Gift Voucher Cards</span>
          </div>
        </div>
      </div>
    );
  };

export default MovingBar