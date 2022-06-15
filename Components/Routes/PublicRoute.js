import { useRouter } from "next/router";
import { isNil } from "ramda";
import useUsuario from "../../hooks/useUsuario";
import Loading from "../Loading";

const PublicRoute = ({ children }) => {
  const { loadingUserInfo, userInfo } = useUsuario();
  const { push } = useRouter();

  if (loadingUserInfo) {
    return <Loading isScreen />;
  }

  if (!isNil(userInfo)) {
    push("/");
    return null;
  }

  return children;
};

export default PublicRoute;
