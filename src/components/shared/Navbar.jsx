import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../../firestore";
import * as db from "../../firestore";

function Navbar() {
  const { pathname } = useLocation();
  const isHomeRoute = pathname === "/";

  return (
    <header className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {!isHomeRoute && (
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
          )}
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg x="0px" y="0px" viewBox="0 0 553.21 553.21">
            <circle fill="#12727B" cx="276.6" cy="276.6" r="276.6"/>
            <path fill="#F79C5A" d="M312.7,494.61l5.56-4.18c-2.28-3.03-1.67-7.33,1.36-9.61c3.03-2.28,7.33-1.67,9.61,1.36l5.01-3.77
              c-2.28-3.03-1.67-7.33,1.36-9.61c3.03-2.28,7.33-1.67,9.61,1.36l5.81-4.37c-2.28-3.03-1.67-7.33,1.36-9.61s7.33-1.67,9.61,1.36
              l8.71-6.55c-9.48-12.6-6.96-30.5,5.64-39.98c12.6-9.48,30.5-6.96,39.98,5.64l9-6.78c-2.28-3.03-1.67-7.33,1.36-9.61
              c3.03-2.28,7.33-1.67,9.61,1.36l5.01-3.77c-2.28-3.03-1.67-7.33,1.36-9.61s7.33-1.67,9.61,1.36l5.81-4.37
              c-2.28-3.03-1.67-7.33,1.36-9.61s7.33-1.67,9.61,1.36l5.85-4.4L243.04,64.48l-5.85,4.4c2.28,3.03,1.67,7.33-1.36,9.61
              c-3.03,2.28-7.33,1.67-9.61-1.36l-5.81,4.37c2.28,3.03,1.67,7.33-1.36,9.61c-3.03,2.28-7.33,1.67-9.61-1.36l-5.01,3.77
              c2.28,3.03,1.67,7.33-1.36,9.61c-3.03,2.28-7.33,1.67-9.61-1.36l-9,6.78c9.48,12.6,6.96,30.5-5.64,39.98s-30.5,6.96-39.98-5.64
              l-8.71,6.55c2.28,3.03,1.67,7.33-1.36,9.61s-7.33,1.67-9.61-1.36l-5.81,4.37c2.28,3.03,1.67,7.33-1.36,9.61
              c-3.03,2.28-7.33,1.67-9.61-1.36l-5.01,3.77c2.28,3.03,1.67,7.33-1.36,9.61s-7.33,1.67-9.61-1.36l-5.56,4.18L312.7,494.61z"/>
              <rect x="159.37" y="212.03" transform="matrix(0.6014 0.799 -0.799 0.6014 334.6277 -110.4147)" fill="none" stroke="#F66950" stroke-width="6" stroke-miterlimit="10" width="237.19" height="136.21"/>
            <circle fill="#E0DA86" cx="280.18" cy="285.12" r="42.2"/>
            <polygon fill="#E74240" points="311.06,238.69 306.9,274.65 334.15,298.46 298.67,305.61 284.44,338.9 266.68,307.36 230.63,304.11 
              255.13,277.47 247.08,242.18 279.99,257.26 	"/>
          </svg>
          <span className="ml-3 text-xl xl:block lg:hidden primary-font__header">mymovieclub<span className="secondary-font__header">.co.uk</span></span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button onClick={db.logOut} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
