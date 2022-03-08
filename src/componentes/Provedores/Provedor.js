import React from 'react';
import './Provedor.css';

const ProvedoresProvedor = ({provedor, onChange}) => (
    <div className="box-provedores__grupo">
        <input onChange={onChange} type='checkbox' id={provedor.provider_name} className="provedor"  name={`provedor_${provedor.provider_name}`} value={provedor.provider_id} />
        <label htmlFor={provedor.provider_name}  className='provedor__label'>
            <div className={ `img_provedor ` + provedor.provider_name}></div>
        </label>
    </div>
);

export default ProvedoresProvedor;