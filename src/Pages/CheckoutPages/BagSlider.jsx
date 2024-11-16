import React, { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";
import axios from 'axios';

const BagSlider = ({ isOpen, setToggle }) => {
  const [showContent, setShowContent] = useState(false);

  const initiatePayment = async () => {
    try {
      // Step 1: Create an order by calling the backend API
      const orderResponse = await axios.post('https://snitch-backend-murex.vercel.app/api/payment/create-order', {
        amount: 500 // Amount in currency subunits (e.g., paise for INR)
      });
      const { orderId, amount, currency } = orderResponse.data;

      // Step 2: Use Razorpay checkout with order details
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Public Razorpay Key ID
        amount: amount,
        currency: currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: orderId, // Order ID returned from the backend
        handler: async (response) => {
          // Step 3: Verify payment on the backend
          const paymentVerificationResponse = await axios.post('https://snitch-backend-murex.vercel.app/api/payment/verify-payment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (paymentVerificationResponse.data.success) {
            alert("Payment verified successfully!");
          } else {
            alert("Payment verification failed. Please try again.");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#F37254"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in payment process:", error);
      alert("There was an error initiating payment. Please try again.");
          }
        }

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  const demoItem = {
    name: "Black Relaxed Fit Korean Trousers",
    color: "Black",
    size: "32",
    price: 1799,
    image:
      "https://www.snitch.co.in/cdn/shop/files/4MSR5176-0331.jpg?v=1729337548&width=1800",
    quantity: 1,
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out"
          style={{
            opacity: isOpen ? 0.5 : 0,
            visibility: isOpen ? "visible" : "hidden",
          }}
          onClick={() => setToggle(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 w-[90%] max-w-[480px] bg-white z-50 transform transition-transform duration-300 ease-in-out font-titillium ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div
            className={`px-4 sm:px-6 py-4 flex justify-between items-center transform transition-transform duration-500 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <h2 className="text-xl tracking-wide">BAG</h2>
            <button
              onClick={() => setToggle(false)}
              className="text-black hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-4 sm:px-6">
            <div
              className={`flex gap-3 sm:gap-4 mb-6 transform transition-all duration-500 delay-100 ease-out ${
                showContent
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              <img
                src={demoItem.image}
                alt={demoItem.name}
                className="w-20 sm:w-24 h-28 sm:h-32 object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-sm sm:text-base mb-1">{demoItem.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  Color: {demoItem.color}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  Size: {demoItem.size}
                </p>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center border border-gray-300">
                    <button className="px-2 sm:px-3 py-1 hover:bg-gray-50">
                      <Minus size={14} />
                    </button>
                    <span className="px-2 sm:px-3 py-1 border-x border-gray-300">
                      {demoItem.quantity}
                    </span>
                    <button className="px-2 sm:px-3 py-1 hover:bg-gray-50">
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-medium text-sm sm:text-base">INR {demoItem.price}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`px-4 sm:px-6 py-4 border-t transform transition-all duration-500 delay-200 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="uppercase text-sm">Subtotal</span>
              <span className="font-medium">
                INR {demoItem.price * demoItem.quantity}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              Shipping, taxes, and discount codes calculated at checkout.
            </p>
            <button className="w-full bg-black text-white py-3 tracking-wide hover:bg-gray-900 transition-colors"
            onClick={initiatePayment}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagSlider;