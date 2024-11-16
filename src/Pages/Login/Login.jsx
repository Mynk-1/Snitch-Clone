import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const requestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Mock OTP request logic
      if (phoneNumber.length !== 10) {
        throw new Error("Please enter a valid 10-digit phone number");
      }
      // Simulate sending OTP
      setTimeout(() => {
        console.log("OTP sent to: ", phoneNumber);
        setIsOtpSent(true);
        setLoading(false);
      }, 1000); // Simulate a delay of 1 second
    } catch (err) {
      setError(err.message || "Error sending OTP. Please try again.");
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    setLoading(true);
    setError(null);

    try {
      // Mock OTP verification
      if (otp === "123456") {
        console.log("OTP Verified. User logged in!");
        // Simulate post-login logic
      } else {
        throw new Error("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Only allow digits
    if (/^\d*$/.test(value) || value === "") {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">LOGIN WITH OTP</h1>
          <p className="text-sm text-gray-600">Please enter your 10-digit mobile number</p>
        </div>

        <form onSubmit={requestOTP} className="space-y-6">
          <div className="relative">
            <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
              <div className="flex items-center px-3 sm:px-4 bg-transparent border-r border-gray-300">
                <div className="flex items-center gap-1 sm:gap-2">
                  <img src="/api/placeholder/24/16" alt="India flag" className="w-6 h-4 object-cover rounded" />
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number"
                className="flex-1 px-3 sm:px-4 py-3 focus:outline-none text-sm sm:text-base"
                maxLength={10}
                required
                disabled={loading}
              />
            </div>
          </div>

          {!isOtpSent ? (
            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || !phoneNumber || phoneNumber.length < 10}
            >
              {loading ? "Sending..." : "Request OTP"}
            </button>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter OTP"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                maxLength={6}
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={verifyOTP}
                className="w-full bg-blue-500 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || otp.length !== 6}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <p className="text-xs sm:text-sm text-gray-500 text-center">
            {isOtpSent ? "Please enter the 6-digit OTP sent to your phone" : "A 6-digit OTP will be sent to your phone number"}
          </p>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or Sign-in with</span>
          </div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
