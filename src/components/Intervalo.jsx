import React from 'react';
import Card from './Card';

import './intervalo.css';

function Intervalo(props) {

  return (
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo: </strong>
          <input type="number" value={0} readonly/>
        </span>
        <span>
          <strong>Máximo: </strong>
          <input type="number" value={10} readonly/>
        </span>
      </div>
    </Card>
  )
}

export default Intervalo;