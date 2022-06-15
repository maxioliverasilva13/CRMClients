import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { pathname } = useRouter();
  const activeClassName = (path) =>
    pathname === path ? "bg-blue-900 rounded-md p-2" : "p-2";

  return (
    <aside className="bg-gray-800 w-1/3 sm:w-1/3 xl:w-1/5 p-4 h-full">
      <nav className="mt-5 list-none ">
        <li className={activeClassName("/")}>
          <Link href="/">
            <a className="text-white block text-xl">Clientes</a>
          </Link>
        </li>
        <li className={activeClassName("/pedidos")}>
          <Link href="/pedidos">
            <a className="text-white block text-xl">Pedidos</a>
          </Link>
        </li>
        <li className={activeClassName("/productos")}>
          <Link href="/productos">
            <a className="text-white block text-xl">Productos</a>
          </Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
