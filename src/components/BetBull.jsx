import React, { useState } from "react";
import { motion } from "framer-motion";

const BetBull = ({ handleFlip }) => {
  const [value, setValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (parseFloat(inputValue) < 0.00001) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="bg-customStart1/10 shadow-green-500/50 shadow-xl h-fit rounded-xl mx-6 md:mx-0 w-[400px] md:w-[500px] space-y-8 pb-8">
        <div className=" bg-customStart1/20 text-white font-bold text-2xl p-3 flex justify-between rounded-t-xl">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleFlip(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </motion.button>
            <p>Set Position</p>
          </div>
          <div className=" flex justify-center text-base gap-2 items-center bg-green-500 p-2 rounded-md">
            UP{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </div>
        </div>
        <div className="mx-5 space-y-4">
          <div className=" flex justify-between font-semibold text-xl">
            <p>Commit:</p>
            <p>0.0050 BNB</p>
          </div>

          <input
            type="text"
            placeholder="0.0"
            value={value}
            onChange={handleInputChange}
            className="bg-customStart1/10 border font-bold border-customGrayStroke rounded-md w-full h-12 px-3 text-right"
          />
          {showWarning && (
            <p className="text-red-500 text-sm">The minimum value should be greater than 0.00001.</p>
          )}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className=" bg-green-500 hover:bg-green-600 w-full h-12 rounded-md text-xl font-bold mb-3"
          >
            Predict
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BetBull;
