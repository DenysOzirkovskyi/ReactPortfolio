import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Header from './components/Header/Header'
import './App.scss'
function App() {
  return (
    <div className='App'>
<Home/>
<About/>
<Contact/>
    </div>
  )
}

export default App
