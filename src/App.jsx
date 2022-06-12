import { Title, BookList, AddBook } from "./components";
import { createSignal, createEffect } from "solid-js";
import { Show } from "solid-js";

const initialBooks = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
];

function App() {
  //similar to useState in react
  const [books, setBooks] = createSignal(initialBooks);
  const [showBooks, setShowBooks] = createSignal(false);

  const toggleShowBooks = () => setShowBooks(!showBooks());
  //states should always be used as functions()
  // createEffect(() => {
  //   console.log(books());
  //   console.log(showBooks());
  // });

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <Title name="Harshal Walunj's" />
      <AddBook
        setBooks={setBooks}
        // showBooks={showBooks()}
        // toggleShowBooks={toggleShowBooks}
      />
      <Show
        when={showBooks()}
        fallback={
          <button
            className="text-xl font-semibold text-blue-800"
            onClick={toggleShowBooks}
          >
            Show All Books
          </button>
        }
      >
        <BookList books={books()} />
      </Show>
    </div>
  );
}

export default App;
