import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import Loading from "../components/shared/loading";

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Replace this with the actual total number of pages

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    // Add logic to fetch and display the data for the selected page
  };

  const { data, isLoading } = useGetBooksQuery({
    search: "",
    page: currentPage,
  });
  console.log("cu page : ", currentPage);
  console.log(isLoading);
  return isLoading ? (
    <div>
      <Loading></Loading>
    </div>
  ) : (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-6">
        {data?.data.map((book: IBook) => (
          <Link to={`/book/${book?._id}`}>
            <div>
              <div className=" gap-5 p-10 m-6  space-y-6 rounded-2xl bg-gray-100  transition http://127.0.0.1:3000/book/64cc83acd80bb0ea69eac8a8duration-300 hover:rotate-0">
                <div className="flex justify-end gap-2">
                  <h2 className="-mt-1 font-bold">* BOOK</h2>
                  <div className="h-4 w-4 rounded-full bg-[#FE5401]"></div>
                </div>

                <header className="text-center text-xl font-extrabold text-gray-600">
                  {book?.publication_date}
                </header>

                <div>
                  <p className="text-center text-5xl font-extrabold text-gray-900">
                    {book?.title}
                  </p>
                  <p className="text-center text-4xl font-extrabold text-[#FE5401]">
                    {book?.author}
                  </p>
                </div>

                <footer className="mb-10 flex justify-center">
                  <button className="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                    <span>Start</span>
                    <i className="fas fa-hand-peace text-xl"></i>
                  </button>
                </footer>
              </div>
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
    </div>
  );
};

export default Books;
