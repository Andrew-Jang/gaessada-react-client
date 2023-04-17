import React from "react";

const Tags = ({ item, size }) => {
  return (
    <button
      style={{ color: "#272D37" }}
      className={`py-1 px-2 rounded-lg hover:bg-gray-200 bg-gray-100 transition hover:shadow ${
        size === "sm" ? "text-xs" : "text-sm"
      }`}
    >
      {item}
    </button>
  );
};

export default Tags;
