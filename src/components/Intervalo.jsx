import React from 'react';
import { connect } from 'react-redux'; 

import Card from './Card';

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros';

import './intervalo.css';

function Intervalo(props) {
  const { min, max, alterarMinimo, alterarMaximo } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo: </strong>
          <input 
            type="number" 
            value={min} 
            onChange={(event) => alterarMinimo(+event.target.value)}
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input 
            type="number" 
            value={max} 
            onChange={(event) => alterarMaximo(+event.target.value)}
          />
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  const { min, max } = state.numeros;

  return { min, max }
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // Action Creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      // Action Creator -> action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervalo);