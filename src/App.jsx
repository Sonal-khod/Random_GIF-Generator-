import { useState } from 'react'
import './App.css'
import Random from './component/Random'
import Tag from './component/Tag'



function App() {
  

  return (
    <div>
      <h1 className='bg-slate-900 rounded-xl text-2xl text-center text-green-300 m-10 p-2 w-2/3 mx-auto'>RANDOM GIFS</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
