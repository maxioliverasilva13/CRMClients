import Head from "next/head";
import { useRouter } from "next/router";
import useMensaje from "../hooks/useMensaje";
import Alert from "./Alert";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { mensaje } = useMensaje();
  const { pathname } = useRouter();
  const isLogginPath = () => {
    switch (pathname) {
      case "/login":
        return true;
      case "/signup":
        return true;
      default:
        return false;
    }
  };

  const showError = () => {
    return (
      <Alert
        additionalCondition={mensaje?.message}
        type="Alert"
        message={mensaje.message}
        errorType={mensaje.type}
      />
    );
  };

  return (
    <>
      <Head>
        <title>CRM - Administracion Cliente</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="relative">
        {isLogginPath() ? (
          <div className="bg-gray-800 min-h-screen w-full flex flex-col justify-center items-center ">
            {showError()}
            {children}
          </div>
        ) : (
          <div className="bg-gray-200 h-screen ">
            <div className="flex min-h-screen h-full">
              <Sidebar />
              <main className="flex-grow p-4 relative">
                {showError()}
                <Header />
                {children}
              </main>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
