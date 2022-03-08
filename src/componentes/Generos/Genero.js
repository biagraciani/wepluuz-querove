import React from 'react';
import './Genero.css';

const GenerosGenero = ({genero, onChange}) => (
    <div className="box-genero__grupo">
        <input onChange={onChange} type='checkbox' id={genero.name} className="genero"  name={`genero_${genero.name}`} value={genero.id} />
        <label htmlFor={genero.name}  className='genero__label'>{genero.name}</label>
    </div>
);

export default GenerosGenero;