import React from 'react'
import MultipleReducers from './src/redux/MultipleReducers'
import { Provider } from 'react-redux'
import { mystore } from './src/redux/store/Store'

const App = () => {
  return (
    <Provider store={mystore}>
<MultipleReducers/>
    </Provider>
    
  )
}

export default App
