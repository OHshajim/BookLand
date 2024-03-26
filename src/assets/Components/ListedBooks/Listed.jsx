import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../Utility/LocalStorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from "../Read/Read";
import { FiChevronDown } from "react-icons/fi";
const Listed = () => {
    const books = useLoaderData()
    const storedBooks = getStoredBook()
    const displayBooks = books.filter(book => storedBooks.includes(book.bookId))
    // console.log(displayBooks);
    return (
        <div>
            <h1 className="text-center">Books : {displayBooks.length}</h1>
            <div className="flex  justify-center workSans ">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white px-10">Sort by <span className="text-xl"><FiChevronDown /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a> Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>

                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {displayBooks.map(book => <Read key={book.bookId} book={book}></Read>)}
                    </TabPanel>
                    <TabPanel>
                    {displayBooks.map(book => <Read key={book.bookId} book={book}></Read>)}
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default Listed;