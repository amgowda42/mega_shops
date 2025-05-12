import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllShops = async () => {
      await axios
        .get("http://localhost:3000/api/v1/shops")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllShops();
  }, []);
  return <div>{data}</div>;
};

export default App;
