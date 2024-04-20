import React, { useState } from 'react';
import companylogo from './Designer.png';
import revry from './image.png';
import { Link } from "react-router-dom";

const SignUpForm = () => {
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // Function to handle form submission
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Sign Up clicked!");
    };

    return (
        <div className="bg-gray-100 flex justify-center ">
            <main className="flex items-center w-full ">
                <div className=" flex justify-start w-1/2  ">
                    <img src={companylogo} alt="description" width={800} />
                </div>
                <div className="bg-white flex flex-col items-center justify-center w-full lg:w-1/2 h-screen py-36 ">
                    <img src={revry} alt="description" width={600} />
                    <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
                    <h3 className='text-xl font-semibold text-emerald-700 pt-5'>Create Account!</h3>

                    <form onSubmit={handleSignUp} className='flex flex-col items-center justify-center mt-2'>
                        <input
                            type="text"
                            className='block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300'
                            placeholder='Name'
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                            required
                        />
                        <input
                            type='email'
                            className='block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300'
                            placeholder='Email'
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className='block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300'
                            placeholder='Password'
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className='rounded-2xl m-4 text-cyan-50 bg-sky-500 w-3/5 px-4 py-1 shadow-md hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                            Sign Up
                        </button>
                    </form>
                    <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
                    <p className='text-violet-300 mt-4 text-sm'>Already have an account?</p>
                    <p className='text-purple-300 mb-4 text-sm font-medium cursor-pointer'>
                        <Link to="/login">Sign In to your Account?</Link> {/* Corrected Link */}
                    </p>
                </div>
            </main>
        </div>
    );
};

export default SignUpForm;
