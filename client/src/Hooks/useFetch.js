import { useEffect, useState } from 'react';
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + url,{
          headers: {
            Authorization: 'bearer' + process.env.REACT_APP_API_TOKEN
          }, 
        });
        setData(response.data.data);
        setLoading(false);
      } catch(err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
