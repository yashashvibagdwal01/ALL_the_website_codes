import React, { useState } from "react";
import banner2 from "../images/scooterrider.png";
import paperbags from "../images/packs.png";
import check from "../images/tick.svg";

const OrderConfirmation = () => {
  const [step, setStep] = useState(1);

  const handleStepClick = (newStep: React.SetStateAction<number>) => {
    setStep(newStep);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-dm-sans">
      {/* Header */}
      <div className="w-full bg-green-600 text-white py-4 px-6 shadow-lg fixed top-0 z-50">
        <h1 className="text-xl font-semibold">Order Confirmation</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-20 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-center text-[#313131]">
          Thank You
        </h2>
        <p className="text-center text-lg mt-2 text-[#0B6E27] flex items-center justify-center">
          <img src={check} alt="Order Placed" className="w-5 h-5 mr-1" />
          Your Order is placed successfully
        </p>
        <p className="text-center text-[#313131] mt-2 font-semibold">Order Number: #00007023</p>
        <div
          className="w-full max-w-[260px] h-[260px] mt-4 bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Delivery Information */}
        <div className="mt-4 border rounded-lg p-4 bg-white w-full">
          <h3 className="font-semibold text-lg">Delivery Address</h3>
          <p className="text-[#5F5F5F] font-bold mt-1">Ojas Karmarkar</p>
          <p className="text-[#5F5F5F]">9923847298</p>
          <p className="text-[#5F5F5F]">14th main road, sector 6, HSR, Layout Bengaluru 560092</p>

          {/* Item number */}
          <div className="mt-4 border rounded-lg p-4 bg-[#F8F8F8]">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="flex items-start mb-4 sm:mb-0">
                <img src={paperbags} alt="Total Items" className="w-16 h-16 mr-2" />
                <div className="flex flex-col">
                  <p className="text-[#313131]">Total: 7 Items</p>
                  <p className="text-[#313131] font-bold">#754679</p>
                </div>
              </div>

              <button className="bg-[#0B6E27] w-full sm:w-auto text-white px-4 py-2 rounded hover:bg-green-700">
                Track
              </button>
            </div>

            <div className="w-full mt-4">
              <div className="w-full flex items-center justify-between">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className={`h-1 flex-1 mx-1 ${
                      step >= i ? "bg-gradient-to-r from-transparent to-[#0B6E27]" : "bg-gray-300"
                    } cursor-pointer rounded`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;