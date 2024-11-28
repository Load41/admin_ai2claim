import { useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <RouterProvider fallbackElement={"Loader..."} router={router} />
    </>
  )
}

export default App
