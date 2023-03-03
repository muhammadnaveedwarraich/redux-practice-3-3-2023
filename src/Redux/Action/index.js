const Add_Note = "Add_Note";
const Remove_Note = "Remove_Note";
export const ADDNOTEACTION = (notes) => {
  return {
    type: Add_Note,
    payload: notes,
  };
};

export const DELETENOTEACTION = (id) => {
  return {
    type: Remove_Note,
    payload: id,
  };
};
