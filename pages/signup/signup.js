import { useRouter } from "next/router";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Signup = () => {


  const router = useRouter()

  const handleNavigate = (e) => {
    e.preventDefault()
    router.push("/signup/emailPhone")
  }

  return (
    <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center px-3 md:pt-0 pt-2">
      <div className="w-full">
        <div>
          <h2 className="text-[24px] leading-[30px] py-2">What is your name?</h2>
          <p>Let us know how to properly address you</p>
        </div>
        <div className="pt-6">
          <div className="py-1">
            <input
              className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
              type="text"
              name=""
              id=""
              placeholder="Enter First name"
              required
            />
          </div>
          <div className="py-1">
            <input
              className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
              type="text"
              name=""
              id=""
              placeholder="Enter last name"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:mt-16 mt-44">
          <div></div>
          <div className="">
            <button
              onClick={handleNavigate}
              className="px-4 py-2.5 rounded-full bg-gray-900 flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-90 text-white transition ease-in-out duration-500 ml-[56px]">
              <span>Next</span>
              <BiRightArrowAlt className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
