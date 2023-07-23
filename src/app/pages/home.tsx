"use client";

import React from "react";
import Image from "next/image";
import ThreejsPng from "../../../public/threejs.png";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store/page";
import { CustomButton } from "../components";

const HomePage = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className=" home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <Image
              src={ThreejsPng}
              alt="logo"
              className=" w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className=" home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className=" head-text">
                LET'S <br className=" xl:block hidden" /> DO IT
              </h1>
            </motion.div>
            <motion.div
              className=" flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imgaination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles=" w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomePage;
