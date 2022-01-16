import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
      );
      const data = await response.json();

      // store the data into our books variable
      setPhotos(data.photos);
    }
  }, []);

  console.log(photos);

  return (
    <div className="App">
      <h1>Shopify Front End Developer Internship Project</h1>
      {photos && (
        <div className="photos">
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.img_src} alt="Photo" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
