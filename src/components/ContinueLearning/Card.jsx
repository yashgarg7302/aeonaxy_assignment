import React from 'react';

function Card({ image, title, description, progressWidth }) {
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
      <img className="p-4 rounded-t-lg h-40 object-cover w-full" src={image} alt="" />
      <div className="p-5">
        <p className="mb-2 text-md font-normal tracking-tight text-gray-600 ">{title}</p>
        <h6 className="mb-3 mr-10 font-bold text-gray-900 ">{description}</h6>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: progressWidth }}></div>
        </div>
      </div>
    </div>
  );
}

export default Card;