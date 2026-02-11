import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaPython, FaBrain, FaChartBar } from "react-icons/fa";

const roles = [
  { text: "React Developer", icon: <FaReact color="#61DBFB" /> },
  { text: "Python Developer", icon: <FaPython color="#306998" /> },
  { text: "ML Expert", icon: <FaBrain color="#FFD43B" /> },
  { text: "Data Analyst", icon: <FaChartBar color="#9C27B0" /> },
];

const HeroTypingAnimation = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Stay for 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Animated background blur */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-xl blur-sm"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main role container */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl overflow-hidden">
          {/* Modern animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "xor",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor"
              }}
            />
          </div>
          
          {/* Content with vertical carousel */}
          <div className="relative z-10 h-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  y: -100,
                  scale: 0.8
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="flex items-center space-x-6"
              >
                {/* Animated icon */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="text-6xl"
                >
                  {roles[currentRoleIndex].icon}
                </motion.div>

                {/* Role text - larger size */}
                <motion.span
                  className="text-8xl font-bold text-white font-mono tracking-wide"
                  initial={{ letterSpacing: "0.3em", opacity: 0 }}
                  animate={{ letterSpacing: "0.05em", opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {roles[currentRoleIndex].text}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Role indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {roles.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentRoleIndex ? 'bg-blue-400' : 'bg-gray-600'
              }`}
              animate={{
                scale: index === currentRoleIndex ? [1, 1.5, 1] : 1,
                opacity: index === currentRoleIndex ? [1, 0.6, 1] : 0.5,
              }}
              transition={{
                duration: 0.7,
                repeat: index === currentRoleIndex ? Infinity : 0,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              initial={{
                x: Math.random() * 300,
                y: Math.random() * 200,
              }}
              animate={{
                x: Math.random() * 300,
                y: Math.random() * 200,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTypingAnimation;