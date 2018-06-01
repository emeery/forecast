import React from 'react';
import {connect} from 'react-redux';
class PronosticoLista extends React.Component {
    renderClima(ciudadData) {
        const nombre = ciudadData.city.name;
        return(
            <tr key={nombre}>
                <td>{nombre}</td>
            </tr>
        )
    }
    render() { 
        return (<table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Ciudad</th>
            <th scope="col">Temperatura</th>
            <th scope="col">Presión</th>
            <th scope="col">Humedad</th>
          </tr>
        </thead>
        <tbody>
        {this.props.climas.map(this.renderClima)}
        </tbody>
      </table>)
    }
}
function mapStateToProps({climas}) {
    return { climas };
}
export default connect(mapStateToProps)(PronosticoLista);
