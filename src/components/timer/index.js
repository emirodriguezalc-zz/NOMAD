import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    const { count } = this.state
    return (
      <span>
        {count}
      </span>
    )
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))

    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }
}

export default Timer;
