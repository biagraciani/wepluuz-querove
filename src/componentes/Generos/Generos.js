import React,{ useEffect } from 'react';
import useApi from 'componentes/utils/useApi';
import GenerosGenero from './Genero';

const Generos = ({onChange}) => {

    let generos = null;
    
    const [load, loadInfo] = useApi({
        url: '/genre/movie/list',
        method: 'get',
        params:{
            'watch_region': 'BR',
            'language':'pt-BR',
        },
    });

    useEffect(() => {
        load();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(loadInfo){
        generos = loadInfo.data.genres.filter(genero => (   genero.name === 'Ação'  || 
                                                            genero.name === 'Aventura' || 
                                                            genero.name === 'Animação'  ||
                                                            genero.name === 'Comédia' ||                                                            
                                                            genero.name === 'Crime' ||
                                                            genero.name === 'Drama' ||
                                                            genero.name === 'Família' ||
                                                            genero.name === 'Fantasia' ||
                                                            genero.name === 'Faroeste' ||
                                                            genero.name === 'Ficção científica' ||
                                                            genero.name === 'Guerra' ||
                                                            genero.name === 'História' ||
                                                            genero.name === 'Mistério' ||
                                                            genero.name === 'Música' ||
                                                            genero.name === 'Romance' ||
                                                            genero.name === 'Mistério' ||
                                                            genero.name === 'Terror' ));
    
    };

    return (
            <div className="box-generos">
                {generos && (
                    generos.map((genero) => (
                        <GenerosGenero genero={genero} onChange={onChange} />
                    ))
                )}
            </div>
    );
};

export default Generos;
