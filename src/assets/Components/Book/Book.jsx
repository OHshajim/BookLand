import { AiOutlineStar } from "react-icons/ai";
import PropTypes from 'prop-types'; // ES6
import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
    const { bookName, author, image, rating, category, tags ,bookId } = book
    // const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div>
            <NavLink to={`/details/${bookId}`}>
            <div className="card  bg-base-100 shadow-xl p-5 border border-[#13131326]">
                <figure><img src={image} alt="Book" className="bg-[#1313130D] " /></figure>
                <div className="card-body">
                    <div className="workSans flex items-center gap-3 text-base font-medium">
                        {
                            tags.map((tag, idx) => <h4 key={idx} className="bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px] px-4 py-2">{tag}</h4>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p className="workSans">By : {author}</p>
                    <div className="flex items-center border-t border-dashed border-[#13131326] pt-3 workSans">
                        <p>{category}</p>
                        <div className="flex items-center gap-1">
                            <p>{rating} </p>
                            <AiOutlineStar />
                        </div>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired,

}
export default Book;