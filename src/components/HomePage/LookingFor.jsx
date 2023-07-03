'use client'

import { FaArrowRight, FaBriefcaseMedical, FaFlask, FaUserCircle } from "react-icons/fa";

const LookingFor = () => {
    return (
        <div>
            <div>
                <h1 className="text-blue-700 text-center underline underline-offset-4 font-bold text-4xl my-5">What Are you Looking For?</h1>
            </div>
            <div className='md:flex md:justify-center mb-5'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className="card md:rounded-none hover:-translate-y-2 w-[100%] bg-blue-500 hover:bg-base-100 duration-300 text-white hover:text-black  ">
                        <div className="card-body">
                            <h2 className="card-title"><FaUserCircle className="text-3xl" /> Visit a Doctor</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="link w-28 no-underline flex items-center hover:gap-4 font-semibold duration-200 hover:duration-300  gap-2">Book Now <FaArrowRight className="mt-1"></FaArrowRight></button>
                            </div>
                        </div>
                    </div>
                    <div className="card  md:rounded-none hover:-translate-y-2 w-[100%]  bg-blue-500 hover:bg-base-100 duration-300 text-white hover:text-black  ">
                        <div className="card-body">
                            <h2 className="card-title"><FaBriefcaseMedical className="text-3xl"></FaBriefcaseMedical> Find a Pharmacy</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="link w-16  no-underline flex items-center hover:gap-4 font-semibold duration-200 hover:duration-300 gap-2">Find <FaArrowRight className="mt-0.5"></FaArrowRight></button>
                            </div>
                        </div>
                    </div>
                    <div className="card  md:rounded-none hover:-translate-y-2 w-[100%] bg-blue-500 hover:bg-base-100 duration-300 text-white hover:text-black  ">
                        <div className="card-body">
                            <h2 className="card-title"><FaFlask className="text-3xl"></FaFlask> Find a Lab</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className=' link w-16  no-underline flex items-center hover:gap-4 font-semibold duration-200 hover:duration-300 gap-2'><span className="">Find</span> <FaArrowRight className="mt-0.5 "></FaArrowRight></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookingFor;