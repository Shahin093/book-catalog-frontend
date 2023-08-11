// import { useEffect } from "react";
// import { useDeleteBookMutation } from "../../redux/features/books/booksApi";
// import { decodeToken } from "../../lib/utils";
// import { IDecodedToken } from "../../types/globalTypes";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
// import { useNavigate } from "react-router-dom";

interface ModalProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
}
const LogoutModal: React.FC<ModalProps> = ({ id, isOpen, onClose }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  console.log(id);

  const logout = () => {
    cookies.remove("token", { path: "/" });
    navigate("/login");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-end">
          <button
            className="text-gray-500 font-bold hover:text-red-600  focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {/* <div className="mt-1">{children}</div> */}
        <h2>
          If you want to delete book , so you will click this "Delete" button
        </h2>
        <div className="flex justify-center py-4 items-center bg-white"></div>
        <button
          type="button"
          className="bg-green-500 text-white font-bold p-3"
          onClick={logout}
        >
          Confirm
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LogoutModal;
