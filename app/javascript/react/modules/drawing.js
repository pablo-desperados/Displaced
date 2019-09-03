const initialState={
  lines: []
}

const drawing = (state= initialState, action)=>{
  switch(action.type){
    case ADD_LINE:
      state.lines.push([])
      return{...state}
    case ADD_MOVEMENT:
      const lines = state.lines
      let lastLine = lines[lines.length - 1];
      lastLine = lastLine.concat([action.point.x, action.point.y]);
      lines.splice(lines.length - 1, 1, lastLine);
      return {...state, lines: lines}
    default:
      return state
  }

}
const ADD_LINE = 'ADD_LINE'

const addLine = ()=>{
  return{
    type: ADD_LINE
  }
}

const ADD_MOVEMENT = 'ADD_MOVEMENT'

  const addMovement = (stage)=>{
  const stageComponent = stage
  const point = stageComponent.getPointerPosition();
  return{
    type: ADD_MOVEMENT,
    point
  }
}

export{
  drawing,
  addLine,
  addMovement
}
