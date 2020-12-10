import React, { useEffect, useState } from "react";
import axios from "axios";

function Deneme() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => {
      setMyData(res.data);
    });
  }, []);
  console.log(myData.length, "Notes");
  return <div></div>;
}

export default Deneme;
