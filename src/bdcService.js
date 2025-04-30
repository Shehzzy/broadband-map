import axios from './api';

export const fetchAsOfDates = () => axios.get('/api/public/map/listAsOfDates');

export const fetchAvailabilityDownloads = (asOfDate, query = '') =>
  axios.get(`/api/public/map/downloads/listAvailabilityData/${asOfDate}${query}`);

export const fetchChallengeDownloads = (asOfDate, query = '') =>
  axios.get(`/api/public/map/downloads/listChallengeData/${asOfDate}${query}`);

export const downloadDataFile = (dataType, fileId, fileType) =>
  axios.get(`/api/public/map/downloads/downloadFile/${dataType}/${fileId}/${fileType}`, {
    responseType: 'blob',
  });

export const fetchFundingData = () => axios.get('/api/public/fundingmap/downloads/listFundingData');

export const downloadFundingFile = (fileId) =>
  axios.get(`/api/public/fundingmap/downloads/downloadFile/${fileId}`, {
    responseType: 'blob',
  });
