import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { initializeContract, betBear } from '../integration';

const BetBear = ({ handleFlip }) => {  // Correct component name here
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [value, setValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    async function initialize() {
      try {
        const { provider, signer, address, contract } = await initializeContract();
        setProvider(provider);
        setSigner(signer);
        setAddress(address);
        setContract(contract);
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    }
    initialize();
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (parseFloat(inputValue) < 0.001) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  const handleBetBear = async () => {  // Ensure this function matches the function being used
    if (contract && signer && parseFloat(value) >= 0.001) {
      try {
        await betBear(value);
      } catch (error) {
        console.error('Error executing betBear:', error);  // Use the correct function name here
      }
    } else {
      console.warn('Invalid bet or contract not initialized');
    }
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="bg-customStart1/10 shadow-red-500/50 shadow-xl h-fit rounded-xl mx-6 md:mx-0 w-[400px] md:w-[500px] space-y-8 pb-8">
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
          <div className=" flex justify-center text-base gap-2 items-center bg-red-500 rounded-md p-2">
            DOWN
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
            onClick={handleBetBear}
            className=" bg-red-500 hover:bg-red-600 w-full h-12 rounded-md text-xl font-bold"
          >
            Predict
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BetBear;
