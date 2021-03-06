import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import GraphsAndFeedback from './graphAndFeedback'

let program

class ProgramSelector extends Component {

  render () {
    program = require('../../resources/graphs/' + this.props.match.params.program + '.json')
    return (
      <Route path='/graphs/:program' render={props => (
        <GraphsAndFeedback {...props} program={program} programName={this.props.match.params.program} />
      )} />
    )
  }
}

ProgramSelector.propTypes = {
  match: PropTypes.object
}

export default ProgramSelector
