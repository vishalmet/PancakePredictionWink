import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { initializeContract, currentEpoch } from '../integration';

const Home = ({ handleFlip }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [value, setValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [actualEpoch, setActualEpoch] = useState(""); // State for displaying the epoch

  useEffect(() => {
    async function initialize() {
      try {
        const { provider, signer, address, contract } =
          await initializeContract();
        setProvider(provider);
        setSigner(signer);
        setAddress(address);
        setContract(contract);

        const epoch = await contract.currentEpoch();
        setActualEpoch(epoch.toString()); 
      } catch (error) {
        console.error("Error initializing contract:", error);
      }
    }
    initialize();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center pt-10 text-white">
        <div className="bg-[#27262C] shadow-xl h-full rounded-3xl mx-6 md:mx-0 w-[280px]">
          <div className="bg-[#A881FC] text-white font-bold p-2 px-4 flex justify-between items-center rounded-t-3xl">
            <div className="flex items-center text-base gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Next</p>
            </div>
            <div className="text-sm">
              # {actualEpoch}  
            </div>
          </div>
          <div className="p-4">
            <div className=" text-base font-bold text-center p-1 bg-[#353547] w-[200px] rounded-t-xl mx-auto">
              <p className="text-[#31D0AA] text-base font-extrabold">UP</p>
              <p className="text-[#B0A5C9] text-xs">2.66x <span className=" font-medium"> payout</span></p>
            </div>
            <div className="w-full mx-auto border-2 border-[#A881FC] py-4 px-6 rounded-xl">
              <div className="flex justify-between font-bold text-sm">
                <p>Prize Pool:</p>
                <p>0.0050 BNB</p>
              </div>
              <div className="flex justify-center">
                <div className="space-y-3 pt-3 text-sm">
                  <div className=" flex justify-center">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="text-white shadow-blue-950 hover:shadow-2xl w-[200px] h-[40px] bg-[#31D0AA] hover:bg-[#31D0AA]/80 font-bold rounded-2xl"
                      onClick={() => handleFlip("BetBull")}
                    >
                      Enter UP
                    </motion.button>
                  </div>
                  <div className=" flex justify-center">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="text-white shadow-blue-950 hover:shadow-2xl w-[200px] h-[40px] bg-[#ED4B9E] hover:bg-[#ED4B9E]/80 font-bold rounded-2xl"
                      onClick={() => handleFlip("BetBear")}
                    >
                      Enter DOWN
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-bold text-center p-1 bg-[#353547] w-[200px] rounded-b-xl mx-auto">
              <p className="text-[#B0A5C9] text-xs">1.64x <span className=" font-medium"> payout</span></p>
              <p className="text-[#ED4B9E] text-base font-extrabold">DOWN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
