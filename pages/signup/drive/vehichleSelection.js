import React, { useState } from "react";

const SignupEmailDriveVehichleSelection = () => {
  const [vehicle, setVehicle] = useState("")
  const [seatPlan, setSeatPlan] = useState("")
  const [fromYouLocation, setFromYourLocation] = useState("")
  const [numberPlate, setNumberPlate] = useState("")
  const [destination, setDestination] = useState("")
  const [cost, setCost] = useState("")

  return (
    <div className="md:w-[550px] w-full mx-auto">
      <div className="shadow-lg border p-3 rounded-md">
        <div>
          <img src="https://i.ibb.co/hfhm6Jm/vehicle.png" alt="" />
        </div>
        <div>
          <h2 className="text-[24px] font-semibold">Enter your vehicle information</h2>
        </div>
        <form>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Transport</label>
            <select
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md"
              name=""
              id=""
            >
              <option value="">Select...</option>
              <option value="Bus">Bus</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
            </select>
          </div>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Seat Plan</label>
            <select
              onChange={(e) => setSeatPlan(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md" name="" id="">
              <option value="">Select...</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="10">10</option>
              <option value="14">14</option>
              <option value="48">48</option>
              <option value="50">50</option>
              <option value="52">52</option>
            </select>
          </div>

          <div className="py-4 grid grid-cols-2 gap-2">
            <div>
              <label className="text-lg font-medium pb-2 block">From</label>
              <input
                onChange={(e) => setFromYourLocation(e.target.value)}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
                type="text"
                name=""
                id=""
                placeholder="From your location"
              />
            </div>
            <div>
              <label className="text-lg font-medium pb-2 block">Destination</label>
              <input
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
                type="text"
                name=""
                id=""
                placeholder="To Destination"
              />
            </div>
          </div>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Cost</label>
            <input
              onChange={(e) => setCost(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text"
              name=""
              id=""
              placeholder="Cost"
            />
          </div>
          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Number plate</label>
            <input
              onChange={(e) => setNumberPlate(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text" />
          </div>

          <div className="mt-3">
            <button
              disabled={!(vehicle.length && seatPlan.length && fromYouLocation.length && numberPlate.length && destination.length && cost.length)}
              className={`${vehicle.length && seatPlan.length && fromYouLocation.length && numberPlate.length && destination.length && cost.length ? "bg-gray-900 hover:bg-gray-800 transition ease-in-out duration-500 text-gray-100" : "bg-gray-200 text-gray-500 cursor-not-allowed"} w-full px-4 py-3 text-center rounded-md font-medium`}
              type="submit">Continue</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignupEmailDriveVehichleSelection;
