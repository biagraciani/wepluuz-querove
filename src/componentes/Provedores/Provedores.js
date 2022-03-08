import React,{ useEffect } from 'react';
import useApi from 'componentes/utils/useApi';
import ProvedoresProvedor from 'componentes/Provedores/Provedor';

const Provedores = ({onChange}) => {

    let provedoresAtivos = null;
    
    const [load, loadInfo] = useApi({
        url: '/watch/providers/movie',
        method: 'get',
        params:{
            'watch_region': 'BR',
        },
    });

    useEffect(() => {
        load();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(loadInfo){
        provedoresAtivos = loadInfo.data.results.filter(provedor => (provedor.provider_name === 'Netflix'  || 
                                                                     provedor.provider_name === 'Disney Plus' || 
                                                                     provedor.provider_name === 'Amazon Prime Video'  ||
                                                                     provedor.provider_name === 'Globo Play' ||                                                            
                                                                     provedor.provider_name === 'HBO Max' ||
                                                                     provedor.provider_name === 'Telecine Play' ));
    };

    provedoresAtivos = getUnique(provedoresAtivos,'provider_name');


    function getUnique(arr, index) {
        if(arr){
            const unique = arr
                .map(e => e[index])
        
                // store the keys of the unique objects
                .map((e, i, final) => final.indexOf(e) === i && i)
        
                // eliminate the dead keys & store unique objects
                .filter(e => arr[e]).map(e => arr[e]);      
        
            return unique;
        };
      };

    return (
            <div className="box-provedores">
                {provedoresAtivos && (
                    provedoresAtivos.map((provedor) => (
                        <ProvedoresProvedor provedor={provedor} onChange={onChange} />
                    ))
                )}
            </div>
    );
};

export default Provedores;
