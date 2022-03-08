import React, {useState} from "react";
import Provedores from "componentes/Provedores/Provedores";
import Generos from "componentes/Generos/Generos";
import UIContainer from "componentes/UI/Container/Container";
// import Filme from "componentes/Filmes/Filme";
import useShortMovie from 'componentes/utils/useShortMovie';

const Home = () => {

    const [values, setValues] = useState(null);

    const [load, filme] = useShortMovie();

    function onChange(ev) {
        const { name, value } = ev.target;
        if(name.includes('genero')){
            setValues({ ...values, ['generos']: value });
        }
        if(name.includes('provedor')){
            setValues({ ...values, ['provedores']: value });
        }
    }

    function onSubmit(ev) { 
        ev.preventDefault();

        console.log(values);

        load({
            'provedores': values.provedores,
            'generos': values.generos,
        });

        console.log(filme);

    }

    return (
        <UIContainer>
            <form onSubmit={onSubmit}>
                <Provedores onChange={onChange} />
                <Generos onChange={onChange} />
                <button type="submit">Enviar sua mensagem</button>
            </form>
        </UIContainer>
    );
}

export default Home;





