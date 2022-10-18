import { createContext, useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const CitasContext = createContext();

const CitasProvider = ({ children }) => {
  //State
  const [error, setError] = useState(false);

  //Data de cada cita
  const [data, setData] = useState({
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
  });

  //Todas las citas

  const [citas, setCitas] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      Object.values(data)
        .map((campo) => campo.trim())
        .includes("")
    ) {
      setError(true);
      return;
    }
    //Cambiar el error
    setError(false);

    const randomNumber = Math.random();
    const dateString = Date.now() + randomNumber;
    const id =
      randomNumber.toString(30) + data.mascota + dateString.toString(36);

    data.id = id;

    setCitas([...citas, data]);

    //Add to database
    addDatabase(data);
    2;
  };

  const addDatabase = async (citaArr) => {
    const { mascota, propietario, alta, email, sintomas } = citaArr;
    const cita = await prisma.cita.create({
      data: {
        mascota,
        propietario,
        alta,
        sintomas,
        email,
      },
    });
    const res = await cita.json();
    console.log(res);
  };

  return (
    <CitasContext.Provider
      value={{ data, handleChange, submitForm, error, citas }}
    >
      {children}
    </CitasContext.Provider>
  );
};

export { CitasProvider };
export default CitasContext;
