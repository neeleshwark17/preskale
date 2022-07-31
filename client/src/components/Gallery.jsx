import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Gallery() {
  const [responseArr, setResponseArr] = useState([]);

  function updater() {
    // axios.get("http://localhost:4000/getUsers").then((response) => {
    axios.get("/getUsers").then((response) => {
      if (!response) console.log("No reponse try again!");
      else {
        if (response.data.msg == "ok") {
          setResponseArr(response.data.obj);
        } else console.log("Failed try again!");
      }
    });
  }
  useEffect(() => {
    updater();
  }, []);

  return (
    <section className="xs:p-6 md:p-14">
      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 xs:gap-x-6 md:gap-x-12 gap-y-4">
        {responseArr &&
          responseArr.map((e, k) => (
            <div key={k}>
              <Card props={{ e }} />
            </div>
          ))}
      </section>
    </section>
  );
}
