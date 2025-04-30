// src/App.jsx
import React from 'react';
import Accordion from './Components/Accordion';
import AsOfDates from './Components/AsOfDates';
import AvailabilityDownloads from './Components/AvailabilityDownloads';
import ChallengeDownloads from './Components/ChallengeDownloads';
import DownloadFile from './Components/DownloadFile';
import FundingList from './Components/FundingList';
import FundingDownloads from './Components/FundingDownloads';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">FCC API Explorer Dashboard</h1>

      <Accordion title="1. View As Of Dates">
        <AsOfDates />
      </Accordion>

      <Accordion title="2. View Availability Data Downloads">
        <AvailabilityDownloads />
      </Accordion>

      <Accordion title="3. View Challenge Data Downloads">
        <ChallengeDownloads />
      </Accordion>

      <Accordion title="4. Download Availability or Challenge File by ID">
        <DownloadFile />
      </Accordion>

      <Accordion title="5. View Funding Data File List">
        <FundingList />
      </Accordion>

      <Accordion title="6. Download Funding File by ID">
        <FundingDownloads />
      </Accordion>
    </div>
  );
}

export default App;
