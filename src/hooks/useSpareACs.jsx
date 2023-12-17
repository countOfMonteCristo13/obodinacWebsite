import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useSpareACs = url => {
  const BASE_URL = 'http://localhost:3001/api/';
  const FULL_URL = BASE_URL + url;
  //acs/get-spare-acs
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${FULL_URL}`);

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      setError(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useSpareACs;
