import React from 'react'
import ReactDOM from 'react-dom'
import ParticipantsList from './ParticipantsList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'participants': []
    }
  }

  componentDidMount () {
    // this.getParticipants()
  }

  render () {
    return (
      <div>
        <ParticipantsList participants={this.state.participants} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
