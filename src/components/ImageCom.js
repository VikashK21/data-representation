import React, { useState } from "react";

function ImageCom({ image }) {
  const [popup, setPopup] = useState(false);
  const [havor, setHavor] = useState(false);
  return (
    <>
    <div className="img-cont">
      <img
        src={image.thumbnail.large.toString()}
        alt="lImage"
        onMouseMove={() => setHavor(!havor)}
        className={havor? 'img-bg': null}
        onClick={() => setPopup(!popup)}
      />
      <h2 className={havor? 'heading havoring':'heading'} >Learn More</h2>
    </div>
      <div className="flex-itm">
      <div className="circle"></div>
      <div className="circle circle2"></div>
      </div>


      <div
        className={popup? 'pop-up-active': 'pop-up'}
      >
        <button onClick={() => setPopup(!popup)} className="cross-btn">&#10006;</button>
          <img
            src={image.thumbnail.small.toString()}
            alt="sImage"
          />
        <h2>
          {image.title}
        </h2>
        <p>
          {image.content}
        </p>
        <div className="flex-itm">
          <img className="avatar" src={image.author.avatar} alt="avatar" />
          <p>
            {image.author.name} - {image.author.role}
          </p>
        </div>
      </div>
    </>
  );
}

export default ImageCom;
