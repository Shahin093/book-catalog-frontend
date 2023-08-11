import { useEffect, useState } from "react";
import { decodeToken } from "../lib/utils";
import {
  useGetBookWithYourselfQuery,
  useUpdateBookStatusMutation,
} from "../redux/features/books/booksApi";
import { IDecodedToken, IBook } from "../types/globalTypes";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/shared/loading";

const WishList = () => {
  const [reading, setReading] = useState([]);
  const [wish, setWish] = useState([]);
  // Decoding the JWT token
  const user = decodeToken() as IDecodedToken | null;

  const { data, isLoading, error } = useGetBookWithYourselfQuery(
    user?.userId,

    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 6000,
    }
  );
  console.log(isLoading, error);

  useEffect(() => {
    setReading(
      data?.data?.filter(
        (reading: IBook) => reading?.bookStructure === "B-readinglist"
      )
    );
  }, [data?.data]);

  useEffect(() => {
    setWish(
      data?.data?.filter(
        (reading: IBook) => reading?.bookStructure === "B-wishlist"
      )
    );
  }, [data?.data]);

  const [updateStatus, { data: updatedData }] = useUpdateBookStatusMutation();
  const handleUpdateStatus = (id: string) => {
    updateStatus(id);
  };
  console.log("updatedData", updatedData);

  return isLoading ? (
    <div>
      <Loading></Loading>
    </div>
  ) : (
    <MainLayout>
      <div>
        <div className="flex flex-col p-6">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold flex justify-center items-center pt-5">
                WishList
              </h2>
              <div className="overflow-hidden mb-7">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Author
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Genre
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wish?.map((readingData: IBook) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4">
                          {readingData?.title}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {readingData?.author}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {readingData?.genre}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold flex justify-center items-center pt-5">
                Reading List
              </h2>
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Author
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Genre
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reading?.map((readingData: IBook) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4">
                          {readingData?.title}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {readingData?.author}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {readingData?.genre}
                        </td>
                        {!readingData?.status ? (
                          <td className="whitespace-nowrap px-6 py-4">
                            <button
                              onClick={() =>
                                handleUpdateStatus(readingData?._id.toString())
                              }
                              className="bg-green-400 text-white font-bold p-3"
                            >
                              complete reading
                            </button>
                          </td>
                        ) : (
                          <td className="whitespace-nowrap px-6 py-4">
                            reading completed
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WishList;
