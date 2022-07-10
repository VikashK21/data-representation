import React from "react";
import '../App.css'

function ContentCom({ content }) {
  let date = Date(content.date).split(" ")
  return (
    <div>
      <h2>
        {content.title}
      </h2>
      <p>
        {content.content}
      </p>
      <footer className="flex">
        <div>
          {content.author.name} - {content.author.role}
        </div>
        <div>
          {date[1]} {date[2]}, {date[3]}
        </div>
      </footer>
    </div>
  );
}

export default ContentCom;
