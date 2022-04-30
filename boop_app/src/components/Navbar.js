import React from 'react';
import { Link } from "react-router-dom";
import Logo_white from '../boop-white.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 pt-3 bg-violet-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={Logo_white} alt="Boop purple logo" width="250px" height="250px"></img>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className={
                  "lg:flex flex-grow items-center" +
                  (navbarOpen ? " flex" : " hidden")}>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item"><Link to="/" className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">Home</Link></li>
              <li className="nav-item"><Link to="/doggies" className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">Doggies</Link></li>
              <li className="nav-item"><Link to="/walkers" className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">Walkers</Link></li>
              <li className="nav-item"><Link to="/contact" className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
