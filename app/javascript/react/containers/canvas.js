import React from 'react'
import { connect } from 'react-redux'

class Canvas extends React.Component {
  render(){
    return(
      <p>hello</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lines: state.drawing.lines
  }
}

export default connect(
  mapStateToProps,
  null
)(Canvas)
