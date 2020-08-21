import React from 'react';
import { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guadarConsultar}) => {
   
    const [ error, guardarError ] = useState(false);

    //Extraer ciudad y pais
    const {ciudad, pais } = busqueda;
    
    //funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [ e.target.name ] : e.target.value
        })

    }
    
    //cuando el usuario da submit  al form
    const handleSubmit = e => {
       e.preventDefault();

       //validar
       if(ciudad.trim() === '' || pais.trim() === ''){
        guardarError(true);
        return;
       } 

       guardarError(false);

       //pasarlo al componente principal
       guadarConsultar(true);
    }

   
    return (
      <div className="card">
        <form onSubmit={handleSubmit}>
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" placeholder="Ingresa tu Ciudad" value={ciudad} onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <div className="input-field col s12">
                <button type="submit"  value="Buscar Clima" className="btn waves-effect waves-light btn-light btn-large btn-block blue darken-3">
                    Buscar Clima
                </button>
            </div>
        </form>
    </div>
    )
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guadarConsultar: PropTypes.func.isRequired
}
export default Formulario;
