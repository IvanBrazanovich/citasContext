import React from "react";
import styles from "../styles/components/Listado.module.scss";

const Cita = ({ cita }) => {
  const { mascota, propietario, alta, sintomas, email } = cita;
  return (
    <div className={styles.listContainer__cita}>
      <p>
        <span>Nombre:</span> {mascota}
      </p>
      <p>
        <span>Propietario:</span> {propietario}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
      <p>
        <span>Fecha:</span> {alta}
      </p>
      <p>
        <span>Síntomas:</span> {sintomas}
      </p>

      <div className={styles.cita__btnWrapper}>
        <button className={styles.btnWrapper__edit}>Editar</button>
        <button className={styles.btnWrapper__delete}>Eliminar</button>
      </div>
    </div>
  );
};

export default Cita;
