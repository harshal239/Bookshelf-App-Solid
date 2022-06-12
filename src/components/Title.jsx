//props should not be destructured
const HelloWorld = (props) => {
  return (
    <>
      <div className="font-bold text-2xl ">{props.name} Bookshelf</div>
      <hr className="w-full" />
    </>
  );
};

export default HelloWorld;
