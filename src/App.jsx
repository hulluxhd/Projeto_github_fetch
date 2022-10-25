import { Input } from "./components/Input/Input"
import { Prev } from "./components/Input/Prev"
import { Next } from "./components/Input/Next"
import { useDispatch } from "react-redux"
import { patterns } from "./state/sagas/patterns"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: patterns.FETCH_USER_DATA})
  }, [])

  return (
    <div className="App">
   
    </div>
  )
}

export default App
