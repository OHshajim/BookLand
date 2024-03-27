import { useLoaderData } from "react-router-dom";
import KidsBook from "../KidsBook/KidsBook";

const KidsZone = () => {
    const kidsBooks = useLoaderData()
    // console.log(kidsBooks);
    const Books = kidsBooks.books
    return (
        <div className="my-20 xl:mx-32 lg:mx-28 sm:mx-20  mx-5">
            <h1 className="text-center text-3xl p-10 bg-[#1313130D] rounded-2xl">Books For Kids </h1>
            <div className="grid  md:grid-cols-2  gap-5 my-10 ">
                {
                    Books.map(book=><KidsBook key={book.bookId} book={book}></KidsBook>)
                }
            </div>
        </div>
    );
};

export default KidsZone;