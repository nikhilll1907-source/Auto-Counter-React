import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [speed, setSpeed] = useState(1000)
  const [addCheck, setAddCheck] = useState(false)
   const [subCheck, setSubCheck] = useState(false)
  function addOne() {
    setCount(prev => prev + 1)
  }
  function substractOne() {
      setCount(prev => prev - 1)
  }


  useEffect(() => {
    if(!addCheck) return ;
    const x=  setInterval(() => {
        addOne();
      }, speed);
    return () => clearInterval(x);
  }, [addCheck,speed])

   useEffect(() => {
    if(!subCheck) return;
     const x= setInterval(() => {
        substractOne();
      }, speed); 
    return () => clearInterval(x);
  }, [subCheck,speed])
 
  function add() {
    setAddCheck(prev=>!prev)
     setSubCheck(false);
  }
  function subtract(){
    setSubCheck(prev=>!prev)
    setAddCheck(false)
  }

  function increaseSpeed() {
    setSpeed(prev => prev / 2)
  }
  function decreaseSpeed(){
    setSpeed(prev => prev*2)
  }
  function stop() {
    setAddCheck(false)
    setSubCheck(false)
  }
  return (
    <>
      <div className=' h-screen w-full bg-gray-950 text-white flex-wrap p-5  '>
        <button className='p-4 bg-blue-600 m-1 border-2 rounded-2xl mr-8 '>{count}</button>
        <button className='p-2 m-1 hover:bg-gray-700 border-2 rounded-2xl cursor-pointer  ' onClick={() => addOne()}>add by one</button>
        <button className='p-2 m-1 hover:bg-gray-700 border-2 rounded-2xl cursor-pointer ' onClick={() => substractOne()}>subtract by one</button>
        <button className='p-2 m-1 hover:bg-gray-700 border-2 rounded-2xl cursor-pointer ' onClick={() => add()}>add autmoticaly</button>
        <button className='p-2 m-1 hover:bg-gray-700 border-2 rounded-2xl cursor-pointer '  onClick={() => subtract()} >sustract autmoticaly</button>
        <button className='p-2 m-1 hover:bg-gray-700 border-2 rounded-2xl cursor-pointer ' onClick={() => increaseSpeed()}>Increase speed</button>
        <button className='p-2 m-1 hover:bg-gray-700 border-2 rounded-2xl cursor-pointer ' onClick={() => decreaseSpeed()}>Decrease speed</button>
        <button className='p-2 m-1 hover:bg-gray-700 border-2 rounded-2xl cursor-pointer ' onClick={() => stop()}>stop</button>

      </div>

    </>
  )
}

export default App
