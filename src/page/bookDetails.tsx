import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/booksApi";
import MainLayout from "../components/layout/MainLayout";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBookQuery(id);
  console.log(data, isLoading, error);

  return (
    <MainLayout>
      <div>
        <h3>Book details</h3>
      </div>
    </MainLayout>
  );
};

export default BookDetails;
