import React, { useState } from "react";
import RateModal from "./RateModal";
import { Link } from "react-router-dom";

export default function Nav() {
  const [ratingModal, setRatingModal] = useState(false);

  const toggleRating = () => {
    setRatingModal(!ratingModal);
  };
  return (
    <section className="bg-navGreen w-full py-6 px-2 flex justify-start items-center">
      {ratingModal && <RateModal props={{ toggleRating }} />}

      <section className="">
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
        className="text-4xl font-bold mx-5 text-white flex-1 cursor-pointer"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Bird App
      </p>
      <Link className="text-lg mx-5 text-white cursor-pointer" to="/gallery">
        Gallery
      </Link>
      <p
        className="text-lg mx-5 text-white cursor-pointer"
        onClick={toggleRating}
      >
        Rate us
      </p>
    </section>
  );
}
