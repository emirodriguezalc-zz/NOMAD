import React, { Component } from 'react';
import Line from 'react-chartjs2';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: 'CPU usage',
            backgroundColor: "rgb(31, 165, 4)",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className='chart-wrapper'>
        <h3>Chart sample</h3>
        <Line
          options={{
            responsive: true
          }}
          type= 'line'
          data= {this.state.data}
          />
      </div>
    )
  }
}

export default Summary
