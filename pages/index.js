import Layout from "../Components/Layout";
import useClientes from "../hooks/useClientes";
import Loading from "../Components/Loading";

export default function Home() {
  const { clientes, loadingClientes } = useClientes();
  const vendedores = clientes?.getClientesVendedor;

  console.log(clientes);

  return (
    <div>
      <Layout>
        {
          loadingClientes ? <Loading /> : (
            <>
            <h2 className="text-2xl text-gray-800 font-light">Clientes</h2>

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
