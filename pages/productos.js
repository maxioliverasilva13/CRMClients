import Link from "next/link";
import Layout from "../Components/Layout";
import Loading from "../Components/Loading";
import Producto from "../Components/Producto";
import useProductos from "../hooks/useProductos";

export default function Home() {
  const { productos, loadingProductos } = useProductos();

  return (
    <div>
      <Layout>
        <h2 className="text-2xl text-gray-800 font-light">Productos</h2>
        <Link href="/nuevoproducto">
          <a className="bg-blue-900 py-2 px-5 mt-4 inline-block text-white rounded-md text-sm hover:bg-gray-800 mb-3 font-bold ">
            Nuevo Producto
          </a>
        </Link>
        {loadingProductos ? (
          <Loading />
        ) : (
          <div className="w-full h-auto p-4 shadow-md mt-4 bg-gray-100 rounded-md flex flex-row flex-wrap items-center justify-start ">
            {/*  One item  */}
            {productos?.obtenerProductos?.map((producto) => (
              <Producto producto={producto} />
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
}
