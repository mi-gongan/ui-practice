import "../App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

import WithSkeleton from "../components/WithSkeleton";

function SkeletonPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Intentionally delay the function execution
    new Promise(res => {
      console.log(res)
      setTimeout(() => {
        res();
      }, 3000);
    }).then(() => {
      axios.get("https://reqres.in/api/users?page=2").then(res => {
        console.log(res)
        setData(res.data.data);
        setTimeout(() => setIsLoading(false), 2000);
      });
    });
  }, []);
  return (
    <WithSkeleton isLoading={isLoading} data={data} />
  )
}

export default SkeletonPage;