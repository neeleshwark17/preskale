import React from "react";
import { Link } from "react-router-dom";

export default function SideNav({ props }) {
  console.log(props.sideNav);
  return (
    <section
      className="glassed h-100v w-100w sideNav left-0 top-0"
      onClick={props.toggleSideNav}
    >
      <section
        className={`${
          props.sideNav ? "widTrans" : ""
        } h-100v bg-white sideNavOpt`}
        onClick={(e) => e.stopPropagation()}
      >
        {
          <section className="sOptions">
            <section className="bg-navGreen p-6 flex  items-center justify-evenly">
              <p className="text-xl text-white font-semibold">Bird App</p>
              <section
                className="cursor-pointer "
                onClick={props.toggleSideNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </section>
            </section>
            <Link to="/">
              <p className="text-lg p-3 cursor-pointer bg-gray-200 my-1">
                Home
              </p>
            </Link>
            <Link to="/gallery">
              <p className="text-lg p-3 cursor-pointer bg-gray-200">Gallery</p>
            </Link>
          </section>
        }
      </section>
    </section>
  );
}
