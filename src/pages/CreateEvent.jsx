import React from "react";
import Navbar from "../components/Navbar";

const CreateEvent = () => {
  return (
    <div className="gradient-animation min-h-screen font-poppins outline-none text-white flex flex-col items-center">
      <Navbar />
      <div style={{maxWidth: '1200px'}} className="flex py-12 w-full">
        <div className="flex flex-col w-1/2 px-6">
          <input
            className="bg-white bg-opacity-20 p-4 px-2 placeholder-gray-200 text-3xl mb-4 outline-none rounded"
            placeholder="UNTITLED EVENT"
          />
          <input
            className="bg-white bg-opacity-20 placeholder-gray-200 p-2 text-xl mb-4 outline-none rounded"
            placeholder="DATE & TIME TBD"
          />
          <input
            className="bg-white bg-opacity-20 placeholder-gray-200 p-2 mb-1 outline-none rounded"
            placeholder="Place name, address, or link"
          />
          <input
            className="bg-white bg-opacity-20 placeholder-gray-200 p-2 mb-1 outline-none rounded"
            placeholder="Unlimited spots"
          />
          <input
            className="bg-white bg-opacity-20 placeholder-gray-200 p-2 mb-1 outline-none rounded"
            placeholder="Cost per person"
          />
          <input
            className="bg-white bg-opacity-20 placeholder-gray-200 p-2 mb-1 outline-none rounded"
            placeholder="Custom link or text"
          />
          <textarea
            className="bg-white bg-opacity-20 placeholder-gray-200 p-2 mb-1 outline-none rounded"
            placeholder="Description"
          />
        </div>
        <div className="w-1/2 pl-6 pr-24">
          <div style={{ aspectRatio: 1 }} className="w-full h-full bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
