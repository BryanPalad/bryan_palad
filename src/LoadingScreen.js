import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import App from "./App";

const LoadingScreen = () => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  }, []);

  return (
    <motion.div className='bg-primary h-[100vh]'>
      {!completed ? (
        <div className="loadingscreen">
            <div className="loader">
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
            </div>
        </div>
      ) : (
        <>
          <App />
        </>
      )}
    </motion.div>
  );
};

export default LoadingScreen;
