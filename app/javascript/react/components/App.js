import React from 'react'
import Canvas from '../containers/canvas'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

const App = (props) => {
  const store= configureStore()
  return (
    <Provider store={store}>
      <Canvas/>
     </Provider>

  )
}

export default App
