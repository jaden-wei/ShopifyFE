/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Post from "./components/Post";

function App() {
  const [photos, setPhotos] = useState(null);

  const displayPost = (photo) => {};

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=zFb9JRrtQmpRKW169NqZcsntRXYwNjrkcZDis3KH&count=25"
      );
      const data = await response.json();

      console.log(data);

      // store the data into our books variable
      setPhotos(data);
    }
  }, []);

  return (
    <div className="App">
      <Header />

      {photos ? (
        <div className="posts-container">
          {photos.map((photo, index) => (
            <Post index={index} photo={photo} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
