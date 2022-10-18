import React, { useContext, useState } from "react";
import CitasContext from "../context/CitasProvider";
import styles from "../styles/components/AddPaciente.module.scss";
import Error from "./Error";

const Form = () => {
  const {
    data: { mascota, propietario, email, alta, sintomas },
    handleChange,
    submitForm,
    error,
  } = useContext(CitasContext);

  return (
    <form onSubmit={submitForm} className={styles.formContainer__form}>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <div className={styles.form__wrapper}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          placeholder="Nombre de la mascota "
          type="text"
          name="mascota"
          id="mascota"
          value={mascota}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="propietario">Nombre Propietario</label>
        <input
          placeholder="Nombre del propietario"
          type="text"
          name="propietario"
          id="propietario"
          value={propietario}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Email contacto Propietario"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="alta">Alta</label>
        <input
          placeholder="Nombre del "
          type="date"
          name="alta"
          id="alta"
          value={alta}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="Sintomas">Sintomas</label>
        <textarea
          placeholder="Describe los síntomas"
          type="text"
          name="sintomas"
          id="sintomas"
          value={sintomas}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <button type="submit">Agregar Paciente</button>
    </form>
  );
};

export default Form;
