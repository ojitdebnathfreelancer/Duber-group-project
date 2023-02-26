import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";


const Dashboard = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-56" : "w-20 "
                    } bg-slate-200 h-screen p-5  pt-8 relative duration-300`}
            >
                <IoIosArrowBack
                    className={`absolute cursor-pointer -right-3 top-9  w-10 h-8 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                ></IoIosArrowBack>
                <div className="flex gap-x-4 items-center">

                    <MdDashboardCustomize
                        className={`cursor-pointer duration-500 w-6 h-6 ${open && "rotate-[360deg]"
                            }`}
                    ></MdDashboardCustomize>
                    <h1
                        className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Duber
                    </h1>
                </div>
                <ul className="pt-6 grid gap-x-4">

                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RiDashboardLine className=" w-5 h-5"></RiDashboardLine>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>

                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RiDashboardLine className=" w-5 h-5"></RiDashboardLine>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RiDashboardLine className=" w-5 h-5"></RiDashboardLine>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RiDashboardLine className=" w-5 h-5"></RiDashboardLine>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RiDashboardLine className=" w-5 h-5"></RiDashboardLine>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RiDashboardLine className=" w-5 h-5"></RiDashboardLine>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RiDashboardLine className=" w-5 h-5"></RiDashboardLine>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Content</h1>
            </div>
        </div>
    );
};
export default Dashboard;