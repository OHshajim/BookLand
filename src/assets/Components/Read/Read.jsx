// import { useLoaderData } from "react-router-dom";
// import { getStoredBook } from "../Utility/LocalStorage";

const Read = ({ book }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="book" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <div className="workSans">
                        <h4 className="text-xl text-[#131313CC] font-medium my-5">By : {author}</h4>

                        <div className="workSans flex items-center gap-3 text-base font-medium mb-6 mt-12">
                            <h4 className="text-base font-bold">Tag</h4>
                            {
                                tags.map((tag, idx) => <h4 key={idx} className="bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px] px-4 py-2">#{tag}</h4>)
                            }
                              <div>
                                <h4>Year of Publishing : {yearOfPublishing}</h4>
                              </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}


export default Read;