import React from 'react'
import ReactDOM from 'react-dom'
import ParticipantsList from './ParticipantsList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'participants': [
          {uuid: '45689', status: 'online', name: 'Martin', email: 'martin@gmail.com'},
          {uuid: '89656', status: 'online', name: 'John', email: 'john@gmail.com'}
      ]
    }
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
