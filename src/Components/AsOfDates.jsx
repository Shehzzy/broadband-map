// src/components/AsOfDates.jsx
import React, { useEffect, useState } from 'react';
import { fetchAsOfDates } from '../bdcService';

function AsOfDates() {
  const [dates, setDates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAsOfDates()
      .then((res) => {
        setDates(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch As Of Dates:', err);
        setError('Something went wrong!');
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">As Of Dates</h2>
      {error && <p className="text-red-600">{error}</p>}
      <ul className="list-disc pl-6">
        {dates.map((item, index) => (
          <li key={index}>
            <strong>{item.data_type}</strong>: {item.as_of_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AsOfDates;
