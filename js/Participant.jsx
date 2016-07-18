import React from 'react'

class Participant extends React.Component {
  render () {
    const participant = this.props.participant
    return (
      <h3>{participant.name} ({participant.status})</h3>
    )
  }
}

Participant.propTypes = {
  participant: React.PropTypes.object
}

export default Participant
