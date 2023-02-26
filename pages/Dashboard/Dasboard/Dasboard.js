
import { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { DiProlog } from "react-icons/di";
import { FaOpencart } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { RxAvatar } from "react-icons/rx";
import { SiInstructables } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import { TbDoorExit } from "react-icons/tb";


const Dashboard = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 mx-auto ">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-slate-200 h-screen p-5  pt-8 relative duration-300`}
            >
                <TbDoorExit
                    className={`absolute cursor-pointer -right-3 top-9  w-6 h-6 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                ></TbDoorExit>
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
                <ul className="mt-8">

                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <FaOpencart className=" w-5 h-5"></FaOpencart>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Cart
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <DiProlog className=" w-5 h-5"></DiProlog>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Add Product
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <VscGitPullRequestCreate className=" w-5 h-5"></VscGitPullRequestCreate>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Company Req
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RxAvatar className=" w-5 h-5"></RxAvatar>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Passenger
                        </span>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <SiInstructables className=" w-5 h-5"></SiInstructables>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Company
                        </span>
                    </li>

                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <IoLogOutOutline className=" w-5 h-5"></IoLogOutOutline>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className=" h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Content</h1>
            </div>
        </div>
    );
};
export default Dashboard;