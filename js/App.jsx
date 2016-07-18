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

  getParticipants () {
    this.setState({
      'participants': [
          {uuid: '45689', status: 'offline', name: 'Martin'},
          {uuid: '89656', status: 'offline', name: 'John'}
      ]
    })
  }

  setParticipantOnline () {
    this.setState({
      'participants': [
          {uuid: '45689', status: 'online', name: 'Martin'}
      ]
    })
  }

  componentDidMount () {
    this.getParticipants()
  }

  render () {
    return (
      <div>
        <ParticipantsList participants={this.state.participants} setParticipantOnline={this.setParticipantOnline} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
