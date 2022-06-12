import { Show } from "solid-js";

//props should not be destructured
const BookList = (props) => {
  //derived State
  const totalBooks = () => props.books.length;
  return (
    <>
      <Show
        when={totalBooks() > 0}
        fallback={
          <div className=" flex items-center gap-4">
            No Books Found !{" "}
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/pensive-face_1f614.png"
              alt="face"
              className=" inline-block w-10 align-middle "
            />
          </div>
        }
      >
        <h1 className="text-lg font-semibold ">
          List of Books ({totalBooks()})
        </h1>
        <ol className="list-decimal">
          <For each={props.books}>
            {(book) => {
              return (
                <li className="font-semibold">
                  {book.title}
                  <span className="font-normal italic">({book.author})</span>
                </li>
              );
            }}
          </For>
        </ol>
      </Show>
      <hr className="w-full" />
    </>
  );
};

export default BookList;
