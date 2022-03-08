import { useState } from 'react';
import useApi from './useApi';

const params_fixos = {
    'watch_region': 'BR',
    'language':'pt-BR',
};

export default function useShortMovie({params}) {

    const [requestInfo, setRequestInfo] = useState(null);

    const [load, loadInfo] =  useApi({
        url: '/discover/movie',
        method: 'get',
        { ...params_fixos,  params},
    });
  
    async function call() {

        await load();

        setRequestInfo(loadInfo);
    };


    return [call, requestInfo];
};
