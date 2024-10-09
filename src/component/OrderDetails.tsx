import React from 'react';
import { ChevronDown, Menu, ArrowLeft, ChevronRight } from 'lucide-react';
import im1 from '../images/one.png';
import im2 from '../images/two.png';
import im3 from '../images/three.png';
import im4 from '../images/four.png';
import im5 from '../images/five.png';
import im6 from '../images/six.png';
import im7 from '../images/seven.png';
import imp8 from '../images/juice.png';
import imp9 from '../images/avacado.png';
import imp10 from '../images/biscuit.png';
import truckIcon from '../images/Page 1.svg';
import leafIcon from '../images/green.svg';
import percentageIcon from '../images/bxs_offer.svg';
import line from '../images/Line.png';
{/*you will have to install lucid-react---->1.npm install lucide-react
2. yarn add lucide-react*/}
const RecipeKitDelivery = () => {
  const recipeItems = [
    { name: 'Cornitos Taco Shells', image: im1, pack: 'Pack of 5', price: 100, originalPrice: 110 },
    { name: 'Lettuce', image: im2, pack: 'Pack of 5', price: 100, originalPrice: 110 },
    { name: 'Amul Cheese', image: im3, pack: 'Pack of 5', price: 100, originalPrice: 110 },
    { name: 'Cilantro', image: im4, pack: 'Pack of 5', price: 100, originalPrice: 110 },
    { name: 'Daisy Sour Cream', image: im5, pack: 'Pack of 5', price: 100, originalPrice: 110 },
    { name: 'Habanero Tomato Salsa', image: im6, pack: 'Pack of 5', price: 100, originalPrice: 110 },
    { name: 'Soya Chunks', image: im7, pack: 'Pack of 5', price: 100, originalPrice: 110 },
  ];

  const tacoSaladItems = [
    { name: 'Lettuce', image: im2, pack: 'Pack of 5', price: 100, originalPrice: 110 },
  ];

  const specialOffers = [
    { name: 'Mexican Seasoning', weight: '100g', price: 150, discountedPrice: 130, image: imp8 },
    { name: 'Avocado', weight: '200g', price: 160, discountedPrice: 130, image: imp9 },
    { name: 'Conchas mexican', weight: '100g', price: 250, discountedPrice: 200, image: imp10 },
  ];

  return (
    <div className="bg-[#F5F5F5] min-h-screen max-w-2xl mx-auto font-dm-sans">
      {/* App Header */}
      <div className="bg-white p-4 sm:p-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="/api/placeholder/24/24" alt="AnyFeast Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="font-semibold text-red-500 text-sm sm:text-base">AnyFeast, Recipe Kit delivery</span>
        </div>
        <button className="px-4 py-1 sm:px-6 sm:py-2 bg-blue-500 text-white rounded-full text-sm sm:text-base">OPEN</button>
      </div>

      {/* Location Bar */}
      <div className="bg-white p-4 sm:p-6 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-semibold text-sm sm:text-base">Bangalore, Siri Anjaneya Temple...</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      {/* Delivery Info */}
      <div className="bg-[#FFFFFF] p-4 sm:p-6 flex items-center justify-center space-x-3 text-sm sm:text-base">
        <img src={truckIcon} alt="Delivery truck" className="w-5 h-5 sm:w-6 sm:h-6" />
        <span>Arrives by April 3 to April 9th</span>
      </div>

      {/* Free Delivery Banner */}
      <div className="bg-[#E1F1E6] p-3 sm:p-4 mx-6 my-4 rounded-xl text-[#0B6E27] text-sm sm:text-base flex items-center border border-[#0B6E27]">
        <img src={leafIcon} alt="Leaf icon" className="mr-2 w-5 h-5" />
        ₹100 Saved! Free Delivery unlocked
      </div>

      {/* Recipe Title */}
      <div className="px-6 md:px-8 py-2 sm:py-3 md:py-4 mt-4 md:mt-6 flex items-center justify-center">
      <img src={line} alt="Salad icon" className="w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] h-[0.5vh] rounded-full mr-2 md:mr-4" />
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-center">7 items for Soya Taco</h2>
        <img src={line} alt="Salad icon" className="w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] h-[0.5vh] rounded-full ml-2 md:ml-4" />

      </div>

      {/* Recipe Item List */}
      <div className="bg-[#FFFFFF] rounded-xl mx-6">
        {recipeItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 sm:p-6 border-b border-[#FFFFFF]">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-[#253D4E]">{item.name}</h3>
                <p className="text-sm sm:text-base text-[#454545]">Change Brand <ChevronDown className="inline w-4 h-4 sm:w-5 sm:h-5" /></p>
                <p className="text-xs sm:text-sm text-[#828282]">{item.pack}</p>
                <div>
                  <span className="font-semibold text-sm sm:text-base text-[#3BB77E] mr-2">₹{item.price}</span>
                  <span className="text-sm sm:text-base text-[#ADADAD] line-through">₹{item.originalPrice}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
  <button className="mt-2 bg-white text-[#0B6E27] border border-[#0B6E27] px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
    Add
  </button>
</div>

          </div>
        ))}
      </div>

      {/* Taco Salad Title */}
      <div className="px-6 md:px-8 py-2 sm:py-3 md:py-4 mt-4 md:mt-6 flex items-center justify-center">
      <img src={line} alt="Salad icon" className="w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] h-[0.5vh] rounded-full mr-2 md:mr-4" />
<h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-center">1 items for Taco Salad</h2>
        <img src={line} alt="Salad icon" className="w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] h-[0.5vh] rounded-full ml-2 md:ml-4" />

      </div>

      {/* Taco Salad Item List */}
      <div className="bg-[#FFFFFF] rounded-xl mx-6">
        {tacoSaladItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-[#253D4E]">{item.name}</h3>
                <p className="text-sm sm:text-base text-[#454545]">Change Brand <ChevronDown className="inline w-4 h-4 sm:w-5 sm:h-5" /></p>
                <p className="text-xs sm:text-sm text-[#828282]">{item.pack}</p>
                <div>
                  <span className="font-semibold text-sm sm:text-base text-[#3BB77E] mr-2">₹{item.price}</span>
                  <span className="text-sm sm:text-base text-[#ADADAD] line-through">₹{item.originalPrice}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
  <button className="mt-2 bg-white text-[#0B6E27] border border-[#0B6E27] px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
    Add
  </button>
</div>

          </div>
        ))}
      </div>

      {/* Special Offers Section */}
      <div className="bg-[#FFFFFF] p-4 sm:p-6 mt-4 sm:mt-6 rounded-xl mx-6">
        <h2 className="font-semibold text-lg sm:text-xl mb-4">Special Offers for you</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {specialOffers.map((offer, index) => (
            <div key={index} className="flex-shrink-0 w-32 sm:w-40 mb-4">
              <img src={offer.image} alt={offer.name} className="w-full h-24 sm:h-32 object-cover rounded-lg mb-2" />
              <h3 className="font-medium text-sm sm:text-base">{offer.name}</h3>
              <p className="text-xs sm:text-sm text-[#ADADAD]">{offer.weight}</p>
              <div className="mt-1">
                <span className="text-xs sm:text-sm text-[#787878] line-through mr-2">₹{offer.price}</span>
                <span className="font-semibold text-sm sm:text-base">₹{offer.discountedPrice}</span>
              </div>
              <button className="mt-1 border border-[#0B6E27] text-[#0B6E27] px-3 py-1 rounded-md text-sm sm:text-base w-full">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* View Coupons & Offers */}
      <div className="bg-[#FFFFFF] p-4 sm:p-6 mt-4 sm:mt-6 flex justify-between items-center rounded-xl mx-6">
        <div className="flex items-center">
          <div className="bg-[#FFFFFF] p-1 sm:p-2 rounded-full mr-2">
            <img src={percentageIcon} alt="Percentage icon" className="w-5 h-5 sm:w-5 sm:h-5" />
          </div>
          <span className="font-medium text-sm sm:text-base">View coupons & Offers</span>
        </div>
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#313131]" />
      </div>

      {/* Order Summary */}
      <div className="bg-[#FFFFFF] p-4 sm:p-6 mt-4 sm:mt-6 rounded-xl mx-6">
        <div className="flex justify-between py-2 text-sm sm:text-base ">
          <span className="text-[#787878]">Subtotal</span>
          <span className="text-[#000000] font-bold">₹800</span>
        </div>
        <div className="flex justify-between py-2 text-sm sm:text-base">
          <span className="text-[#787878]">Delivery Fee</span>
          <div>
          <span className="text-[#000000] line-through">₹200</span> <span className="text-[#0B6E27] font-semibold">FREE</span></div>
        </div>
        <div className="flex justify-between py-2 text-sm sm:text-base">
          <span className="text-[#787878]">Taxes</span>
          <span className="text-[#000000] font-bold">₹0.00</span>
        </div>
        <div className="flex justify-between py-2 font-bold text-base sm:text-lg">
          <span>Total</span>
          <span>₹800</span>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="p-4 sm:p-6 text-xs sm:text-sm text-[#787878] mx-6">
        <p>By placing your order with AnyFeast, you agree to abide by our Terms of Service and Privacy Policy. Please note that your credit/debit card will be temporarily authorised for payment processing.</p>
        <p className="mt-2">Thank you for choosing AnyFeast. We're excited to serve you!</p>
      </div>

      {/* Confirm Button */}
      <div className="p-4 sm:p-6 mx-6">
        <button className="w-full bg-[#0B6E27] text-white py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base">
          Confirm phone number
        </button>
      </div>
    </div>
  );
};

export default RecipeKitDelivery;