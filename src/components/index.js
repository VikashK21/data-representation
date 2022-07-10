import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCom from "./ImageCom";
import ContentCom from "./ContentCom";

function Main() {
  const [data, setData] = useState({ msg: "", data: [] });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        );
        setData(pre => ({ ...pre, data: res.data }));
      } catch (err) {
        setData(pre => ({ ...pre, msg: err.message }));
      }
    };
    getData();
  });
  return (
    <div className="cards">
      {data.data.length > 0 &&
        data.data.map(ele =>
          <div className="card" key={ele.id}>
            <ImageCom image={ele}/>
            <ContentCom content={ele} />
          </div>
        )}
    </div>
  );
}

export default Main;
