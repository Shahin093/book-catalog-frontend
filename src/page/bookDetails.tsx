import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/booksApi";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBookQuery(id);
  console.log(data, isLoading, error);

  return <div></div>;
};

export default BookDetails;
