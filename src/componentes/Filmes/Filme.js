import React from 'react';
import useShortMovie from 'componentes/utils/useShortMovie';

const Filme = (provedores, generos) => {

    console.log("dasdasdasd"); 

    let filme = useShortMovie(provedores,generos);

    console.log(filme);

    return <div>dasdasasda</div>; 
};

export default Filme;
