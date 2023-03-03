import AddNotes from "./components/Add_notes";
import ShowNotes from "./components/showNotes";
function App() {
  return (
    <div className="">
      <AddNotes />
      <div className="w-full p-4 bg-violet-500 text-xl font-medium"></div>
      <ShowNotes />
    </div>
  );
}

export default App;
