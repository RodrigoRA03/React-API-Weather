import React from 'react';
import PropTypes from 'prop-types';

function Clima({resultado}) {
    //extraer los valores
    const { name, main } = resultado;
    
    //grados kelvin
    const kelvin = 273.15;
    if(!name) return null;
    return (
     <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src="https://img.malv.news/images/Rrgu8nmFXycJl598LEjQQANisHj493oE8OVQtUWV.jpg" alt="clima"/>
          <span className="card-title">El clima de {name}</span>
        </div>
        <div className="card-content">
         <p className="temperatura"><i className="material-icons">cloud_queue</i>{parseFloat(main.temp - kelvin,10).toFixed(2)}<span> &#x2103; </span></p> 
        </div>
        <div className="card-action">
         <div className="row">
             <div className="col s12 m6 minima">
              <p><i className="material-icons">cloud_upload</i> {parseFloat(main.temp_max - kelvin,10).toFixed(0)}<span> &#x2103; </span> Maxima</p> 
             </div>
             <div className="col s12 m6">
             <p><i className="material-icons">cloud_download</i> {parseFloat(main.temp_min - kelvin,10).toFixed(0)}<span> &#x2103; </span> Minima</p> 
             </div>
         </div>
        </div>
      </div>
    </div>
    
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;
