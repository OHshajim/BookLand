import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../Utility/LocalStorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from "../Read/Read";

const Listed = () => {
    const books = useLoaderData()
    const storedBooks = getStoredBook()
    const displayBooks = books.filter(book => storedBooks.includes(book.bookId))
    // console.log(displayBooks);
    return (
        <div>
            <h1 className="text-center">Books : {displayBooks.length}</h1>

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
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default Listed;