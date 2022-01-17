/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Post from "./components/Post";

function App() {
  const [photos, setPhotos] = useState(null);
  const [blur, setBlur] = useState(false);

  const toggleBlur = () => {
    setBlur(!blur);
  };

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=zFb9JRrtQmpRKW169NqZcsntRXYwNjrkcZDis3KH&count=100"
      );
      const data = await response.json();

      console.log(data);

      // store the data into our books variable
      setPhotos(data);
    }
  }, []);

  return (
    <div className="App">
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
        <path
          d="M-314,267 C105,364 400,100 812,279"
          fill="none"
          stroke="white"
          strokeWidth="120"
          strokeLinecap="round"
        />
      </svg>

      <Header />

      {photos ? (
        <div className="posts-container">
          {photos.map((photo, index) => (
            <Post index={index} photo={photo} toggleBlur={toggleBlur} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
