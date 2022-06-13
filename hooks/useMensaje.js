import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMensajeActions } from "../Store/reducers/MensajeReducer";

const initialMensaje = {
  type: null,
  message: null,
};

const useMensaje = (additionalFunc) => {
  const { message, type } = useSelector((store) => store?.MensajeReducer);

  const { changeMessage: setMensaje, resetMessage } = useMensajeActions();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        if (additionalFunc) {
          additionalFunc(mensaje);
        }
        resetMessage();
      }, 3000);
    }
  }, [message]);

  const mensaje = {
    message,
    type,
  };

  return { mensaje, setMensaje };
};

export default useMensaje;
