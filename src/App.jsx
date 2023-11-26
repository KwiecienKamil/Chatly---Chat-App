import Login from './pages/Login'
import {Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Chats from './pages/Chats'

function App() {

  return (
    <>
      <AuthProvider>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chats" element={<Chats />} />
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
