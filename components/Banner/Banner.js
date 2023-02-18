import React, { useRef, useState } from "react";
import { GiNetworkBars } from "react-icons/gi"
import { ImSpoonKnife } from "react-icons/im"
import { AiOutlineCar } from "react-icons/ai"
import Image from "next/image";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti"
import { GrFormClose } from "react-icons/gr"

const Banner = () => {
  const [tabChange, setTabChange] = useState("Drive or deliver")
  const [location, setLocation] = useState("")
  const [destination, setDestination] = useState("")


  const locationRef = useRef(null);
  const locationOnButtonClick = () => {
    locationRef.current.value = "";

  };
  const destinationRef = useRef(null);
  const destinationOnButtonClick = () => {
    locationRef.current.value = "";

  };

  console.log(location, location)

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


    <div className="lg:w-[576px] w-full bg-white absolute top-16 2xl:left-[16%] xl:left-20 lg:left-18 pt-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-5 grid-cols-3 lg:justify-items-center justify-items-start border-b border-b-gray-100 drop-shadow-sm px-6 pb-6">
        <div
          className="text-center text-gray-900 hover:text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <GiNetworkBars
              className="font-bold lg:text-2xl text-base mb-2 text-gray-900" />
          </div>
          <p
            onClick={(e) => setTabChange(e.target.innerText)}
            className="font-medium lg:text-base text-sm leading-5 w-[65px]"
          >
            Drive or deliver
          </p>
        </div>

        <div
          className="text-center text-gray-900 hover:text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <ImSpoonKnife className="font-bold lg:text-2xl text-base mb-2 text-gray-900" />
          </div>
          <p
            onClick={(e) => setTabChange(e.target.innerText)}
            className="font-medium lg:text-base text-sm">Eat</p>
        </div>

        <div
          className="text-center text-gray-900 hover:text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <AiOutlineCar className="font-bold lg:text-2xl text-base mb-2 text-gray-900" />
          </div>
          <p
            onClick={(e) => setTabChange(e.target.innerText)}
            className="font-medium lg:text-base text-sm">Ride</p>
        </div>
      </div>

      {
        tabChange === "Drive or deliver" && <>

          <div className="px-11 pt-11 pb-6">
            <h2 className="text-[52px] font-bold leading-[64px] py-7">Get in the driver’s seat and get paid</h2>
            <p>Drive on the platform with the largest network of active riders.</p>
            <div>
              <button className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 font-medium my-6">Sign up to drive</button>
            </div>
            <div className="mb-3">
              <Link href="/">Learn more about driving and delivering</Link>
            </div>
          </div>
        </>
      }

      {
        tabChange === "Eat" && <>
          <div className="px-11 pt-11 pb-6">
            <h2 className="text-[52px] font-bold leading-[64px] pb-7">Discover delicious eats</h2>
            <p>Order delivery from restaurants you love.</p>
            <div className="mt-8 mb-4">
              <button className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 font-medium mr-4">Order now</button>
              <Link href="/">Own a restaurant? Partner with Uber Eats</Link>
            </div>
          </div>
        </>
      }

      {
        tabChange === "Ride" && <>
          <div className="px-11 pt-11 pb-6">
            <h2 className="text-[52px] font-bold leading-[64px] pb-7">Request a ride now</h2>
            <div className="relative">
              <input
                onChange={(e) => setLocation(e.target.value)}
                className="w-full py-3.5 pl-10 pr-6 outline-none bg-gray-100"
                type="text"
                name="location"
                value={location}
                ref={locationRef}
                id=""
                placeholder="Enter pickup location"
              />
              {
                location.length ? <>
                  <GrFormClose
                    onClick={locationOnButtonClick}
                    className="absolute right-2 top-3 text-2xl cursor-pointer text-gray-500 hover:text-gray-800" />
                </> : <>
                  <TiLocationArrow className="absolute right-2 top-3 text-2xl cursor-pointer text-gray-500 hover:text-gray-800" />
                </>
              }
            </div>
            <div className="mt-3 relative">
              <input
                className="w-full py-3.5 pl-10 pr-6 outline-none bg-gray-100"
                type="text"
                onChange={(e) => setDestination(e.target.value)}
                name="destination"
                ref={destinationRef}
                id=""
                placeholder="Enter destination"
              />
              {
                destination.length && 
                  <GrFormClose
                    onClick={destinationOnButtonClick}
                    className="absolute right-2 top-3 text-2xl cursor-pointer text-gray-500 hover:text-gray-800" />
          
              }
            </div>
            <div className="mt-8">
              <button className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 font-medium my-6 mr-4">Request now</button>
              <button className="px-6 py-3 rounded-lg bg-gray-100 text-black hover:bg-gray-200 font-medium my-6 mr-4">Schedule for later</button>
            </div>
          </div>
        </>
      }
    </div>





  </div>;
};



export default Banner;
