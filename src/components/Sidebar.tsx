import { FaPlus } from "react-icons/fa";
import { useStore } from "../store";

const Sidebar = () => {
  const { list, workspace, openListModal, openWorkspaceModal } = useStore();

  return (
    <div className="w-60 bg-[#f9f9f9] flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">Lists</h3>

          <button
            onClick={openListModal}
            className="flex justify-center items-center mt-[1rem] cursor-pointer"
          >
            <FaPlus className="mr-2" /> List
          </button>

          <ul>
            {list.map((list, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg cursor-pointer flex items-center mt-2"
              >
                <span className="mr-2">{list.emoji}</span> {list.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">
            Workspaces
          </h3>

          <button
            onClick={openWorkspaceModal}
            className="flex justify-center items-center mt-[1rem] cursor-pointer"
          >
            <FaPlus className="mr-2" /> Worspaces
          </button>
          <ul>
            {workspace.map((workspace, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg cursor-pointer flex items-center mt-2"
              >
                <span className="mr-2">{workspace.emoji}</span> {workspace.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
