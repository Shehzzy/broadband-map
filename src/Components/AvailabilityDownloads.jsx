// src/components/AvailabilityDownloads.jsx
import React, { useEffect, useState } from 'react';
import { fetchAvailabilityDownloads } from '../bdcService';

function AvailabilityDownloads({ asOfDate = '2024-03-01' }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAvailabilityDownloads(asOfDate)
      .then((res) => setFiles(res.data))
      .catch((err) => {
        console.error('Availability error:', err);
        setError('Failed to load availability data.');
      });
  }, [asOfDate]);

  return (
    <div>
      <h2 className="text-lg font-semibold">Availability Downloads</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.file_name} ({file.file_type}) - {file.provider_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailabilityDownloads;
