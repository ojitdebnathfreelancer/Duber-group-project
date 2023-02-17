import React, { useState } from "react";
import { GiNetworkBars } from "react-icons/gi"
import { ImSpoonKnife } from "react-icons/im"
import { AiOutlineCar } from "react-icons/ai"
import Image from "next/image";

const Banner = () => {
  const [tabChange, setTabChange] = useState("Drive or deliver")

  const bannerBackgroundImage = {
    backgroundImage: `url(${(tabChange === "Drive or deliver" && "https://i.ibb.co/Qvtcrf3/ezgif-com-webp-to-jpg.jpg") ||
      (tabChange === "Eat" && "https://i.ibb.co/wCx1tY2/ezgif-com-webp-to-jpg-1.jpg") ||
      (tabChange === "Ride" && "https://i.ibb.co/VNhBCZG/ezgif-com-webp-to-jpg-2.jpg")

      })`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "71px 0px"
  };


  return <div className="relative">

    <div className={`${(tabChange === "Eat" || tabChange === "Ride") ? "hidden" : "block"}`}>
      <img
        className="h-[100vh]"
        src="https://i.ibb.co/Qvtcrf3/ezgif-com-webp-to-jpg.jpg" alt="" />
    </div>

    <div className={`${(tabChange === "Drive or deliver" || tabChange === "Ride") ? "hidden" : "block"}`}>
      <img
        className="h-[100vh]"
        src="https://i.ibb.co/wCx1tY2/ezgif-com-webp-to-jpg-1.jpg" alt="" />
    </div>

    <div className={`${(tabChange === "Drive or deliver" || tabChange === "Eat") ? "hidden" : "block"}`}>
      <img
        className="h-[100vh]"
        src="https://i.ibb.co/VNhBCZG/ezgif-com-webp-to-jpg-2.jpg" alt="" />
    </div>


    <div className="bg-white py-7 w-[576px] absolute top-20 left-28">
      <div className="grid grid-cols-3 justify-items-center border-b border-b-gray-100 drop-shadow-sm">
        <div
          className="text-center text-gray-900 hover:text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <GiNetworkBars
              className="font-bold text-2xl mb-2 text-gray-900" />
          </div>
          <p
            onClick={(e) => setTabChange(e.target.innerText)}
            className="font-medium leading-5 w-[65px]"
          >
            Drive or deliver
          </p>
        </div>

        <div
          className="text-center text-gray-900 hover:text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <ImSpoonKnife className="font-bold text-2xl mb-2 text-gray-900" />
          </div>
          <p
            onClick={(e) => setTabChange(e.target.innerText)}
            className="font-medium">Eat</p>
        </div>

        <div
          className="text-center text-gray-900 hover:text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <AiOutlineCar className="font-bold text-2xl mb-2 text-gray-900" />
          </div>
          <p
            onClick={(e) => setTabChange(e.target.innerText)}
            className="font-medium">Ride</p>
        </div>
      </div>

      {
        tabChange === "Drive or deliver" && <>

          <div>
            hello Drive or deliver
          </div>
        </>
      }

      {
        tabChange === "Eat" && <>
          <div>
            Hello Eat
          </div>
        </>
      }

      {
        tabChange === "Ride" && <>
          <div>
            hello ride
          </div>
        </>
      }
    </div>





  </div>;
};



export default Banner;
