import Link from "next/link";
import React, { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { BsGlobe2 } from "react-icons/bs";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <li className="mr-5 flex items-center">
        <Link
          className="hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150"
          href="/about"
        >
          Company
        </Link>
      </li>
      <li className="mr-5 flex items-center">
        <Link
          className="hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150"
          href="/"
        >
          Sefty
        </Link>
      </li>
      <li className="mr-5 flex items-center">
        <Link
          className="hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150"
          href="/"
        >
          Help
        </Link>
      </li>
    </>
  );

  return (
    <div className={`${styles.mainNav}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 text-white h-[70px]">
        <div className="flex items-center">
          <div className="text-[24px] font-semibold mr-6">
            <Link href="/">Duber</Link>
          </div>
          <ul className="lg:flex hidden items-center text-[16px]">
            {menuItems}
          </ul>
        </div>
        <div className="flex items-center">
          <button className="lg:mr-5 mr-4 text-[16px] lg:flex items-center hidden hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
            <BsGlobe2 className="mr-2" size={15} />
            EN
          </button>
          <button className="lg:mr-5 mr-4 text-[16px] lg:block hidden hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
            Products
          </button>
          <button className="lg:mr-5 mr-2 text-[16px] hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
            Login
          </button>
          <button className="lg:mr-5 mr-4 bg-white text-black rounded-2xl lg:px-3 px-2 py-1 font-semibold duration-150">
            Sign Up
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-[#333333] p-2 rounded-[50%] duration-150 text-white font-bold lg:hidden block"
          >
            {open ? (
              <RxCross2
                className="text-white font-bold lg:hidden block"
                size={25}
              />
            ) : (
              <HiBars2
                className="text-white font-bold lg:hidden block"
                size={25}
              />
            )}
          </button>
        </div>
        <div
          className={` ${styles.phoneNav} ${open ? styles.phoneDisplay : ""}`}
        >
          <ul>{menuItems}</ul>
          <button className="lg:mr-5 mr-4 text-[16px] w-full bg-[#EEEEEE] px-4 py-2 rounded-[5px] mt-20 duration-150">
            Products
          </button>

          <button className="lg:mr-5 mr-4 mt-5 text-[16px] flex items-center hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
            <BsGlobe2 className="mr-2" size={15} />
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
