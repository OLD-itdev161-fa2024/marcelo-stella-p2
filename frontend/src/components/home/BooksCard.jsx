import BookSingleCars from "./BookSingleCars";

const BooksCard = ({books}) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <BookSingleCars key={item._id} book={item}></BookSingleCars>
            ))}
        </div>
    )
}

export default BooksCard