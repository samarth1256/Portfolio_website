import { motion } from "framer-motion";
import { styles } from "./styles";
import { ComputersCanvas } from "./canvas";

import React from "react";

const Hero = () => {
  return (<>
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi, I am <span className="text-[#915eff]">Samarth Dua</span>
          </h1>
          <br></br>
          <p className={`${styles.heroSubText}  text-white-100`}>
            A passionate Reactjs
            <br className="sm:block hidden" /> and javascript developer.
          </p>
        </div>
      </div>
       {/* <ComputersCanvas />  */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev animate={{ 
              y:[0,24,0]
            }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeateType:'loop'
              }}
              className='h-3 w-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
        <h3 className="mx-2">Click to scroll down</h3>
      </div>
     
      
    </section>
    
    {/* <img src="/src/assets/coder3.png" className="h-[50vw] w-[70vw] xs:h-[50vw] xs:w-[70vw] justify-items-center mx-auto xs:translate-y-[-40%] translate-y-[-90%]"></img> */}
    </>
  );
};

export default Hero;
