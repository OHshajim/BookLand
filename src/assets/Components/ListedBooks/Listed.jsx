import { useLoaderData } from "react-router-dom";
import { getStoredBook, getStoredReadBook } from "../Utility/LocalStorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from "../Read/Read";
import { FiChevronDown } from "react-icons/fi";
import Wishlist from "../Wishlist/Wishlist";
import { useEffect, useState } from "react";
const Listed = () => {
    const [wish, setWish] = useState([])
    const [read, setRead] = useState([])
    const books = useLoaderData()
    // for read
    const storedReadBooks = getStoredReadBook()
    const displayReadBook = books.filter(book => storedReadBooks.includes(book.bookId))


    const storedBooks = getStoredBook()
    const displayBooks = books.filter(book => storedBooks.includes(book.bookId))
    const displayBook = displayBooks.filter(book => !displayReadBook.includes(book))
    useEffect(() => {
        setWish(displayBook)
        setRead(displayReadBook)
        handleSort()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSort(sort) {
        if (sort === "Rating") {
            const rating = displayBook.sort((a, b) => b.rating - a.rating)
            const ratingToRead = displayReadBook.sort((a, b) => b.rating - a.rating)
            setWish(rating)
            setRead(ratingToRead)
        }
        else if (sort === "NumberOfPage") {
            const NumberOfPage = displayBook.sort((a, b) => b.totalPages - a.totalPages)
            const NumberOfPageToRead = displayReadBook.sort((a, b) => b.totalPages - a.totalPages)
            setWish(NumberOfPage)
            setRead(NumberOfPageToRead)
        }
        else if (sort === "PublisherYear") {
            const PublisherYear = displayBook.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            const PublisherYearToRead = displayReadBook.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setWish(PublisherYear)
            setRead(PublisherYearToRead)
        }
    }

    return (
        <div className="my-10 xl:mx-32 lg:mx-28 sm:mx-20 mx-5">
            <h1 className="text-center text-3xl p-10 bg-[#1313130D] rounded-2xl">Books</h1>
            <div className="flex  justify-center workSans my-10">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white px-10">Sort by <span className="text-xl"><FiChevronDown /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                        <li onClick={() => handleSort("Rating")}><a>Rating</a></li>
                        <li onClick={() => handleSort("NumberOfPage")}><a>Number of pages</a></li>
                        <li onClick={() => handleSort("PublisherYear")}><a> Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>

                <Tabs>
                    <div className="workSans">

                        <TabList >
                            <Tab>Read Books</Tab>
                            <Tab>Wishlist Books</Tab>
                        </TabList>
                    </div>

                    <TabPanel className="space-y-5 mt-10">
                        {read.map(book => <Read key={book.bookId} book={book}></Read>)}
                    </TabPanel>
                    <TabPanel className="space-y-5 mt-10">
                        {wish.map(book => <Wishlist key={book.bookId} book={book}></Wishlist>)}
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default Listed;