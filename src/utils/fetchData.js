import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch(url, { method: "GET", mode: "no-cors" }).then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then(data => {
          console.log(data);
          setData(data);
        });
      });
    }
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
