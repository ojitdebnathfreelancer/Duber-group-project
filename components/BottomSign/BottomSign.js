import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./BottomSign.module.css";

const BottomSign = () => {
  return (
    <div className="lg:max-w-7xl md:max-w-md mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-auto mb-10 lg:gap-20">
      <div
        id={styles.div1}
        className="flex items-center sm:w-44 md:w-[450px] lg:w-full justify-between bg-[#ffffff]  my-3  border-b-2 border-black "
      >
        <div>
          <h2 className="text-[34px] mr-3 mb-5 font-semibold">
            Sign up to drive
          </h2>
        </div>
        <BsArrowRightShort
          id={styles.arrow1}
          className=" relative top-1 font-bold mb-5"
          size={45}
        ></BsArrowRightShort>
      </div>
      <div
        id={styles.div1}
        className="flex items-center  sm:w-44 md:w-[450px] lg:w-full w-[450px] justify-between bg-[#ffffff]  my-3  border-b-2 border-black"
      >
        <div>
          <h2 className="text-[34px] mr-3 mb-5 font-semibold">
            Sign up to ride
          </h2>
        </div>
        <BsArrowRightShort
          id={styles.arrow1}
          className=" relative top-1 font-bold mb-5"
          size={45}
        ></BsArrowRightShort>
      </div>
    </div>
  );
};

export default BottomSign;
