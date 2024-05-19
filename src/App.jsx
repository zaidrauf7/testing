import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImg(url);
      console.log('File URL:', url);
    } else {
      setImg('');
      console.log('No file selected');
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title: title,
      description: description,
      img: img,
    };
    setData([...data, newData]);
    setTitle("");
    setDescription("");

  };
  
  
  return (
    <>
      <Form
        setTitle={setTitle}
        title={title}
        setDescription={setDescription}
        description={description}
        handleFileChange={handleFileChange}
        img={img}
        onSubmit={onSubmit}
      />
      <Table data={data}/>
    </>
  );
}

export default App;
