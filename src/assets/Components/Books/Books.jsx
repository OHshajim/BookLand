import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const books = useLoaderData()
    return (
        <div className="my-20 xl:mx-32 lg:mx-28 sm:mx-20  ">
            <p className="text-center text-4xl font-bold mb-5">Books</p>
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-7 ">
            {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;