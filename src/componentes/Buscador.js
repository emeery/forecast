import React from 'react';
import {connect} from 'react-redux';
import {fetchClima} from '../acciones/clima';
import {bindActionCreators} from 'redux';
class Buscador extends React.   Component {
    constructor (props) {
        super(props);
        this.state = {term:''}
        this.cambioEntrada = this.cambioEntrada.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    cambioEntrada = (e) => {
        this.setState({term: e.target.value });
        console.log(this.state.term);
    }
    onSubmit(e){
        e.preventDefault();
        this.props.fetchClima(this.state.term);
        this.setState({term: ''});
    }
    render() { 
        return (
            
            <form 
            onSubmit={this.onSubmit}
            className="form-inline">
  
            <div className="form-group mx-sm-3 mb-2">
                <input 
                type='text' 
                value={this.state.term}
                onChange={this.cambioEntrada}
                className="form-control" 
                placeholder="Clima"/>
            </div>
            <button 
            type="submit" className="btn btn-primary mb-2">Pronostico</button>
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchClima}, dispatch);
}
export default connect(null, mapDispatchToProps)(Buscador);

