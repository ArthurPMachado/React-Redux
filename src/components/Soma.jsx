import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Soma(props) {
  const { min, max } = props;

  return (
    <Card title="Soma de Números" blue>
      <div>
        <span>
          <span>Soma: </span>
          <strong>{ max + min }</strong>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  const { min, max } = state.numeros;

  return { min, max }
}

export default connect(mapStateToProps)(Soma);