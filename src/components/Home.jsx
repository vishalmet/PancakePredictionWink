import React from 'react'
import { motion } from "framer-motion";

const Home = ({ handleFlip }) => {
  return (
    <div>
      <div className="flex justify-center items-center pt-10">
        <div className="bg-customStart1/10 shadow-customButtonStroke/50 shadow-xl h-72 rounded-xl mx-6 md:mx-0 w-[400px] md:w-[500px] space-y-8">
          <div className=" bg-customButtonStroke text-white font-bold text-2xl p-3 flex justify-center rounded-t-xl">
            Pancake Prediction
          </div>
          <div className=" mx-10">
            <div className=" flex justify-between font-bold text-xl">
              <p>Prize Pool:</p>
              <p>0.0050 BNB</p>
            </div>
            <div className=" flex justify-center">
              <div className=" space-y-3 pt-3">
                <div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="text-white text-xl shadow-blue-950 hover:shadow-2xl w-[280px] md:w-[450px] h-[48px] bg-green-500 font-bold hover:bg-green-600 rounded-xl"
                    onClick={() => handleFlip("BetBull")}
                  >
                    Enter UP
                  </motion.button>
                </div>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="text-white text-xl shadow-blue-950 hover:shadow-2xl w-[280px] md:w-[450px] h-[48px] bg-red-500 font-bold hover:bg-red-600 rounded-xl"
                    onClick={() => handleFlip("BetBeer")}
                  >
                    Enter DOWN
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
