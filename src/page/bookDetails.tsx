import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/booksApi";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/shared/loading";
import { decodeToken } from "../lib/utils";
import { IDecodedToken } from "../types/globalTypes";
import { ChangeEvent, useState } from "react";
import UpdateBookModal from "../components/shared/updateBookModal";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const { id } = useParams();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Decoding the JWT token
  const user = decodeToken() as IDecodedToken | null;
  console.log("user", user?.tokenEmail);

  const { data, isLoading, error } = useSingleBookQuery(id);
  console.log(data, isLoading, error);

  const [formData, setFormData] = useState({
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

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can use the formData object to perform actions like sending data to a server.
    // For this example, we'll just log the formData object.
    console.log(formData);
    // const data = formData;
    // postBook(data);
  };

  if (data) {
    toast(data.message);
  }
  return isLoading ? (
    <div>
      <Loading></Loading>
    </div>
  ) : (
    <MainLayout>
      <div className="my-4 mx-4 ">
        <div className="container mx-auto px-20">
          <div className="bg-white">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
                <div className="flex-1 px-6 py-8 bg-white lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {data.data.title}
                  </h3>
                  <p className="italic text-sm text-gray-500 -mt-1 transition hover:opacity-75">
                    {data?.data.publication_date}
                  </p>
                  <p className="mt-6 text-base text-gray-500">
                    {data?.data.description}
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200"></div>
                    </div>
                    <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          genre: {data?.data?.genre}
                        </p>
                      </li>
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Author: {data?.data.author}
                        </p>
                      </li>
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Access to new updates
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  {user?.tokenEmail && data?.data?.user ? (
                    <div>
                      <div className="">
                        <div className="rounded-md shadow">
                          <button
                            type="button"
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-toggle="modal"
                            data-te-target="#exampleModalCenteredScrollable"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={handleOpenModal}
                          >
                            EDIT BOOK
                          </button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="rounded-md shadow">
                          <a
                            href="https://stackdiary.com/"
                            className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
                            target="_blank"
                          >
                            DELETE BOOK
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2>Not available Updating Book</h2>
                    </div>
                  )}
                  <div className="mt-4 text-sm">
                    <a
                      href="https://stackdiary.com/"
                      className="font-medium text-gray-700 hover:text-gray-900"
                      target="_blank"
                    >
                      Or pick a <span className="font-bold">lifetime</span> plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateBookModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* add book from */}
        <div className="flex justify-center py-10 items-center bg-white">
          <form onSubmit={handleSubmit} className="bg-white w-full max-w-sm">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Update a Book
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>

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

            {/* Login button */}
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Update Book
            </button>
          </form>
        </div>
      </UpdateBookModal>
      <ToastContainer></ToastContainer>
    </MainLayout>
  );
};

export default BookDetails;
