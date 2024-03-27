import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBook, getStoredReadBook, saveStoredBook, saveStoredReadBook } from "../Utility/LocalStorage";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const details = books.find(detail => detail.bookId === id)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = details

    function handleRead() {
        const storedReadBook = getStoredReadBook()
        const isExist = storedReadBook.includes(bookId)
        if (!isExist) {
            // console.log("nai");
            saveStoredReadBook(bookId)
            saveStoredBook(bookId)
            toast.success('Congratulations to read this book ', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            toast.error('Its already been read !!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

    }

    function handleWish() {
        const storedBook = getStoredBook()
        
        const isRead = storedBook.includes(bookId)
        if (!isRead) {
            saveStoredBook(bookId)
            toast.success('Its already been read !!!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }
            );
        }
        else {
            toast.error('Its will not be added to the list !!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }


    }
    return (
        <div className="flex justify-between lg:flex-row flex-col my-20 xl:mx-32 lg:mx-28 sm:mx-20 mx-5  gap-10">
            <div className="flex-1">
                <img src={image} alt="book" className="h-full p-10 bg-[#1313130D] rounded-2xl" />
            </div>
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-1">{bookName}</h1>
                <div className="workSans">
                    <h4 className="text-xl text-[#131313CC] font-medium my-5">By : {author}</h4>
                    <hr />
                    <h4 className="text-xl text-[#131313CC] font-medium my-4">{category}</h4>
                    <hr />
                    <p className="text-base font-bold mt-6">Review : <span className="font-normal text-[#131313B3]">{review}</span></p>
                    <div className="workSans flex items-center gap-3 text-base font-medium mb-6 mt-12">
                        <h4 className="text-base font-bold">Tag</h4>
                        {
                            tags.map((tag, idx) => <h4 key={idx} className="bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px] px-4 py-2">#{tag}</h4>)
                        }
                    </div>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="mt-6">
                            <tbody>
                                <tr>
                                    <td className="font-normal text-[#131313B3] text-base">Number of Pages : </td>
                                    <td className="font-semibold text-[#131313B3] text-base">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="font-normal text-[#131313B3] text-base">Publisher : </td>
                                    <td className="font-semibold text-[#131313B3] text-base">{publisher}</td>
                                </tr>
                                <tr>
                                    <td className="font-normal text-[#131313B3] text-base">Year Of Publishing : </td>
                                    <td className="font-semibold text-[#131313B3] text-base">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="font-normal text-[#131313B3] text-base">Rating : </td>
                                    <td className="font-semibold text-[#131313B3] text-base">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex mt-10 gap-4">
                        <button onClick={handleRead} className="btn px-5 border border-[#1313134D] bg-transparent ">Read</button>
                        <button onClick={handleWish} className="btn px-5 bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={4001}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce />
        </div>
    );
};

export default BookDetails;