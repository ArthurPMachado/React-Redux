import React from 'react';
import Card from './Card';

function Soma(props) {

  return (
    <Card title="Soma de Números" blue>
      <div>
        <span>
          <span>Soma: </span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  )
}

export default Soma;