import React from 'react'
import Participant from './Participant'

class ParticipantsList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    var participants = this.props.participants
    console.log(participants)
    this.setState(participants)
  }

  render () {
    var participants = this.state
    return (
      <div>
        {
          [participants].map((participant, index) => (
            <Participant participant={participant} key={index} />
        ))}
      </div>
    )
  }
}

ParticipantsList.propTypes = {
  participants: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default ParticipantsList
