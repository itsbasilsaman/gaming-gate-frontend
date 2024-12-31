
import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css"; // Add styles for the phone input
import BgImg from "../../../assets/images/logo.png";
 


export const MainVerification = () => {

   const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
   const [timer, setTimer] = useState<number>(60);
 
   // Handle OTP input change
   const handleInputChange = (value: string, index: number): void => {
     if (isNaN(Number(value))) return; // Ignore non-numeric input
     const newOtp = [...otp];
     newOtp[index] = value;
     setOtp(newOtp);
 
     // Automatically focus on the next input field
     if (value && index < otp.length - 1) {
       const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
       nextInput?.focus();
     }
   };
 
   // Handle timer countdown
   useEffect(() => {
     if (timer > 0) {
       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
       return () => clearInterval(interval); // Clear interval on component unmount
     }
   }, [timer]);
 
   // Resend OTP
   const handleResend = (): void => {
     setTimer(60); // Reset timer
     setOtp(["", "", "", "", "", ""]); // Clear OTP inputs
     alert("OTP Resent!"); // Simulate OTP resend
   };

    

   return (
    <>
   <div
      className="flex items-center p-2 justify-center min-h-screen relative overflow-hidden"
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 animate-pulse"></div>
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 adminlogin-background">
        <div className="background-one relative inset-0 flex justify-center items-start pt-[60px]">
          <img src={BgImg} alt="" className="w-[110px]" />
        </div>
        <div className="background-two"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex flex-col bg-white items-center px-[28px] py-[45px] w-full max-w-md admin-login-box">
        {/* <h2
          className="text-[23px] font-bold mb-6 text-center text-white animate-bounce"
          style={{ fontFamily: "Unbounded", color: "#24288E" }}
        >
          WhatsApp OTP
        </h2>
        */}
         <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg  ">
        <h2 className="text-[23px] font-bold mb-6 text-center text-white animate-bouncetext-center"  style={{ fontFamily: "Unbounded", color: "#24288E" }}>WhatsApp OTP</h2>
        <p className="mb-6 text-center text-gray-600">
          OTP code sent to <span className="font-medium text-green-600">(+91) 95*****04</span>
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(e.target.value, index)}
              className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <p className="mb-6 text-center text-sm text-gray-500">
          Request in {timer > 0 ? `${timer} sec` : <button onClick={handleResend} className="text-blue-600 hover:underline">Resend</button>}
        </p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => alert("Cancelled")}
          >
            Cancel
          </button>
          <button
            disabled={otp.some((digit) => digit === "")}
            className={`px-4 py-2 font-semibold text-white rounded ${
              otp.some((digit) => digit === "")
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={() => alert(`Submitted OTP: ${otp.join("")}`)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>
   )
}