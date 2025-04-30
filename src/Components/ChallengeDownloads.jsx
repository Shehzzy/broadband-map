// src/components/ChallengeDownloads.jsx
import React, { useEffect, useState } from 'react';
import { fetchChallengeDownloads } from '../bdcService';

function ChallengeDownloads({ asOfDate = '2024-03-01' }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchChallengeDownloads(asOfDate)
      .then((res) => setFiles(res.data))
      .catch((err) => {
        console.error('Challenge error:', err);
        setError('Failed to load challenge data.');
      });
  }, [asOfDate]);

  return (
    <div>
      <h2 className="text-lg font-semibold">Challenge Downloads</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.file_id} — {file.category} — {file.state_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChallengeDownloads;
