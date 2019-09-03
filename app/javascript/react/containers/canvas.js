import React, { Component } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import {connect} from 'react-redux'
import {addLine, addMovement} from '../modules/drawing'

class Canvas extends Component {
  constructor(props){
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

handleMouseDown = () => {
  this._drawing = true;
  this.props.addLine()
};

handleMouseUp = () => {
    this._drawing = false;
  };

handleMouseMove = e => {
if (!this._drawing) {
      return;
    }
    this.props.addMovement(this.stageRef.getStage())
    this.setState({})
  };

render() {
  let redLines = this.props.lines.map((line, i) => {
    debugger
    return(
      <Line key={i} points={line} stroke="red" />
    )

  })
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onContentMousedown={this.handleMouseDown}
        onContentMousemove={this.handleMouseMove}
        onContentMouseup={this.handleMouseUp}
        ref={node => {
          this.stageRef = node;
        }}
      >
        <Layer>
          <Text text="Draw a thing!" />
          {redLines}
        </Layer>
      </Stage>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lines: state.drawing.lines
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    addLine: ()=> dispatch(addLine()),
    addMovement: (line)=> dispatch(addMovement(line))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
