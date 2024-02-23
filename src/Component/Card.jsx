// Card.js
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Humedad from "./humedad.svg"
import Temp from "./temperatura.svg"
import Lds from "./LDS.svg"

export const Card = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('mqttMessage', (message) => {
      setData(message);
      console.log(message);
      console.log("This is data: ",data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <>
    <div className="bg-white p-4 rounded-md shadow-md flex items-center w-96 mx-10 mb-4">
      <img src={Humedad} alt="Icono" className="w-12 h-12 mr-4" />
      <div className="flex-grow">
        <div className="text-lg font-bold">Humedad: </div>
        <div className="text-sm">
              <p> { data.humedad}%</p>  
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-md shadow-md flex items-center w-96 mx-10 mb-4">
      <img src={Temp} alt="Icono" className="w-12 h-12 mr-4" />
      <div className="flex-grow">
        <div className="text-lg font-bold">Temperatura: </div>
        <div className="text-sm">
              <p> { data.temperatura} C°</p>  
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-md shadow-md flex items-center w-96 mx-10 mb-4">
      <img src={Lds} alt="Icono" className="w-12 h-12 mr-4" />
      <div className="flex-grow">
        <div className="text-lg font-bold">Calor: </div>
        <div className="text-sm ">
              <p> { data.fototransistor} LDS</p>  
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Card;
