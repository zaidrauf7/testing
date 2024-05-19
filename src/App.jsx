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
    setImg("")

  };

  return (
    <>
      <Form
        setTitle={setTitle}
        title={title}
        setDescription={setDescription}
        description={description}
        setImg={setImg}
        img={img}
        onSubmit={onSubmit}
      />
      <Table title={title} description={description} img={img} />
    </>
  );
}

export default App;
