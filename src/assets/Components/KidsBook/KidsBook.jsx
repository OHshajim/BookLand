import { AiOutlineStar } from "react-icons/ai";
import PropTypes from 'prop-types'; // ES6

const KidsBook = ({ book }) => {
    const { bookName, author, image, rating, category, tags  } = book
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl p-5">
                <figure><img src={image} alt="Book" className="bg-[#1313130D] " /></figure>
                <div className="card-body">
                    <div className="workSans flex items-center gap-3 text-base font-medium">
                        {
                            tags.map((tag, idx) => <h4 key={idx} className="bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px] px-4 py-2">{tag}</h4>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="flex items-center border-t border-dashed border-[#13131326]">
                        <p>{category}</p>
                        <div className="flex items-center gap-1">
                            <p>{rating} </p>
                            <AiOutlineStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
KidsBook.propTypes = {
    book: PropTypes.object.isRequired,

}
export default KidsBook;