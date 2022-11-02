import { patterns } from "./state/sagas/patterns"
import { useEffect } from "react"
import { Input } from "./components/input"
import { Header } from "./components/header"
import { Wrapper900px } from "./components/wrapper/Wrapper900px"
import { ProjectList } from "./components/projects/projectList"
import "./index.css"
import { User } from "./components/user"
import { useAppDispatch } from "./state/store/hooks"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: patterns.FETCH_USER_DATA })
  }, [])




  return (
    <div className="App">
      <Header />
      <Input />
      <Wrapper900px>
        <User />
        <ProjectList />
      </Wrapper900px>
    </div>
  )
}

export default App
