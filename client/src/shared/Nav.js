import React, { useState } from "react";
import RateModal from "./RateModal";
import SideNav from "./SideNav";

export default function Nav() {
  const [ratingModal, setRatingModal] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  const toggleRating = () => {
    setRatingModal(!ratingModal);
  };

  const toggleSideNav = () => {
    setSideNav(!sideNav);
    // if (sideNav == 0) setSideNav(0);
    // else setSideNav(64);
  };

  return (
    <section className="bg-navGreen w-full py-6 px-2 flex justify-start items-center">
      {sideNav && <SideNav props={{ sideNav, toggleSideNav }} />}
      {ratingModal && <RateModal props={{ toggleRating }} />}

      <section className="cursor-pointer" onClick={toggleSideNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-12"
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
      <p
        className="text-3xl font-bold mx-5 text-white flex-1 cursor-pointer"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Bird App
      </p>
      <p
        className="text-lg mx-5 text-white cursor-pointer"
        onClick={toggleRating}
      >
        Rate us
      </p>
    </section>
  );
}
