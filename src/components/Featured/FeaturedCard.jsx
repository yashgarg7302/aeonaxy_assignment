import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark }  from "@fortawesome/free-solid-svg-icons";
function FeaturedCard({ image, numCourses, title, description, link }) {
    return (
      <div className="flex mb-16 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ">
        <img className="ml-4 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 font-normal text-gray-700 ">{numCourses} Courses</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 ">{description}</p>
          <button type="button" class="w-fit text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
          <FontAwesomeIcon icon={faBookmark} className="mr-1"/>
            In Progress</button>
        </div>
      </div>
    );
  }

export default FeaturedCard