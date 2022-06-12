import { HelloWorld, BookList, AddBook } from "./components";
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
      <HelloWorld name="Harshal Walunj's" />
      <AddBook
        setBooks={setBooks}
        showBooks={showBooks()}
        toggleShowBooks={toggleShowBooks}
      />
      <Show
        when={showBooks()}
        fallback={<div className="text-xl">Books are hidden</div>}
      >
        <BookList books={books()} />
      </Show>
    </div>
  );
}

export default App;
