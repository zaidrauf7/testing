const Table = ({ data }) => {
  return (
    <div className="w-full h-screen border-2 border-gray-400">
      {data.map((val) => {
        return (
          <div>
            <img className="w-[]" src={val.img} alt="" />
            <h1>{val.title}</h1>
            <h1>{val.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
