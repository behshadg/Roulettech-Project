import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorld = () => {
  const [message, setMessage] = useState('');
  const [welcome, setWelcome] = useState('');
  const [loading, setLoading] = useState(true);
  const apiUrl = 'http://localhost:8000';

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/hello/`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching hello message:', error);
      });

    axios
      .get(`${apiUrl}/api/welcome/`)
      .then((response) => {
        setWelcome(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching welcome message:', error);
      })
      .finally(() => setLoading(false));
  }, [apiUrl]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{message}</h1>
          <p>{welcome}</p>
        </>
      )}
    </div>
  );
};

export default HelloWorld;
