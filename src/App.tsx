import { MdMoreVert } from "react-icons/md";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import { useStore } from "./store";
import Modal from "./components/Modal";

const App = () => {
  const {
    todos,
    editIndex,
    editText,
    dropDownIndex,
    handleEdit,
    handleUpdate,
    handleDropdownClick,
    deleteTodo,
    setEditIndex,
    setEditText,
  } = useStore();

  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="flex-1 p-6">
        <MainArea />

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 ml-[2rem]">Todo List</h2>

          <ul className="list-disc pl-5">
            {todos.map((todo, index) => (
              <li key={index} className="mb-2 ml-[2rem]">
                {editIndex === index ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="border border-gray-300 p-1 rounded-lg mr-2"
                    />
                    <button
                      onClick={() => handleUpdate(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2 cursor-pointer"
                    >
                      Update Label
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="bg-gray-500 text-white px-2 py-1 rounded-lg cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="relative flex justify-between items-center">
                    <div>
                      <span className="mr-4">
                        <strong>{todo.text}</strong> (List: {todo.list})
                        Workspace: {todo.workspace}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <MdMoreVert
                        className="cursor-pointer"
                        size={24}
                        onClick={() => handleDropdownClick(index)}
                      />

                      {dropDownIndex === index && (
                        <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg">
                          <button
                            onClick={() => handleEdit(index)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer rounded-sm z-100"
                          >
                            Update
                          </button>

                          <button
                            onClick={() => deleteTodo(index)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer rounded-sm z-100"
                          >Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal />
    </div>
  );
};

export default App;