//props should not be destructured
const BookList = (props) => {
  //derived State
  const totalBooks = () => props.books.length;
  return (
    <>
      <h1 className="text-lg font-semibold ">List of Books ({totalBooks()})</h1>
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
      <hr className="w-full" />
    </>
  );
};

export default BookList;
