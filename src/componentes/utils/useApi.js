import axios  from 'axios';
import { useState } from 'react';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjliYmQ3MWM2YjBjYTllMDE3MDJiYTdhMDlhZTU4OSIsInN1YiI6IjYxZGRjZmQ4NDQxYjAzMDA2NWUzYmRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iiiUDDvtEytoW-cqdSew_qMikVSd_D3Usj1zi8Ep3Uk ',
}

const defaultConfig = {
  baseURL: 'https://api.themoviedb.org/3',
  headers,
};

export default function useApi(config) {

  const [requestInfo, setRequestInfo] = useState(null);
  
  async function call() {

    const finalConfig = {
      ...defaultConfig,
      ...config, 
    };

    const response =  await axios(finalConfig);

    setRequestInfo(response);

  };
  

  return [call, requestInfo];

};
