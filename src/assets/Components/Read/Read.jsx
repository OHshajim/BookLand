// import { useLoaderData } from "react-router-dom";
// import { getStoredBook } from "../Utility/LocalStorage";
import { CiLocationOn } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import { HiDocumentChartBar } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
const Read = ({ book }) => {
    const { bookId, bookName, author, image,  totalPages, rating, category, tags, publisher, yearOfPublishing } = book

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-6">
                <figure><img src={image} alt="book" className="p-6" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <div className="workSans">
                        <h4 className="text-xl text-[#131313CC] font-medium my-5">By : {author}</h4>

                        <div className="workSans flex items-center gap-3 text-base font-medium mb-6 mt-12">
                            <h4 className="text-base font-bold">Tag</h4>
                            {
                                tags.map((tag, idx) => <h4 key={idx} className="bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px] px-4 py-2">#{tag}</h4>)
                            }
                            <div className="flex items-center gap-2">
                                <div className="text-xl"><CiLocationOn /></div>
                                <h4>Year of Publishing : {yearOfPublishing}</h4>
                            </div>
                        </div>

                        <div className="flex  gap-10 items-center">
                            <div className="flex gap-2 items-center">
                                <div className="text-xl"><MdPeopleAlt /></div>
                                <h4>Publisher : {publisher}</h4>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xl"><HiDocumentChartBar /></div>
                                <h4>Pages : {totalPages}</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="text-sm md:text-lg flex items-center gap-5 mt-4">
                            <h4 className="text-base font-normal px-5 py-2 text-[#328EFF] bg-[#328EFF26] rounded-full">Category : {category}</h4>
                            <h4 className="text-base font-normal px-5 py-2 text-[#FFAC33] bg-[#FFAC3326] rounded-full">Rating : {rating}</h4>
                            <NavLink to={`/details/${bookId}`}><button className="btn text-white bg-[#23BE0A] rounded-full px-5 py-2 ">View Details</button></NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Read;