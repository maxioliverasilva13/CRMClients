import Layout from "../Components/Layout";
import useClientes from "../hooks/useClientes";
import Loading from "../Components/Loading";
import Link from "next/link";

export default function Home() {
  const { clientes, loadingClientes } = useClientes();
  const vendedores = clientes?.getClientesVendedor;


  return (
    <div>
      <Layout>
        {
          loadingClientes ? <Loading /> : (
            <>
            <h2 className="text-2xl text-gray-800 font-light">Clientes</h2>

            <Link href="/nuevocliente">
              <a className="bg-blue-900 py-2 px-5 mt-4 inline-block text-white rounded-md text-sm hover:bg-gray-800 mb-3 font-bold ">Nuevo Cliente</a>
            </Link>

            <table className="table-auto shadow-md mt-10 w-full w-lg">
              <thead className="bg-gray-800" >
                <tr className="text-white">
                  <th className="w-1/5 py-2" >Nombre</th>
                  <th className="w-1/5 py-2" >Empresa</th>
                  <th className="w-1/5 py-2" >Email</th>
                </tr>
              </thead>
              <tbody className="bg-white" >
              {
                vendedores?.map((cliente) => (
                  <tr className="p-2" key={cliente?.id}>
                    <td className="border px-4 py-2">{cliente?.nombre} {cliente?.apellido}</td>
                    <td className="border px-4 py-2">{cliente?.empresa}</td>
                    <td className="border px-4 py-2">{cliente?.email}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
            </>
          
          )
        }
        
      </Layout>
    </div>
  )
}
