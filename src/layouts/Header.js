import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function Header() {
    return (
        <div className="hidden sm:block">
            <div className="grid p-4">
                <div className="grid grid-cols-4 gap-5 mt-4">
                    <div className="col-span-1 grid grid-rows-2">
                        <div className="row-span-1"><h2 className="font-bold text-gray-800 sm:text-sm md:text-base">Email</h2></div>
                        <div className="row-span-1"><h2 className="text-gray-800 sm:text-sm md:text-sm">solutionhelixit@gmail.com</h2></div>
                    </div>
                    <div className="col-span-1 grid grid-rows-2 ">
                        <div className="row-span-1"><h2 className="font-bold text-gray-800 sm:text-sm md:text-base">Mon-Sat</h2></div>
                        <div className="row-span-1"><h2 className="text-gray-800 sm:text-sm md:text-sm">09:00 A.M. to 07:30 P.M.</h2></div>
                    </div>
                    <div className="col-span-1 grid grid-rows-2 ">
                        <div className="row-span-1"><h2 className="font-bold text-gray-800 sm:text-sm md:text-base">Call us</h2></div>
                        <div className="row-span-1"><h2 className="text-gray-800 sm:text-sm md:text-sm">7296911651, 7737063697, 6375722866</h2></div>
                    </div>
                    <div className="col-span-1 text-right">
                        <h1 className="font-bold text-gray-800 sm:text-sm md:text-base d-flex flex justify-end">
                            <FaInstagram />
                            <FaFacebookF style={{"margin-left":"10px","margin-right":"10px"}}/>
                            <TfiYoutube />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header