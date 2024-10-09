import React from 'react';
import one from "../images/first.png";
import two from "../images/sec.png";
import three from "../images/third.png";
import four from "../images/fourth.png";
import five from  "../images/fifth.png";
import six from "../images/sixth.png";
import icon from "../images/icon.svg";

const DeliveryDetails = () => {
    return (
        <div className="min-h-screen flex flex-col font-dm-sans bg-[#F9F9F9]">
          {/* Header */}
          <div className="w-full bg-green-600 text-white py-4 px-6 shadow-lg fixed top-0 z-50">
            <h1 className="text-xl font-semibold">Delivery Details</h1>
          </div>
          
          <div className="flex-grow flex flex-col items-center pt-20 px-4 sm:px-6 md:px-8 max-w-[1100px] mx-auto w-full">
            {/* Address */}
            <div className="bg-white p-4 sm:p-6 rounded-lg w-full mb-4">
              <h2 className="text-lg sm:text-xl font-bold mb-2">Delivery Address</h2>
              <div>
                <p className="font-bold text-[#5F5F5F]">Ojas Karmarkar</p>
                <p className="text-[#5F5F5F]">9923847298</p>
                <p className="text-[#5F5F5F]">14th main road, sector 6, HSR, Layout Bengaluru 560092</p>
              </div>
            </div>

            {/* Product Scroll */}
            <div className="relative w-full mb-4">
              <button
                className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#e3e1e1] rounded-full w-8 h-8 items-center justify-center"
                onClick={() => document.getElementById('scroll-container')?.scrollBy({ left: -120, behavior: 'smooth' })}>
                &lt;
              </button>
              <div
                id="scroll-container"
                className="snap-x snap-mandatory overflow-x-auto flex space-x-4 bg-white p-4 rounded-lg w-full scroll-smooth"
                style={{ scrollbarWidth: 'none', whiteSpace: 'nowrap' }}
              >
                {[one, two, three, four, five, six, six, six].map((img, index) => (
                  <div key={index} className="snap-center flex-shrink-0">
                    <img src={img} alt={`product-${index}`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
                  </div>
                ))}
              </div>
              <button
                className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#e3e1e1] rounded-full w-8 h-8 items-center justify-center"
                onClick={() => document.getElementById('scroll-container')?.scrollBy({ left: 120, behavior: 'smooth' })}>
                &gt;
              </button>
            </div>

            {/* Delivery Steps */}
            <div className="bg-white p-4 sm:p-6 rounded-lg w-full mb-4">
              {['Order Confirmed', 'Delivery Agent Assigned', 'Order Dispatched', 'Order in Transit', 'Out for Delivery', 'Order Delivered'].map((step, index) => (
                <div key={index} className="flex items-start ">
                  <div className="flex flex-col items-center mr-3">
                    <img src={icon} alt="icon" className="w-5 h-5 rounded-full" />
                    {index < 5 && <div className="w-px h-10 bg-gray-300 "></div>} 
                  </div>
                  <div>
                    <p className="font-semibold text-[#313131]">{step}</p>
                    <p className="text-sm text-[#828282]">May 05, 03:55 PM</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cancel button */}
            <button className="w-full bg-white text-black font-semibold py-4 rounded-lg shadow hover:bg-red-600 hover:text-white transition-colors">
              Cancel Order
            </button>
          </div>
        </div>
    );
};

export default DeliveryDetails;
