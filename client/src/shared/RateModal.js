import React, { useState } from "react";

export default function RateModal({ props }) {
  const [selected, setSelected] = useState("");

  return (
    <section
      className="centered flex justify-center items-center bg-red-300 glassed"
      onClick={props.toggleRating}
    >
      <section
        className="xs:w-full md:w-4/5 lg:w-2/5 p-6 bg-white rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="flex flex-col items-center">
          <p className="p-3 xs:text-xl md:text-2xl text-left">
            How do you like the Bird App?
          </p>
          <input
            type="text"
            id="ratings"
            placeholder="Your feedback.."
            className="w-full xs:h-32 md:h-44 bg-gray-100 p-4 text-left"
          />
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((e, k) => (
              <div
                key={k}
                onClick={() => setSelected(e)}
                className={`${
                  selected == e
                    ? "bg-navGreen text-white"
                    : "bg-gray-200 text-gray-500"
                } w-16 h-16 flex justify-center items-center my-4 mx-6 cursor-pointer font-bold `}
                style={{ borderRadius: "50%" }}
              >
                {e}
              </div>
            ))}
          </div>
          <button
            onClick={() => props.toggleRating()}
            className="w-full bg-navGreen text-white text-base py-2 mt-6 rounded-sm"
          >
            Submit
          </button>
        </section>
      </section>
    </section>
  );
}
