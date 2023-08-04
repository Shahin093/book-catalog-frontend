import { usePostBookMutation } from "../redux/features/books/booksApi";
import { ChangeEvent, useState } from "react";
const AddNewBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    publication_date: "",
    review: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [postBook, { data, isError, isLoading, isSuccess }] =
    usePostBookMutation();
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can use the formData object to perform actions like sending data to a server.
    // For this example, we'll just log the formData object.
    console.log(formData);
    const data = formData;
    postBook(data);
  };
  console.log(data);
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="p-5 text-2xl">
          <input
            type="text"
            id="title"
            placeholder="Enter the Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="p-5 text-2xl">
          <input
            type="text"
            id="author"
            placeholder="Enter the author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>

        <div className="p-5 text-2xl">
          <input
            type="text"
            id="description"
            placeholder="Enter the description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="p-5 text-2xl">
          <input
            type="text"
            id="genre"
            placeholder="Enter the genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          />
        </div>

        <div className="p-5 text-2xl">
          <input
            type="text"
            id="publication_date"
            placeholder="Enter the publication date"
            name="publication_date"
            value={formData.publication_date}
            onChange={handleInputChange}
          />
        </div>

        <div className="p-5 text-2xl">
          <input
            type="text"
            id="review"
            placeholder="Enter the review"
            name="review"
            value={formData.review}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewBook;
