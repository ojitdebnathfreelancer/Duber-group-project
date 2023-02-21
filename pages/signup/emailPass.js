import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const EmailPass = () => {
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  /* For password validation */
  const [checks, setChecks] = useState({
    lesThenEightCharacter: false,
    oneDigit: false,
    oneLetter: false
  })
  const [validationCheck, setValidationCheck] = useState(false)

  const handleOnFocus = () => {
    setValidationCheck(true)
  }
  const handleOnBlur = () => {
    setValidationCheck(false)
  }

  const handleOnkeyUp = (e) => {
    const { value } = e.target
    const lesThenEightCharacter = value.length >= 8
    const oneDigit = /[0-9]/.test(value)
    const oneLetter = /[A-Z]/.test(value)

    setChecks({
      lesThenEightCharacter,
      oneDigit,
      oneLetter
    })
  }


  return (
    <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center px-3 md:pt-0 pt-2">
      <div>
        <div>
          <h2 className="text-[24px] leading-[30px] py-2">Enter your mobile number</h2>
          <p>Your passwords must be at least 8 characters long, and contain at least one letter and one digit</p>
        </div>
        <div className="relative py-7">
          <input
            onKeyUp={handleOnkeyUp}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
            type={changePassword ? "password" : "text"}
            name="password"
            id=""
            placeholder="*********"
            required
          />
          {
            changePassword ? <>
              <AiFillEye
                onClick={() => {
                  setChangePassword(changeIcon);
                }}
                className="absolute right-3 top-[41px] text-lg cursor-pointer" />

            </> : <>
              <AiFillEyeInvisible
                onClick={() => {
                  setChangePassword(changeIcon);
                }}
                className="absolute right-3 top-[41px] text-lg cursor-pointer" />
            </>
          }

        </div>
        <div>
          {
            checks.lesThenEightCharacter ?
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-green-600 text-white rounded-full" />
                  Has At least 8 characters?
                </p>
              </>
              :
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-red-600 text-white rounded-full" />
                  Has At least 8 characters?
                </p>
              </>
          }
          {
            checks.oneDigit ?
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-green-600 text-white rounded-full" />
                  Has one digit?
                </p>
              </>
              :
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-red-600 text-white rounded-full" />
                  Has one digit?
                </p>
              </>
          }
          {
            checks.oneDigit ?
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-green-600 text-white rounded-full" />
                  Has one letter?
                </p>
              </>
              :
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-red-600 text-white rounded-full" />
                  Has one letter?
                </p>
              </>
          }

        </div>
        <div className="flex justify-between items-center md:mt-10 mt-24">
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
    </div >
  );
};

export default EmailPass;
