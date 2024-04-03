import React from 'react';
import img from '../assets/pickupimg.jpg';
import { BsPlayFill } from 'react-icons/bs'; // Importing play icon from react-icons

function Pickup() {
  return (
    <div className="flex flex-col items-center mb-16">
      <h1 className="mt-16 mb-4 text-xl font-bold">Pick up where you left</h1>
      <div className="flex justify-center items-start">
        
        <div className="px-10 pt-6 pb-6 flex flex-row bg-white border border-gray-200 rounded-lg shadow md:max-w-4xl">
          <div className="w-1/2">
            <img
              className="object-cover w-full h-70 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={img}
              alt=""
            />
          </div>
          <div className="w-1/2 flex flex-col justify-start gap-5 p-4 leading-normal">
            <p className="font-bold text-gray-700">
              Cryptocurrency Lesson 1 of 19
            </p>
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-black">
              A Brief History of Currency
            </h5>
            <p className="mb-1 font-normal text-gray-800 dark:text-gray-700">
              Trust is the backbone of all currencies, from commodity monies to crypto.
            </p>
            <button
              className="inline-flex w-fit items-center mb-4 px-4 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300"  
            > <BsPlayFill className="ml-1 mr-2" />
              Resume Course
            </button>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-300">
              <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: "10%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pickup;
