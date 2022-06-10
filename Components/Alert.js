import React from "react";
import clsx from "clsx";

const Alert = ({ type, message, errorType, additionalCondition }) => {
  if (type === "Alert" && additionalCondition) {
    return (
      <div
        className={clsx(
          "animatedMessage text-white py-2 px-3 my-3 absolute w-auto top-10 rounded flex shadow-sm items-start",
          errorType === "Error" ? "bg-red-400" : "bg-green-400"
        )}
      >
        <p>{message}</p>
      </div>
    );
  }
  if (type === "BoxError" && additionalCondition) {
    return (
      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 ">
        <p className="font-bold">Error</p>
        <p>{message}</p>
      </div>
    );
  }
  return null;
};

export default Alert;
