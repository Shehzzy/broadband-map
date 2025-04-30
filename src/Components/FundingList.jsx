// src/components/FundingList.jsx
import React, { useEffect, useState } from 'react';
import { fetchFundingData } from '../bdcService';

function FundingList() {
  const [fundingFiles, setFundingFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFundingData()
      .then((res) => setFundingFiles(res.data))
      .catch((err) => {
        console.error('Error fetching funding data:', err);
        setError('Could not fetch funding files');
      });
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold">Funding File List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {fundingFiles.map((file, idx) => (
          <li key={idx}>
            {file.file_name} — {file.agency_name} / {file.program_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FundingList;
