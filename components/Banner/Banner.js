import React, { useRef, useState } from "react";
import { GiNetworkBars } from "react-icons/gi"
import { ImSpoonKnife } from "react-icons/im"
import { AiOutlineCar } from "react-icons/ai"
import styles from "./Banner.module.css"
import EatTab from "./EatTab";
import DriveOrDeliver from "./DriveOrDeliver";
import RideTab from "./RideTab";


const Banner = () => {
  const [tabChange, setTabChange] = useState("Drive or deliver")

  return <div className="relative">
    <div className={`${(tabChange === "Eat" || tabChange === "Ride") ? "hidden" : "block"}`}>
      <img
        className=" h-[667px] w-full object-cover"
        src="https://i.ibb.co/Qvtcrf3/ezgif-com-webp-to-jpg.jpg" alt="" />
    </div>

    <div className={`${(tabChange === "Drive or deliver" || tabChange === "Ride") ? "hidden" : "block"}`}>
      <img
        className="h-[667px] w-full object-cover"
        src="https://i.ibb.co/wCx1tY2/ezgif-com-webp-to-jpg-1.jpg" alt="" />
    </div>

    <div className={`${(tabChange === "Drive or deliver" || tabChange === "Eat") ? "hidden" : "block"}`}>
      <img
        className="h-[667px] w-full object-cover"
        src="https://i.ibb.co/VNhBCZG/ezgif-com-webp-to-jpg-2.jpg" alt="" />
    </div>


    <div className="lg:w-[576px] w-full bg-white absolute lg:top-16 top-0 2xl:left-[16%] xl:left-20 lg:left-18 pt-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-5 grid-cols-3 lg:justify-items-center justify-items-start border-b border-b-gray-100 drop-shadow-sm px-6 pb-6">

        <div>
          <p
            onClick={() => setTabChange("Drive or deliver")}
            className="font-medium lg:text-base text-sm leading-5 w-[65px] flex justify-center items-center flex-col cursor-pointer text-gray-900 hover:text-gray-600 text-center"
          >
            <GiNetworkBars
              className="font-bold lg:text-2xl text-base mb-2 text-gray-900">
            </GiNetworkBars>
            Drive or deliver
          </p>
        </div>

        <div>
          <p
            onClick={() => setTabChange("Eat")}
            className="font-medium lg:text-base text-sm flex justify-center items-center flex-col cursor-pointer text-gray-900 hover:text-gray-600">
            <ImSpoonKnife
              className="font-bold lg:text-2xl text-base mb-2 text-gray-900">
            </ImSpoonKnife>
            Eat
          </p>
        </div>

        <div>
          <p
            onClick={() => setTabChange("Ride")}
            className="font-medium lg:text-base text-sm flex justify-center items-center flex-col cursor-pointer text-gray-900 hover:text-gray-600">
            <AiOutlineCar
              className="font-bold lg:text-2xl text-base mb-2 text-gray-900 ">
            </AiOutlineCar>
            Ride
          </p>
        </div>
      </div>

      {
        tabChange === "Drive or deliver"
          ?
          <DriveOrDeliver></DriveOrDeliver>
          :
          tabChange === "Eat"
            ?
            <EatTab></EatTab>
            :
            <RideTab></RideTab>
      }

    </div>
  </div>;
};



export default Banner;
