/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/booksApi";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/shared/loading";
import { decodeToken } from "../lib/utils";
import { IDecodedToken } from "../types/globalTypes";
import { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import UpdateBookModal from "../components/shared/updateBookModal";
import DeleteBookModal from "../components/shared/deleteBookModal";
import Reviews from "./reviews";
import { useCreateReviewMutation } from "../redux/features/reviews/reviewApi";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [review, setReview] = useState("");
  const [isModalOpen2, setModalOpen2] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleOpenModal2 = () => {
    setModalOpen2(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleCloseModal2 = () => {
    setModalOpen2(false);
  };

  // Decoding the JWT token
  const user = decodeToken() as IDecodedToken | null;

  const { data, isLoading } = useSingleBookQuery(id);

  // review part

  const [createReview, { data: reviewDataShow }] = useCreateReviewMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const reviewData = {
      review: review,
      book: data && data?.data?._id,
    };
    createReview(reviewData);

    setReview("");
    if (reviewDataShow?.data) {
      navigate(`/book/${reviewDataShow && reviewDataShow?.data?._id}`);
    }
  };
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  return isLoading ? (
    <div>
      <Loading></Loading>
    </div>
  ) : (
    <MainLayout>
      <div className="my-4 mx-4 ">
        <div className="container mx-auto px-20">
          <div className="bg-white">
            <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
                <div className="flex-1 px-6 py-8 bg-white lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {data?.data.title}
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
                        <div
                          className="rounded-md shadow"
                          onClick={handleOpenModal2}
                        >
                          <a className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900">
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

          {/* review page  */}
          {data?.data._id && <Reviews id={data.data._id} />}

          {/* add review  */}
          <div className="max-w-lg shadow-md">
            <form action="" className="w-full p-4" onSubmit={handleSubmit}>
              <label className="block mb-2">
                <span className="text-gray-600">Add a review</span>
                <textarea
                  className="block w-full mt-1 rounded"
                  rows={3}
                  value={review}
                  onChange={handleTextareaChange}
                ></textarea>
              </label>
              <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* update modal  */}
      <UpdateBookModal
        id={data?.data._id}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* delete modal  */}
      <DeleteBookModal
        id={data?.data._id}
        isOpen={isModalOpen2}
        onClose={handleCloseModal2}
      />

      <ToastContainer></ToastContainer>
    </MainLayout>
  );
};

export default BookDetails;
