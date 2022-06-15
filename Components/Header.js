import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import useUsuario from "../hooks/useUsuario";

const Header = () => {
  const { push } = useRouter();
  const [openInfo, setOpenInfo] = useState(false);
  const { userInfo, loadingUserInfo, clearToken, clearClient } = useUsuario();

  if (loadingUserInfo) return null;

  const loggout = () => {
    clearToken();
    push("/login");
  };

  const handleChangeModal = () => {
    setOpenInfo(!openInfo);
  };

  return (
    <div className="flex justify-between w-full bg-gray-900 p-4">
      <div className="w-auto flex flex-row items-center justify-start text-white text-2xl">
        TuGest
        <p className=" mx-2 bg-blue-900 shadow-sm p-2 rounded-md">Clientes</p>
      </div>
      <div
        onClick={handleChangeModal}
        className="flex flex-row items-center justify-end cursor-pointer relative"
      >
        {userInfo?.profile_photo && (
          <img
            src={userInfo?.profile_photo}
            className="w-12 h-12 object-cover rounded-full shadow-md"
          />
        )}
        <p className="text-white mx-2 font-light">
          {userInfo?.nombre} {userInfo?.apellido}
        </p>
        <div className="relative ">
          <AiFillCaretDown
            onClick={handleChangeModal}
            size={20}
            className={clsx(
              "font-bold text-white transition-all duration-300",
              openInfo && "rotate-180"
            )}
          />
        </div>
        {openInfo && (
          <div className="w-64 p-2 settingsModal border border-gray-300 rounded-md h-20 bg-white shadow-sm absolute mt-auto top-full right-0 flex flex-col items-start">
            <p className="text-light">Settings</p>
            <button
              onClick={loggout}
              className="flex items-center cursor-pointer z-50 w-full sm:w-auto font-bold text-xs text-gray-700 py-2 "
            >
              <FiLogOut size={24} className="mr-2 text-gray-700" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

/* 

<div className="flex flex-row items-center justify-start">
        {userInfo?.profile_photo && (
          <img
            src={userInfo?.profile_photo}
            className="w-12 h-12 object-cover rounded-full shadow-md"
          />
        )}
      </div>
      <button
        onClick={loggout}
        className="flex items-center bg-blue-900 w-full sm:w-auto font-bold text-xs text-white rounded py-2 px-2 shadow-md"
      >
        <FiLogOut size={24} className="mr-2 text-white" /> Logout
      </button>

*/
