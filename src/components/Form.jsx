const Form = ({ setTitle }) => {
  return (
    <div className="border-2 border-gray-400 w-full h-screen flex justify-center items-center ">
      <div className="flex-col justify-center">
      <div className="flex items-center justify-between mb-8">
        <h1>
            Title
        </h1>
        <input className="border-2 p-2 rounded-md w-[250px] border-gray-700" type="text" onChange={e => setTitle(e.target.value)}/>

      </div>
      <div className="flex items-center justify-between mb-8">
        <h1>
            Description
        </h1>
        <input className="border-2 p-2 rounded-md w-[250px] border-gray-700" type="text" onChange={e => setTitle(e.target.value)}/>

      </div>
      <div className="flex items-center justify-between mb-8">
        <h1>
            Image
        </h1>
        <input className="border-2 p-2 rounded-md w-[250px] border-gray-700" type="file" onClick={e => setTitle(e.target.value)}/>

      </div>
      </div>
    </div>
  );
};

export default Form;
