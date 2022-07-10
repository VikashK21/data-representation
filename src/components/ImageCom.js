import React from "react";

function ImageCom({image}) {
  return <div>
    <img src={image.thumbnail.large.toString()} alt="lImage" />
  </div>;
}

export default ImageCom;
