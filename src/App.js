import { useReducer } from 'react'
import './App.css'
import counterReducer from './counter.reducer'
function App() {
  let [state, dispatch] = useReducer(counterReducer, 0)
  return (
    <div>
      <h3>This is the value of State {state}</h3>

      <button onClick={() => dispatch('INCREMENT')}>INCREMENT </button>
    </div>
  )
}

export default App
