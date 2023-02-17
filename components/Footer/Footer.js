import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black relative py-24 text-white">
        <div className="lg:max-w-7xl mx-auto gap-4">
          <div className="lg:flex justify-between ">
            <div>
              <h1 className="text-[24px] font-semibold mr-6 mb-6">Uber</h1>
              <h1>Visit Help Center.</h1>
            </div>
            <div>
              <h1>Bangladesh Ridesharing Releted Information.</h1>
            </div>
          </div>
        </div>
        <div className=" lg:max-w-7xl mx-auto flex justify-between mt-16">
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Company</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href='/'>About us</Link>
              <Link href='/'>Our offerings</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>AI</Link>
              <Link href='/'>Investor</Link>
              <Link href='/'>Newsroom</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Products</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href="#">Ride</Link>
              <Link href="#">Drive</Link>
              <Link href="#">Deliver</Link>
              <Link href="#">Eat</Link>
              <Link href="#">Uber for Business</Link>
              <Link href="#">Uber Freight</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Global citizenship</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href="#">Safety</Link>
              <Link href="#">Sustainability</Link>
              <Link href="#">Diversity and Inclusion</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Travel</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href="#">Airports</Link>
              <Link href="#">Cities</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Footer;
