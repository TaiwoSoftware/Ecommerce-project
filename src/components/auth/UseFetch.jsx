import { useState, useEffect } from "react";
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error status ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        alert("Check your connection");
      }
    };

    fetchData();
  }, [url]);
  return { data };
};

export default UseFetch;
