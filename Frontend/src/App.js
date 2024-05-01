import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home'
import Edit from './Edit';
import Create from './Create';
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Edit/:sno_id' element={<Edit />}></Route>
      <Route path='/create' element={<Create />}></Route>
      
    </Routes>
    </BrowserRouter>
   
  )
}

export default App