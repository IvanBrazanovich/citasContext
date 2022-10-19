import React from "react";
import useCitas from "../hooks/useCitas";
import styles from "../styles/components/Listado.module.scss";
import Cita from "./Cita";

const Listado = () => {
  const { citas } = useCitas();

  return (
    <aside className={styles.listadoCitas}>
      <div className={styles.listadoCitas__textContainer}>
        <h2>
          {citas.length > 0 ? "Listado de pacientes" : "No hay pacientes"}
        </h2>
        <p>
          {citas.length > 0
            ? " Administra tus "
            : "Comienza agregando pacientes "}

          <span className={styles.textContainer__spanColor}>
            {citas.length > 0
              ? "Pacientes y Citas "
              : "y aparecerán en este lugar"}
          </span>
        </p>
      </div>

      <div className={styles.listadoCitas__listContainer}>
        {citas.length > 0 &&
          citas.map((cita) => {
            return <Cita cita={cita} key={cita.id} />;
          })}
      </div>
    </aside>
  );
};

export default Listado;
