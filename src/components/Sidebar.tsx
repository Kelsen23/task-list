import { FaPlus } from "react-icons/fa";
import { useStore } from "../store";

const Sidebar = () => {
  const { list, workspace, openListModal, openWorkspaceModal } = useStore();

  return (
    <div className="w-60 bg-[#f9f9f9] flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">Lists</h3>

          <button className="flex justify-center items-center mt-[1rem] cursor-pointer">
            <FaPlus className="mr-2" /> List
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">
            Workspaces
          </h3>

            <button className="flex justify-center items-center mt-[1rem] cursor-pointer">
              <FaPlus className="mr-2" /> Worspaces
            </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;