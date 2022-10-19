import React from "react";
import styles from "../styles/components/AddPaciente.module.scss";
import Form from "./Form";

const AddPaciente = () => {
  return (
    <section className={styles.addPaciente}>
      <div className={styles.addPaciente__textContainer}>
        <h2>Seguimiento de Pacientes</h2>
        <p>
          Añade pacientes y{" "}
          <span className={styles.textContainer__spanColor}>Administralos</span>
        </p>
      </div>

      <div className={styles.addPaciente__formContainer}>
        <Form />
      </div>
    </section>
  );
};

export default AddPaciente;
