import React, { useState } from "react";
import HeaderLogo from "./assets/headerlogo.png";
import Home from "./components/Home";
import BetBull from "./components/BetBull";
import BetBeer from "./components/BetBear";
import { motion } from "framer-motion";
import Wallet from "./components/Wallet";

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [backComponent, setBackComponent] = useState(null);

  const handleFlip = (componentName = null) => {
    setBackComponent(componentName);
    setIsFlipped(!!componentName);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-customStart via-customStart to-blue-950">
      <div className="flex flex-col items-center mx-auto bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen text-white pt-12">
        <div className="flex justify-center">
          <div className=" space-y-3">
            <img className="h-6 w-auto mx-auto" src={HeaderLogo} alt="Header Logo" />
            <Wallet />
          </div>
        </div>
        <div className="relative w-[400px] md:w-[500px] perspective">
          <motion.div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <Home handleFlip={handleFlip} />
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              {backComponent === "BetBull" && (
                <BetBull handleFlip={handleFlip} />
              )}
              {backComponent === "BetBear" && (
                <BetBeer handleFlip={handleFlip} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
