import Link from "next/link";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <h2 className="text-2xl text-gray-800 font-light">Pedidos</h2>
        <Link href="/nuevopedido">
          <a className="bg-blue-900 w-40 py-2 px-5 mt-4 text-center text-white rounded-md text-sm hover:bg-gray-800 mb-3 font-bold ">
            Nuevo Pedido
          </a>
        </Link>
      </Layout>
    </div>
  );
}
