// src/components/FundingDownloads.jsx
import React, { useEffect, useState } from 'react';
import { fetchFundingData, downloadFundingFile } from '../bdcService';

function FundingDownloads() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFundingData()
      .then((res) => setFiles(res.data))
      .catch((err) => {
        console.error('Funding data error:', err);
        setError('Failed to load funding data.');
      });
  }, []);

  const handleDownload = (fileId, fileName) => {
    downloadFundingFile(fileId).then((res) => {
      const url = URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'funding_data.csv';
      a.click();
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Funding Downloads</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>
            {file.file_name} — {file.agency_name}
            <button
              onClick={() => handleDownload(file.file_id, file.file_name)}
              className="ml-2 text-blue-600 underline"
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FundingDownloads;
