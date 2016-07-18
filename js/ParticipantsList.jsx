import React from 'react'
import Participant from './Participant'

class ParticipantsList extends React.Component {

  render () {
    var participants = this.props.participants
    var setParticipantOnline = this.props.setParticipantOnline
    return (
      <div>
        {
          participants.map((participant, index) => (
            <Participant participant={participant} key={index} />
        ))}
        <div onClick={setParticipantOnline.bind(this)}>add</div>
      </div>
    )
  }
}

ParticipantsList.propTypes = {
  setParticipantOnline: React.PropTypes.function,
  participants: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default ParticipantsList
