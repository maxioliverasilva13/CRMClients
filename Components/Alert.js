import clsx from "clsx";

const Alert = ({ type, message, errorType, additionalCondition }) => {
  if (type === "Alert" && additionalCondition) {
    return (
      <div className="flex items-center justify-center animatedMessage absolute top-10 m-0 p-0 w-auto left-0 right-0">
        <div
          className={clsx(
            " text-white py-2 px-3 my-3 z-40 w-auto  rounded flex shadow-lg items-start",
            errorType === "Error" ? "bg-red-400" : "bg-green-400"
          )}
        >
          <p>{message}</p>
        </div>
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
