import { Route, Routes } from 'react-router-dom' 
import Header from './components/layout/Header'
import Home from './components/Home'
import Login from './components/user/Login'
import Register from './components/user/Register' 
function App() {
  return (
    <>
     <Header/>
     <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
