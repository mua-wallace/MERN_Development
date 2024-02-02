// import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import PersonDetails from './components/PersonDetails'
import UpdatePerson from './components/UpdatePerson'

function App() {
  

  return (
    <div>
      <h1>Welcome to MERN Stack</h1>
        <Routes>
          <Route element={ <Main />}  path='/' default />
          <Route element={ <PersonDetails />}  path='/person/:id' />
          <Route element={ <UpdatePerson />}  path='/person/edit/:id' />
        </Routes>
     
    </div>
  )
}

export default App
