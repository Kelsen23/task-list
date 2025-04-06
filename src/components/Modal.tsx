import { FaTimes } from "react-icons/fa";
import { useStore } from "../store";

const Modal = () => {
  const {
    isListModalOpen,
    isWorkspaceModalopen,
    modalName,
    modalEmoji,
    modalType,
    setModalName,
    setModalEmoji,
    handleSaveModal,
    closeListModal,
    closeWorkspaceModal,
  } = useStore();

  const handleClose = () => {
    if (modalType === "List") {
        closeListModal();
    } else if (modalType === "Workspace") {
        closeWorkspaceModal();
    }
  }

  const handleSave = () => {
    handleSaveModal();
  }

  if (!isListModalOpen && !isWorkspaceModalopen) {
    return;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-80 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{`Create New ${modalType}`}</h2>

            <button onClick={handleClose} className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <FaTimes />
            </button>
          </div>

          <input
            type="text"
            value={modalName}
            onChange={(e) => setModalName(e.target.value)}
            placeholder={`Enter ${modalType} Name`}
            className="border border-gray-300 p-2 rounded-lg w-full mt-4"
          />

          <input
            type="text"
            value={modalEmoji}
            onChange={(e) => setModalEmoji(e.target.value)}
            placeholder="Enter Emoji (optional)"
            className="border border-gray-300 p-2 rounded-lg w-full mt-4"
          />

          <button onClick={handleSave} className="bg-black text-white px-4 py-2 mt-2 rounded-lg cursor-pointer">
            Save    
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
