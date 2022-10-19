import { createContext, useEffect, useState } from "react";

const CitasContext = createContext();

const CitasProvider = ({ children }) => {
  //State
  const [error, setError] = useState(false);
  const [editCita, setEdit] = useState(false);

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

  //Fetch all citas
  const getCitas = async () => {
    const arr = await fetch("http://localhost:4000/citas");
    const res = await arr.json();
    setCitas(res.citasres);
  };
  useEffect(() => {
    getCitas();
  }, []);

  //Input handle change form
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //When form is submitted
  const submitForm = (e) => {
    e.preventDefault();
    console.log(Object.values(data));
    if (
      Object.values(data)
        .map((campo) => isNaN(campo) && campo.trim())
        .includes("")
    ) {
      setError(true);
      return;
    }

    //Cambiar el error
    setError(false);

    //See editing mode
    if (editCita) {
      //Add to database
      editDatabase(data);
      setEdit(false);
    } else {
      //Add to database
      addDatabase(data);
    }
  };

  //Handle delete cita
  const handleDelete = async (cita) => {
    const app = await fetch("http://localhost:4000/citas", {
      method: "DELETE",
      body: JSON.stringify(cita),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await app.json();
    getCitas();
  };

  //HandleEdit
  const handleEdit = (cita) => {
    setEdit(true);
    setData(cita);
  };

  //Add to database
  const addDatabase = async (citaArr) => {
    const app = await fetch("http://localhost:4000/citas", {
      method: "POST",
      body: JSON.stringify(citaArr),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await app.json();
    getCitas();
    setData({
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  //Add to database
  const editDatabase = async (citaArr) => {
    console.log(citaArr);
    const app = await fetch("http://localhost:4000/citas", {
      method: "PUT",
      body: JSON.stringify(citaArr),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await app.json();
    getCitas();
    setData({
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  return (
    <CitasContext.Provider
      value={{
        handleEdit,
        data,
        handleChange,
        submitForm,
        error,
        citas,
        handleDelete,
        editCita,
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

export { CitasProvider };
export default CitasContext;
