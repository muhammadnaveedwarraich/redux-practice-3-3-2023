import { ADDNOTEACTION, DELETENOTEACTION } from "../Action";
const initialState = {
  notes: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Note": {
      const newNotes = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        notes: [...state.notes, newNotes],
      };
    }
    case "Remove_Note": {
      const filrerState = state.notes.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        notes: filrerState,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
