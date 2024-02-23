import { useState } from 'react'
import { Card } from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    
    <div className=' flex justify-center items-center flex-col'>
    <nav className='bg-white rounded-md shadow-md p-8 mb-10 mt-6 '>
        <h1 className=' text-center text-2xl font-bold'>Web con MQTT </h1>
      </nav>
      <div className=' bg-white rounded-md shadow-md p-10 text-xl text-justify mb-10 w-96'>
        <p>
          Esta es una pequeña prueba de como hacer una web con MQTT como  broker para el uso de Esp32 para el uso de hardware y software en la carrera de Ingenería en software
        </p>
        <br></br>
        <p className=' font-bold'> Materia: <span className='font-normal'>Digitales</span></p>
      </div> 
    </div>

      <div className=' flex justify-center items-center'>
        <Card/>
      </div>
    </main>
    </>
  )
}

export default App
