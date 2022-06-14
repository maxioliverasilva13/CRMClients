import { useState } from "react";

const ProductImageUpload = ({ url, setFile }) => {
  const [localUrl, setLocalUrl] = useState(url);

  const onChangeImage = (e) => {
    const file = e?.target?.files[0];
    setFile(file);
    setLocalUrl(URL.createObjectURL(file));
  };

  return (
    <div className="w-full h-full object-cover overflow-hidden flex items-center justify-center">
      {localUrl ? (
        <img className="w-11/12 h-full max-w-11/12 max-h-full" src={localUrl} />
      ) : (
        <>
          <div className="flex justify-center items-center w-full h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  className="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              </div>
              <input
                accept="image/*"
                onChange={onChangeImage}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductImageUpload;
