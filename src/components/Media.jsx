import React from 'react';
import { connect } from 'react-redux'; 

import Card from './Card';

function Media(props) {
  const { min, max } = props;

  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  const { min, max } = state.numeros;

  return { min, max }
}

export default connect(mapStateToProps)(Media);