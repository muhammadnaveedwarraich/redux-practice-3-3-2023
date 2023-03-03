import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETENOTEACTION } from "../../Redux/Action";
const ShowNotes = () => {
  const dispatch = useDispatch();
  const reduxSatate = useSelector((state) => {
    return state.notes;
  });
  const deleteHandler = (item) => {
    console.log("Click", item);
    dispatch(DELETENOTEACTION(item));
  };
  if (reduxSatate.length === 0) {
    return (
      <div className="w-6/12 bg-violet-400 text-white mx-auto text-center mt-5 p-5">
        there is nothing
      </div>
    );
  }
  return (
    <div className="">
      <h1 className="text-center text-white">Notes List</h1>
      {reduxSatate.map((item) => (
        <div
          key={item.id}
          className="w-6/12 bg-violet-400 text-white mx-auto text-center mt-5 p-5"
        >
          <h1>{item.title}</h1>
          <h1>{item.content}</h1>
          <button
            className="px-10 py-2 bg-red-500 rounded-md mt-5"
            onClick={() => deleteHandler(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowNotes;
