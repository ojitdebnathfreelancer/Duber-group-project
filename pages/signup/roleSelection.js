
import { Role } from "@/redux/slies/signupSlice";
import { useRouter } from "next/router";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";

const roleSelection = () => {
    const dispatch = useDispatch();
    const router = useRouter()

    const handlePreview = (e) => {
        e.preventDefault()
        router.push("/signup/emailPhone")
    }

    const handleNavigate = (e) => {
        e.preventDefault()
        router.push("/signup/emailPass")
    }


    return (
        <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center px-3 md:pt-0 pt-2">
            <div className="w-full">
                <h2 className="text-[24px] leading-[30px] py-2">Select your role</h2>
                <div className="">
                    <div className="py-6">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2 items-center">
                                <input onClick={(e) => dispatch(Role(e.target.value))} type="radio" name="role" value="company" />
                                <label>Company</label>
                            </div>

                            <div className="flex gap-2 items-center">
                                <input onClick={(e) => dispatch(Role(e.target.value))} type="radio" name="role" value="passenger" />
                                <label>Passenger</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center md:mt-8 mt-72">
                    <div
                        onClick={handlePreview}
                        className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 transition ease-in-out duration-500 ">
                        <BiLeftArrowAlt className="text-3xl" />
                    </div>
                    <div className="">
                        <button
                            onClick={handleNavigate}
                            className="px-4 py-2.5 rounded-full bg-gray-900 flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-90 text-white transition ease-in-out duration-500 ">
                            <span>Next</span>
                            <BiRightArrowAlt className="text-3xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default roleSelection;