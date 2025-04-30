// src/components/DownloadFile.jsx
import React, { useState } from 'react';
import { downloadDataFile } from '../bdcService';

function DownloadFile() {
  const [dataType, setDataType] = useState('availability');
  const [fileId, setFileId] = useState('');
  const [fileType, setFileType] = useState('csv');

  const handleDownload = () => {
    if (!fileId) return;
    downloadDataFile(dataType, fileId, fileType).then((res) => {
      const url = URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileId}.${fileType}`;
      a.click();
    });
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Download Specific File</h2>
      <input
        value={fileId}
        onChange={(e) => setFileId(e.target.value)}
        placeholder="File ID"
        className="border px-2 py-1"
      />
      <select value={dataType} onChange={(e) => setDataType(e.target.value)} className="border px-2 py-1">
        <option value="availability">Availability</option>
        <option value="challenge">Challenge</option>
      </select>
      <select value={fileType} onChange={(e) => setFileType(e.target.value)} className="border px-2 py-1">
        <option value="csv">CSV</option>
        <option value="gis">GIS</option>
      </select>
      <button onClick={handleDownload} className="bg-blue-600 text-white px-3 py-1 rounded">
        Download
      </button>
    </div>
  );
}

export default DownloadFile;
