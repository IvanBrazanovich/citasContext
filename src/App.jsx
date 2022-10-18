import Listado from "./components/Listado";
import styles from "../src/styles/components/app.module.scss";
import AddPaciente from "./components/AddPaciente";
import { CitasProvider } from "./context/CitasProvider";

function App() {
  return (
    <CitasProvider>
      <main>
        <h1 className={styles.firstTitle}>
          Seguimiento de pacientes <span>Veterinaria</span>
        </h1>
        <div className={styles.appContainer}>
          <AddPaciente />
          <Listado />
        </div>
      </main>
    </CitasProvider>
  );
}

export default App;
