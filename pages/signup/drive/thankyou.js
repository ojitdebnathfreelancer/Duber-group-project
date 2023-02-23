import React from "react";
import { TiTick } from "react-icons/ti";

const SignupEMailDriveThankyou = () => {
  return (
    <div className="md:w-[550px] w-full mx-auto md:h-[90vh] h-auto p-3 flex justify-center items-center">
      <div className="">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <TiTick className="text-7xl text-green-600 font-[300]" />
          </div>
          <h2 className="text-[24px] font-semibold">Thanks for your information</h2>
        </div>
        <div className="lg:mt-[300px] md:mt-[200px] mt-[180px]">
          <button className="w-full px-4 py-3 text-center rounded-md font-medium transition ease-in-out duration-500 bg-gray-200 hover:bg-gray-300 hover:bg-opacity-75 mb-4">Go to account status</button>
          <button className="w-full px-4 py-3 text-center rounded-md font-medium transition ease-in-out duration-500 bg-gray-900 hover:bg-gray-700 text-white">Go to next button</button>
        </div>
      </div>
    </div>
  );
};

export default SignupEMailDriveThankyou;
