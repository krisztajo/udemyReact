import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  let total = 0;
  for(let v of props.dataPoints)
    total += parseFloat(v.value);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
