import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
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
      {isLogginPath() ? (
         <div className="bg-gray-800 min-h-screen w-full flex flex-col justify-center items-center ">
          {children}
         </div>
      ) : (
          <div className="bg-gray-200 h-screen ">
            <div className="flex min-h-screen h-full">
              <Sidebar />
              <main className="flex-grow p-4">
                <Header />
                {children}
              </main>
            </div>
          </div>
      )}
    </>
  );
};

export default Layout;
