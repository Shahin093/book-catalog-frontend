import { ChangeEvent, useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/shared/loading";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import { RootState } from "../redux/store";
// import { showToast } from "../redux/features/toasts/toastsSlice";

const AllBooks = () => {
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [genreData, setGenreData] = useState<string>("");
  const totalPages = 3; // Replace this with the actual total number of pages

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenreData(event.target.value);
  };

  console.log("genreData", genreData);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    // Add logic to fetch and display the data for the selected page
  };
  // console.log("cu page : ", currentPage);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchData(e.target.value);

    // const { data } = useGetBooksQuery(e.target.value);
  };

  // const genreData2 = "Fiction";

  const { data, isLoading } = useGetBooksQuery({
    search: searchData,
    page: currentPage,
    genre: genreData ? `genre=${genreData}` : "",
  });

  // const dispatch = useAppDispatch();
  // const toastState = useAppSelector((state: RootState) => state.toasts);

  // if (data?.data) {
  //   toast("All Books founded");
  // }

  // const showToast = (message: string, type: ToastType) => {

  // };

  return isLoading ? (
    <div>
      <Loading></Loading>
    </div>
  ) : (
    <div>
      <MainLayout>
        <div className=" grid grid-cols-1 lg:grid-cols-2 p-3 justify-end items-end mt-[-200px] bg-slate-400 gap-3 fixed  ">
          <div className=" flex items-center w-72 h-16 rounded-lg focus-within:shadow-lg  overflow-hidden">
            <div className="grid place-items-center h-full w-12 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full outline-none text-sm w-72
               text-gray-700 pr-2 flex justify-end border-red-400"
              type="text"
              onChange={handleChange}
              id="search"
              placeholder="Search something.."
            />
          </div>

          <div className="w-72">
            <select
              className="w-72 h-16"
              name=""
              id=""
              onChange={selectHandler}
            >
              <option value="">Select Genre</option>
              {data?.data.map((gen: IBook) => (
                <option value={gen?.genre}>{gen?.genre}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-[200px]">
          {data?.data.map((book: IBook) => (
            <Link to={`/book/${book?._id}`}>
              <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out   rounded-lg   cursor-pointer m-auto">
                <a href="#" className="w-full block h-full">
                  <img
                    alt="blog photo"
                    src="https://m.media-amazon.com/images/I/41iAE8B2KIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                    className="max-h-40 w-full object-cover"
                  />
                  <div className=" w-full p-4">
                    <p className="text-indigo-500 text-2xl font-medium">
                      {book.title}
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      A comprehensive guide about online education.
                    </p>
                    <p className="text-gray-600 font-light text-md">
                      It is difficult to believe that we have become so used to
                      having instant access to information at...
                      <a className="inline-flex text-indigo-500" href="#">
                        Read More
                      </a>
                    </p>
                    <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                      <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                        #online
                      </span>
                      <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                        #internet
                      </span>
                      <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                        #education
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User avatar"
                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                      />

                      <div className="pl-3">
                        <div className="font-medium">Jean Marc</div>
                        <div className="text-gray-600 text-sm">
                          CTO of Supercars
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white p-4 flex justify-end flex-wrap">
          <nav aria-label="Page navigation">
            <ul className="inline-flex">
              <li>
                <button
                  className={`px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 ${
                    currentPage === 1
                      ? "rounded-l-lg"
                      : "focus:shadow-outline hover:bg-green-100"
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
              </li>
              {/* {[...Array(totalPages).keys()].map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    className={`px-4 py-2 ${
                      currentPage === pageNumber + 1
                        ? "text-white bg-green-600 border-r-0"
                        : "text-green-600 border-r-0 focus:shadow-outline"
                    } transition-colors duration-150 bg-white border border-r-0 border-green-600`}
                    onClick={() => handlePageChange(pageNumber + 1)}
                  >
                    {pageNumber + 1}
                  </button>
                </li>
              ))} */}
              <li>
                <button
                  className={`px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 ${
                    currentPage === totalPages
                      ? "rounded-r-lg"
                      : "focus:shadow-outline hover:bg-green-100"
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <ToastContainer />
      </MainLayout>
    </div>
  );
};

export default AllBooks;
