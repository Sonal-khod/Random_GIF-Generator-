import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

const Random = () => {
    const [Gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)
   const apiKey = import.meta.env.VITE_API_KEY;

 
async function fetchData() {
  setLoading(true)
  const url = `https://api.giphy.com/v1/gifs/random?api_key=wJVUSKo9zNz2wO6dOU0zBK7hCbo5MfHK&tag=&rating=g=${apiKey}&tag=${Gif}` 
  const { data } = await axios.get(url)
  const image = data.data.images.downsized_large.url
  setGif(image)
  setLoading(false)
}

useEffect( () => {
    fetchData()
},[] )

function changeHandler() {
 fetchData()
  // console.log(Gif)
}

return (
    <div className='flex flex-col items-center justify-center  bg-green-400 gap-4 w-[50%] mx-auto rounded-xl h-[60%] px-20 py-6'>
      <h1 className='text-3xl font-bold text-white'>Random Gifs</h1>
      {
      loading ? (<Spinner /> ):(<img src={Gif} alt="image" height={300} width={500} />)
      }
      <button onClick={changeHandler} className='px-4 bg-yellow-400 border-amber-50 rounded-2xl text-2xl py-2 focus:border-b-blue-600 cursor-pointer w-full'>Generate</button>
    </div>
  )
}

export default Random
