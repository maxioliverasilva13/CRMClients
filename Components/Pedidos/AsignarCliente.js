import { useEffect, useState } from "react";
import Select from "react-select";

const AsignarCliente = () => {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    console.log(cliente);
  }, [cliente]);

  const selectCliente = (value) => {
    setCliente(value);
  };

  return (
    <div className="w-full">
      <Select
        onChange={(opt) => selectCliente(opt)}
        options={[
          { id: 1, nombre: "Chocolate" },
          { id: 2, nombre: "Algo" },
        ]}
        getOptionLabel={(opt) => opt?.nombre}
        getOptionValue={(opt) => opt?.id}
        placeholder="Seleccione el cliente"
        noOptionsMessage={() => "No hay resultados"}
      />
    </div>
  );
};

export default AsignarCliente;
