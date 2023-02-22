import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


const EmailPhone = () => {

  return (
    <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center px-3 md:pt-0 pt-2">
      <div>
        <h2 className="text-[24px] leading-[30px] py-2">Enter your mobile number</h2>
        <div className="flex items-center gap-2">
          <div className="py-6">
            <PhoneInput
              country='bd'
              regions={'asia'}
              placeholder="Mobile Number"
              inputClass="h-20"
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true
              }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center md:mt-8 mt-72">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 transition ease-in-out duration-500 ">
            <BiLeftArrowAlt className="text-3xl" />
          </div>
          <div className="w-[100px] h-12 px-4 rounded-full bg-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-90 text-white transition ease-in-out duration-500">
            <button className="flex items-center justify-center gap-2">
              <span>Next</span>
              <BiRightArrowAlt className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPhone;
