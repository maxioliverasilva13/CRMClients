import React, { useState, useEffect } from 'react';

const initialMensaje = {
  type: null,
  message: null,
};

const useMensaje = (additionalFunc) => {
    const [mensaje, setMensaje] = useState(initialMensaje);

    useEffect(() => {
      if (mensaje?.message) {
        setTimeout(() => {
          if (additionalFunc) {
            additionalFunc(mensaje);
          }
          setMensaje(initialMensaje);
        }, 3000);
      }
    }, [mensaje]);

    return { mensaje, setMensaje }
}
 
export default useMensaje;