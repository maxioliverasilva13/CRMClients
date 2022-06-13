import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import useUsuario from "../hooks/useUsuario";

const Header = () => {
  const { push } = useRouter();
  const { userInfo, loadingUserInfo, clearToken } = useUsuario();

  if (loadingUserInfo) return null;

  const loggout = () => {
    clearToken();
    push("/login");
  };

  return (
    <div className="flex justify-between">
      <p className="mr-6 text-xl">
        Hola {userInfo?.nombre} {userInfo?.apellido}
      </p>
      <button
        onClick={loggout}
        className="flex items-center bg-blue-900 w-full sm:w-auto font-bold text-xs text-white rounded py-2 px-2 shadow-md"
      >
        <FiLogOut size={24} className="mr-2 text-white" /> Logout
      </button>
    </div>
  );
};

export default Header;
