import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDNOTEACTION } from "../../Redux/Action";
const AddNotes = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const AddNotesHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const NoteSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(ADDNOTEACTION(data));
    setData({
      title: "",
      content: "",
    });
  };
  return (
    <div className="w-full p-4 bg-violet-700">
      <h1 className="text-center text-xl  text-white">
        Notes App With React Redux
      </h1>
      <div>
        <form onSubmit={NoteSubmitHandle}>
          <div className="flex items-center mx-auto gap-4 w-6/12 mt-6 ">
            <input
              type="text"
              name="title"
              value={data.title}
              className="bg-gray-200 focus:outline-none rounded-md p-2  w-7/12"
              placeholder="Add Title"
              onChange={AddNotesHandler}
            />
            <input
              type="text"
              name="content"
              value={data.content}
              className="bg-gray-200 focus:outline-none rounded-md p-2  w-7/12"
              placeholder="Add content"
              onChange={AddNotesHandler}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-7 font-medium py-3 mt-5 text-white bg-red-600 rounded-md "
            >
              Add Notes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
