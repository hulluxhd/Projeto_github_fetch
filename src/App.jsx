import { useDispatch, useSelector } from "react-redux"
import { patterns } from "./state/sagas/patterns"
import { useEffect } from "react"
import { Input } from "./components/input"
import { Header } from "./components/header"
import { Wrapper900px } from "./components/wrapper/Wrapper900px"
import { ProjectList } from "./components/projects/projectList"
import "./index.css"
import { avatarSelector } from "./state/slices/user.slice"
import { User } from "./components/user"

function App() {
  const dispatch = useDispatch()
  const users = useSelector(avatarSelector)
  console.log(users)

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
