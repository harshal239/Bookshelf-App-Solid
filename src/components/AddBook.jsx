import { createSignal, createEffect, Show, createResource } from "solid-js";
import { searchBooks } from "./searchBooks";

// const initialBook = {
//   title: "",
//   author: "",
// };

//props should not be destructured
const AddBook = (props) => {
  // const [book, setBook] = createSignal(initialBook);
  // const addBook = (event) => {
  //   event.preventDefault();
  //   props.setBooks((books) => [...books, book()]);
  //   console.log("Book Added");
  //   setBook(initialBook);
  // };

  //similar to useEffect in react
  // createEffect(() => {
  //   console.log(book());
  // });

  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");

  const [data] = createResource(query, searchBooks);

  const InputClasses =
    "outline-none border-2 border focus:border-blue-900 rounded p-1";

  return (
    <>
      {/* <div className="flex items-center justify-between gap-16">
        <h1 className="text-lg font-semibold ">Add New Book</h1>
        <button
          className="text-blue-800 font-bold outline-none"
          onClick={props.toggleShowBooks}
        >
          {props.showBooks ? "Hide All" : "Show All"}
        </button>
      </div> */}

      <form className="flex flex-col gap-3  ">
        <div className="flex items-center justify-between gap-4">
          <label for="title">Search books</label>
          <input
            id="title"
            value={input()}
            className={InputClasses}
            onChange={(e) => {
              setInput(e.currentTarget.value);
            }}
          />
        </div>
        {/* <div className="flex items-center justify-between gap-4">
          <label for="author">Author</label>
          <input
            id="author"
            value={book().author}
            className={InputClasses}
            onChange={(e) => {
              setBook({ ...book(), author: e.currentTarget.value });
            }}
          />
        </div> */}
        <button
          type="submit"
          className="bg-blue-800 py-2 text-white text-lg rounded hover:bg-blue-900"
          onClick={(e) => {
            e.preventDefault();
            setQuery(input());
          }}
        >
          Search
        </button>
      </form>
      <Show when={!data.loading} fallback={<>Searching...</>}>
        <ul>
          <For each={data()}>
            {(book) => (
              <li className="flex justify-between gap-2 mt-1">
                <h3>
                  {book.title}
                  <span className="italic"> ({book.author})</span>
                </h3>
                <button
                  aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                  onClick={() => {
                    props.setBooks((books) => [...books, book]);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    style={{ fill: "rgba(30, 58, 138, 1)" }}
                  >
                    <path d="M6.012 18H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path>
                  </svg>
                </button>
              </li>
            )}
          </For>
        </ul>
      </Show>
      <hr className="w-full" />
    </>
  );
};

export default AddBook;
