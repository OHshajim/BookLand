
const Banner = () => {
    return (
        <div className="flex justify-between items-center my-20 xl:mx-32 lg:mx-28 sm:mx-20  lg:p-20 sm:p-10 p-5 bg-[#1313130D] rounded-3xl">
            <div>
                <h1 className="md:text-6xl text-xl font-bold lg:mb-20 mb-5">Books to freshen up your bookshelf</h1>
                <button className="btn lg:h-[65px]  md:text-lg md:px-7 min-h-[20px] h-10 text-white bg-[#23BE0A] workSans">View The List</button>
            </div>
            <div>
                <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Poddoja-Elma_Behrouz-28676-365838.jpg" alt="book" />
            </div>
        </div>
    );
};

export default Banner;