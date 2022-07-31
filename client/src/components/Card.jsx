import React from "react";

export default function Card({ props }) {
  console.log(props.e);
  return (
    <section className="flex justify-between shadow-lg">
      <img src="bird.PNG" className="object-fill" />
      <section className="flex flex-col p-3">
        <p className="xs:text-sm md:text-base font-bold">Common name </p>
        <p className="xs:text-sm md:text-md">{props.e.userName}</p>
        <p className="xs:text-sm md:text-base font-bold">
          Last seen :{props.e.lastSpottedAt.split("T")[0]}
        </p>
        <p className="xs:text-sm md:text-md">Location :{props.e.spottedAt}</p>
        <p className="xs:text-sm md:text-md">
          Date :{props.e.lastSpottedAt.split("T")[0]}
        </p>
      </section>
    </section>
  );
}
