import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import Experience from './components/Experience'
import Process from './components/Process'
import Works from './components/Works'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='px-7 lg:w-[50%] lg:m-auto'>
      <Navbar />
      <MyInfo />
      <Experience />
      <Process />
      <Works />
    </div>
  </React.StrictMode>,
)
