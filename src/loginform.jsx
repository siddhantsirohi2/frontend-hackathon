import React, { useState } from 'react';
import companylogo from './Designer.png';
import revry from './image.png';
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login clicked!");
    };

    return (
        <div className="bg-gray-100 flex justify-center ">
            <main className="flex items-center w-full ">
                <div className=" flex justify-start w-1/2  ">
                    <img src={companylogo} alt="description" width={800} />
                </div>
                <div className="bg-white flex flex-col items-center justify-center w-full lg:w-1/2 h-screen py-36">
                    <img src={revry} alt="description" width={600} />
                    <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
                    <h3 className='text-xl font-semibold text-cyan-700 font-serif pt-2'>Sign In!</h3>
                    {/* Form */}
                    <form onSubmit={handleLogin} className='flex flex-col items-center justify-center'>
                        <input
                            type='email'
                            className='block text-lg font-medium mt-1 p-2 border box-border w-full rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300'
                            placeholder='Email'
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className='block text-lg font-medium mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-gray-300 transition-colors duration-300'
                            placeholder='Password'
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className='rounded-2xl m-2 w-full text-white px-4 py-2 shadow-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                            Sign In
                        </button>
                    </form>
                    <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
                    <p className='text-blue-950 mt-4 text-sm'>Don't have an account?</p>
                    <p className='text-sky-700 mb-4 text-sm font-medium cursor-pointer'>
                        <Link to="/signup">Create a New Account?</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default LoginForm;
