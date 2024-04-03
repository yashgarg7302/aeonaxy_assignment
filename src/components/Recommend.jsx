import React from 'react'
import image from '../assets/recommend.jpg';
function Recommend() {
  return (
    <>
    <h1 className="mt-16 mb-4 text-xl font-bold">Recommeded for you</h1>
    <div className="flex flex-wrap justify-center">
    
    <div className="grid gap-4 grid-cols-4 w-full md:w-3/4 mb-4">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
  <img className="p-3 rounded-t-lg" src={image} alt="" />
  <div className="p-5">
    <p className="mb-2 text-md font-normal tracking-tight text-gray-600">Pre-Algebra Lesson 1 of 28</p>
    <h5 className="mb-3 font-bold text-gray-900">Understanding Variables</h5>
  </div>
</div>
</div>
    </div></>
    
        
    
  )
}

export default Recommend