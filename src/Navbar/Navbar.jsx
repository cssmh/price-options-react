import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
  const [on, setOn] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
    // Add more routes as needed.
  ];

  return (
    <div className="flex justify-between bg-yellow-400 py-3 px-4">
      <div>
        <nav>
          <div className="md:hidden text-3xl" onClick={() => setOn(!on)}>
            {on === true ? (
              <AiOutlineClose></AiOutlineClose>
            ) : (
              <RiMenu2Line></RiMenu2Line>
            )}
          </div>
          <ul
            className={`md:flex absolute duration-1000 md:static bg-yellow-400 pl-2 
      ${on ? "top-11" : "-top-60"}`}
          >
            {routes.map((route) => (
              <Link key={route.id} getLink={route}></Link>
            ))}
          </ul>
        </nav>
      </div>
      <h3 className="text-xl">Gym Town</h3>
    </div>
  );
};

export default Navbar;
