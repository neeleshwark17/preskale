import React, { useEffect, useState } from "react";
import "../css/home.css";
import axios from "axios";
import AddModal from "../shared/AddModal";
import EditModal from "../shared/EditModal";

export default function Home() {
  const [addModel, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [responseArr, setResponseArr] = useState([]);
  const [editObj, setEditObj] = useState(null);
  const [updating, setUpdating] = useState(false);

  const toggleUpdater = () => {
    setUpdating(!updating);
  };

  const toggleAdd = () => {
    setAddModal(!addModel);
  };

  const toggleEdit = () => {
    setEditModal(!editModal);
  };

  const updateObj = (ob) => {
    setEditObj(ob);
    toggleEdit();
  };
  const handleDelete = (elem) => {
    axios
      // .post("http://localhost:4000/deleteUser", { scientificName: elem })
      .post("/deleteUser", { scientificName: elem })
      .then((response) => {
        if (!response) console.log("No reponse try again!");
        else {
          if (response.data.msg == "ok") {
            console.log("Deleted");
            setResponseArr(response.data.obj);
          } else console.log("Failed try again!");
        }
      });
  };

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
    console.log("Calling");
  }, [updating]);

  return (
    <section className="xs:p-2  xs:py-4  md:py-10 md:px-16 w-full flex flex-col items-center overflow-hidden">
      <section className="flex w-full justify-start">
        <section className="flex-1">
          <p className="xs:text-xl md:text-3xl font-semibold flex-1">
            {" "}
            Manage birds
          </p>
          <p className="xs:text-sm md:text-lg  flex-1 py-2">
            Manage all species of birds and their information
          </p>
        </section>
        <section className="self-end">
          <button className="btn flex items-center" onClick={toggleAdd}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add
          </button>
        </section>
      </section>
      <section className="flex w-full justify-start p-4 bg-palewhite my-6">
        <section className="border border-gray-300 rounded-md p-2  bg-white w-1/4">
          <section className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-4"
              viewBox="0 0 20 20"
              fill="gray"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="w-full"
              type="text"
              placeholder="Search by name..."
            />
          </section>
        </section>
        <section className=" flex-1"></section>
        <button className="flex py-2 px-2 bg-white rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <p className="text-base font-medium text-gray-500">Filter</p>
        </button>
      </section>
      {/* TABLE --------- */}
      <section className="w-full  h-full ">
        {responseArr && (
          <section className="w-full overflow-auto">
            <table className="w-full table-auto">
              <thead className="text-left text-gray-500 text-base uppercase">
                <tr>
                  <th className="xs:text-xs md:text-lg xs:px-2 md:px-0">
                    {" "}
                    Name{" "}
                  </th>
                  <th className="xs:text-xs md:text-lg xs:px-2 md:px-0">
                    {" "}
                    Spotted
                  </th>
                  <th className="xs:text-xs md:text-lg xs:px-2 md:px-0">
                    {" "}
                    Last Spotted
                  </th>
                  <th className="xs:text-xs md:text-lg xs:px-2 md:px-0">
                    CONSERVATION STATUS
                  </th>
                  <th className="xs:text-xs md:text-lg xs:px-2 md:px-0">
                    {" "}
                    SCIENTIFIC NAME
                  </th>
                </tr>
              </thead>
              <tbody>
                {responseArr.map((e, k) => (
                  <tr key={k}>
                    <td className="xs:text-xs md:text-base xs:px-2 md:px-0">
                      {e.userName}
                    </td>
                    <td className="xs:text-xs md:text-base xs:px-2 md:px-0">
                      {e.spottedAt}
                    </td>
                    <td className="xs:text-xs md:text-base xs:px-2 md:px-0">
                      {e.lastSpottedAt.split("T")[0]}
                    </td>
                    <td>
                      <button
                        className={
                          e.conservationStatus == "low"
                            ? "bg-lightGreen text-darkGreen py-1 px-2 font-semibold xs:text-xs md:text-base"
                            : "bg-lightRed text-darkRed py-1 px-2 font-semibold xs:text-xs md:text-base"
                        }
                      >
                        {e.conservationStatus == "low"
                          ? "Least Concern"
                          : "Critically endangered"}
                      </button>
                    </td>
                    <td>
                      <div className="flex justify-end  items-center ">
                        <p className="flex-1">{e.scientificName}</p>
                        <section className="xs:w-40 sm:w-48 md:w-64 lg:w-auto ">
                          <button
                            className="bg-bGray font-medium px-4 py-2 rounded-md mr-3 xs:text-xs md:text-base"
                            onClick={() => updateObj(e)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-bRed text-white font-medium px-4 py-2 rounded-md ml-3 xs:text-xs md:text-base"
                            onClick={() => handleDelete(e.scientificName)}
                          >
                            Delete
                          </button>
                        </section>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </section>
      {addModel && (
        <AddModal
          props={{
            addModel,
            toggleAdd,
            setResponseArr,
            toggleUpdater,
          }}
        />
      )}
      {editModal && (
        <EditModal
          props={{
            editModal,
            toggleEdit,
            editObj,
            toggleUpdater,
          }}
        />
      )}
    </section>
  );
}
