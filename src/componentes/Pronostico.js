import React from 'react';
import Buscador from './Buscador';
import PronosticoLista from './PronosticoLista';
class Pronostico extends React.Component {
    render() { 
        return(<div>
            <Buscador/>
            <PronosticoLista/>
            </div>
        )
    }
}
 
export default Pronostico;