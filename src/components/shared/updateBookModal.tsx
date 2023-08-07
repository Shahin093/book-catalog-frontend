import { ChangeEvent, useState, useEffect } from "react";
import { useUpdateBookMutation } from "../../redux/features/books/booksApi";
import { decodeToken } from "../../lib/utils";
import { IDecodedToken } from "../../types/globalTypes";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}
const UpdateBookModal: React.FC<ModalProps> = ({ id, isOpen, onClose }) => {
  const navigate = useNavigate();
  // Decoding the JWT token
  const user = decodeToken() as IDecodedToken | null;
  const [formData, setFormData] = useState({
    id: id,
    title: "",
    author: "",
    genre: "",
    description: "",
    publication_date: "",
    review: "",
    user: user?.userId,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [updateBook, { data }] = useUpdateBookMutation();
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can use the formData object to perform actions like sending data to a server.
    // For this example, we'll just log the formData object.
    // console.log(formData);
    // const data = formData;
    updateBook(formData);
    onClose();
  };
  console.log("data", data);

  if (data) {
    toast(data.message);
    // setTimeout(() => {
    //   navigate("/all-books");
    // }, 2000);
  }

  useEffect(() => {
    if (data) {
      toast(data.message);
      clearTimeout(
        setTimeout(() => {
          navigate(`/book/${data?.data._id}`);
        }, 2000)
      );

      // setTimeout(() => {
      //   navigate("/all-books");
      // }, 2000);
    }

    // if (data) {
    //   const timeoutId = setTimeout(() => {
    //     navigate(`/book/${data?.data._id}`);
    //   }, 2000); // Delay navigation for 2 seconds (adjust as needed)

    //   return () => {
    //     clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the timeout fires
    //   };
    // }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {/* <div className="mt-1">{children}</div> */}
        <div className="flex justify-center py-4 items-center bg-white">
          <form onSubmit={handleSubmit} className="bg-white w-full max-w-sm">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Update a Book
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {/* Full name input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <img src="https://icons8.com/icon/sBZmi8WbXGXf/title" alt="" />
                <input
                  type="text"
                  id="title"
                  placeholder="Enter the Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              {/* Username input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  type="text"
                  id="author"
                  placeholder="Enter the author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </div>

              {/* Email Address input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>

                <input
                  type="text"
                  id="description"
                  placeholder="Enter the description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              {/* genre input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  type="text"
                  id="genre"
                  placeholder="Enter the genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                />
              </div>

              {/* publication_date*/}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  type="text"
                  id="publication_date"
                  placeholder="Enter the publication date"
                  name="publication_date"
                  value={formData.publication_date}
                  onChange={handleInputChange}
                />
              </div>
              {/* review input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  type="text"
                  id="review"
                  placeholder="Enter the review"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateBookModal;
