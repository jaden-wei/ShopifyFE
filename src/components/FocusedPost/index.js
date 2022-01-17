import React from "react";

function FocusedPost({ photo }) {
  const url = photo.url;
  const title = photo.title;
  const copyright = photo.copyright;
  const explanation = photo.explanation;

  return (
    <div>
      <img className="photo" src={url} />
      <h3>{title}</h3>
      <h4>{copyright}</h4>
      <p>{explanation}</p>
    </div>
  );
}

export default FocusedPost;
