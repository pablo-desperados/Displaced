
import React from 'react'
import { render } from 'react-dom'
import configureStore from '../react/store/configureStore'
import App from '../react/components/App'
import RedBox from 'redbox-react'



document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        const store= configureStore()
        render(
            <App store={store}/>, reactElement
        )
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      const store= configureStore()
      render(
          <App store={store}/>, reactElement
      )
    }
  }
})
