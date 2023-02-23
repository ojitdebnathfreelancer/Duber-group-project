import React, { useState } from "react";

const SignupEmailDriveVehichleSelection = () => {
  const [vehicle, setVehicle] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [numberPlate, setNumberPlate] = useState("")

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
            <label className="text-lg font-medium pb-2 block">Make</label>
            <select
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md"
              name=""
              id=""

            >
              <option value="">Select...</option>
              <option value="3112">3112</option>
              <option value="AM General">AM General</option>
              <option value="AMO">AMO</option>
              <option value="Acura">Acura</option>
              <option value="Adam">Adam</option>
              <option value="Adris Electric">Adris Electric</option>
              <option value="Agrale">Agrale</option>
              <option value="Aion">Aion</option>
              <option value="Aiways">Aiways</option>
              <option value="Akai">Akai</option>
              <option value="Alfa Romeo">Alfa Romeo</option>
              <option value="Ampere">Ampere</option>
              <option value="Anchi">Anchi</option>
              <option value="Akai">Akai</option>
              <option value="Apache">Apache</option>
              <option value="Aprilia">Aprilia</option>
              <option value="Ashok Leyland">Ashok Leyland</option>
              <option value="Asia Hero">Asia Hero</option>
              <option value="Asia Motors">Asia Motors</option>
              <option value="Ather">Ather</option>
              <option value="Atul">Atul</option>
              <option value="Audi">Audi</option>
              <option value="Avanti">Avanti</option>
              <option value="BAIC">BAIC</option>
              <option value="BAW">BAW</option>
              <option value="BMW">BMW</option>
              <option value="BYD">BYD</option>
              <option value="BYD">Bajaj</option>
              <option value="Baojun">Baojun</option>
              <option value="Baotion">Baotion</option>
              <option value="Battre">Battre</option>
              <option value="Beeline">Beeline</option>
              <option value="Benelli">Benelli</option>
              <option value="Benling">Benling</option>
              <option value="Bennett">Bennett</option>
              <option value="Benson">Benson</option>
              <option value="Bentley">Bentley</option>
              <option value="Besturn">Besturn</option>
              <option value="Big Boy">Big Boy</option>
              <option value="Bintelli">Bintelli</option>
              <option value="Bionic">Bionic</option>
              <option value="Blue Star">Blue Star</option>
              <option value="Bolwell">Bolwell</option>
              <option value="Borgward">Borgward</option>
              <option value="Bounce">Bounce</option>
              <option value="Brilliance">Brilliance</option>
              <option value="Brixton">Brixton</option>
              <option value="Buell">Buell</option>
              <option value="Bugatti">Bugatti</option>
              <option value="Benson">Benson</option>
            </select>
          </div>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Model</label>
            <select
              onChange={(e) => setModel(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md" name="" id="">
              <option value="">Select...</option>
              <option value="Hello">Hello</option>
              <option value="gelo">Gelo</option>
            </select>
          </div>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Year</label>
            <select
              onChange={(e) => setYear(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md" name="" id="">
              <option value="">Select...</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
            </select>
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
              disabled={!(vehicle.length && model.length && year.length && numberPlate.length)}
              className={`${vehicle.length && model.length && year.length && numberPlate.length ? "bg-gray-900 hover:bg-gray-800 transition ease-in-out duration-500 text-gray-100" : "bg-gray-200 text-gray-500 cursor-not-allowed"} w-full px-4 py-3 text-center rounded-md font-medium`}
              type="submit">Continue</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignupEmailDriveVehichleSelection;
