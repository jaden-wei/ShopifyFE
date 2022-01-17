import React from "react";
import "./styles.css";

function Post({ index, photo }) {
  return (
    <div key={index} className="img-container">
      <img
        className="photo"
        src={photo.url}
        alt={""}
        onError={(e) => (e.target.parentElement.style.display = "none")}
      />
      <p className="img-label">{photo.date}</p>
    </div>
  );
}

export default Post;
