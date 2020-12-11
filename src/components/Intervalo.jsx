import React from 'react';
import { connect } from 'react-redux'; 

import Card from './Card';

import './intervalo.css';

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo: </strong>
          <input type="number" value={min} readonly/>
        </span>
        <span>
          <strong>Máximo: </strong>
          <input type="number" value={max} readonly/>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  const { min, max } = state.numeros;

  return { min, max }
}

export default connect(mapStateToProps)(Intervalo);