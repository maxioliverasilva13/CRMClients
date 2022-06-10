import React from "react";
import Layout from "../Components/Layout";

const SignUp = () => {
  return (
    <Layout>
      <h1 className="text-center text-2xl text-white">Sign Up</h1>

      <div className="w-full flex justify-center mt-5">
        <div className="w-4/5 sm:w-96 max-w-full" >
            <form className="w-full bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 " >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                      name="nombre"
                      placeholder="Nombre"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                      Apellido
                    </label>
                    <input
                      id="apellido"
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                      name="apellido"
                      placeholder="Apellido"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                      name="email"
                      placeholder="Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none"
                      name="password"
                      placeholder="Password"
                    />
                </div>
                <input 
                  type="submit"
                  className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 hover:scale-105 transition cursor-pointer rounded"
                  value="Registrate"
                />
            </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
