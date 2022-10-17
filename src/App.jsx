import Listado from "./components/Listado";
import styles from "../src/styles/components/app.module.scss";
import AddPaciente from "./components/AddPaciente";

function App() {
  return (
    <main>
      <h1 className={styles.firstTitle}>
        Seguimiento de pacientes <span>Veterinaria</span>
      </h1>
      <div className={styles.appContainer}>
        <AddPaciente />
        <Listado />
      </div>
    </main>
  );
}

export default App;
