import React from "react";
import styles from "../styles/components/AddPaciente.module.scss";

const Form = () => {
  return (
    <form className={styles.formContainer__form}>
      <div className={styles.form__wrapper}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          placeholder="Nombre de la mascota "
          type="text"
          name="mascota"
          id="mascota"
        />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="propietario">Nombre Propietario</label>
        <input
          placeholder="Nombre del propietario"
          type="text"
          name="propietario"
          id="propietario"
        />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Email contacto Propietario"
          type="text"
          name="email"
          id="email"
        />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="alta">Alta</label>
        <input placeholder="Nombre del " type="date" name="alta" id="alta" />
      </div>

      <div className={styles.form__wrapper}>
        <label htmlFor="Sintomas">Sintomas</label>
        <textarea
          placeholder="Describe los síntomas"
          type="text"
          name="Sintomas"
          id="Sintomas"
        />
      </div>

      <button type="submit">Agregar Paciente</button>
    </form>
  );
};

export default Form;
