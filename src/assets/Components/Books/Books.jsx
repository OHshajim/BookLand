import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const books = useLoaderData()
    // console.log(books);
    return (
        <div className="my-20 xl:mx-32 lg:mx-28 sm:mx-20  ">
            <p>Books : {books.length}</p>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
            {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;