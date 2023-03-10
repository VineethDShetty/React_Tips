import React from 'react'
import {CChart, CChartLine} from '@coreui/react-chartjs'

function BubbleChart() {
  return (
    <CChart
    type="bubble"
    data={{
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 34,
          y: 15,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        },{
          x:22,
          y:4,
          r:5
        },
        {
          x: 25,
          y: 10,
          r: 30
        },{
          x:20,
          y:10,
          r:5
        },
        {
          x: 25,
          y: 30,
          r: 10
        },{
          x:20,
          y:20,
          r:25
        }
      ],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    }}
  />
  )
}

export default BubbleChart