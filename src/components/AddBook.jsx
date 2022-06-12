import { createSignal, createEffect } from "solid-js";

const initialBook = {
  title: "",
  author: "",
};

//props should not be destructured
const AddBook = (props) => {
  const [book, setBook] = createSignal(initialBook);
  const addBook = (event) => {
    event.preventDefault();
    props.setBooks((books) => [...books, book()]);
    console.log("Book Added");
    setBook(initialBook);
  };

  //similar to useEffect in react
  // createEffect(() => {
  //   console.log(book());
  // });

  const InputClasses =
    "outline-none border-2 border focus:border-blue-900 rounded p-1";

  return (
    <>
      <div className="flex items-center justify-between gap-16">
        <h1 className="text-lg font-semibold ">Add New Book</h1>
        <button
          className="text-blue-800 font-bold outline-none"
          onClick={props.toggleShowBooks}
        >
          {props.showBooks ? "Hide All" : "Show All"}
        </button>
      </div>

      <form className="flex flex-col gap-3  ">
        <div className="flex items-center justify-between gap-4">
          <label for="title">Book name</label>
          <input
            id="title"
            value={book().title}
            className={InputClasses}
            onChange={(e) => {
              setBook({ ...book(), title: e.currentTarget.value });
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <label for="author">Author</label>
          <input
            id="author"
            value={book().author}
            className={InputClasses}
            onChange={(e) => {
              setBook({ ...book(), author: e.currentTarget.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-800 py-2 text-white text-lg rounded hover:bg-blue-900"
          onClick={addBook}
        >
          Add book
        </button>
      </form>
      <hr className="w-full" />
    </>
  );
};

export default AddBook;
