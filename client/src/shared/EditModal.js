import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EditModal({ props }) {
  const [errors, setErrors] = useState(null);

  const toggleErrors = (msg) => {
    setErrors(msg);

    setTimeout(() => {
      setErrors("");
    }, 5000);
  };

  const handleSubmits = (e) => {
    e.preventDefault();

    let reqObj = {
      userName: document.getElementById("userName").value,
      family: document.getElementById("family").value,
      conservationStatus: document.getElementById("conservation").value,
      spottedAt: document.getElementById("spottedAt").value,
      lastSpottedAt: document.getElementById("lastSpottedAt").value,
      oldScientificName: props.editObj.scientificName,
    };
    // axios.post("http://localhost:4000/updateUser", reqObj).then((response) => {
    axios.post("/updateUser", reqObj).then((response) => {
      if (!response) toggleErrors("No reponse try again!");
      else {
        if (response.data.msg == "ok") {
          console.log("Edited");
          props.toggleEdit();
          props.toggleUpdater();
        } else toggleErrors(response.data.msg);
      }
    });
  };

  useEffect(() => {
    document.getElementById("userName").value = props.editObj.userName;
    document.getElementById("conservation").value =
      props.editObj.conservationStatus;
    document.getElementById("spottedAt").value = props.editObj.spottedAt;
    document.getElementById("lastSpottedAt").value = props.editObj.spottedAt;
  }, []);
  return (
    <section
      className="centered flex justify-center items-center bg-red-300 glassed"
      onClick={props.toggleEdit}
    >
      <section
        className="xs:w-full md:w-4/5 lg:w-3/5 p-6 bg-white rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmits} className="w-full">
          <p className="p-3 text-2xl text-left">Edit</p>
          <section className="grid grid-cols-2 justify-items-center gap-8">
            <div className="w-full ">
              <label className="">Common Name</label>
              <input
                required
                type="text"
                placeholder=""
                className="border border-gray-300 py-2 w-full rounded-md focus:outline-none"
                id="userName"
              />
            </div>
            <div className="w-full">
              <label className="">Family</label>
              <select
                className="border border-gray-300 py-2 w-full rounded-md focus:outline-none"
                id="family"
              >
                <option value={"bulbul"}> bulbul</option>
                <option value={"sunbird"}> sunbird</option>
                <option value={"treepie"}> treepie</option>
              </select>
            </div>
            <div className="w-full">
              <label className=" ">Conservation Status</label>
              <select
                className="border border-gray-300 py-2 w-full rounded-md focus:outline-none"
                id="conservation"
              >
                <option value={"low"}> Least Concern</option>
                <option value={"high"}> Critically endangered</option>
              </select>
            </div>
            <div className="w-full">
              <label className="">Spotted At</label>
              <input
                required
                type="text"
                id="spottedAt"
                placeholder=""
                className="border border-gray-300 py-2 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label className="">Last spotted Date</label>
              <input
                required
                id="lastSpottedAt"
                type="date"
                placeholder=""
                className="border border-gray-300 py-2 w-full rounded-md focus:outline-none"
              />
            </div>
          </section>
          <button
            type="submit"
            onSubmit={onsubmit}
            className="w-full bg-navGreen text-white text-base py-2 mt-6 rounded-sm"
          >
            Update
          </button>
        </form>
        <p className="text-red-500 p-4">{errors && errors}</p>
      </section>
    </section>
  );
}
