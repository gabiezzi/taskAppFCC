import "./App.css";
import { Boton } from "./components/Boton";
import { FreecodecampLogo } from "./components/FreecodecampLogo.js";
import { Tarea } from "./components/Tarea";
function App() {

  return (
    <div className="App">
      <FreecodecampLogo />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea
        texto='Aprender React'
        />
      </div>
    </div>
  );
}

export default App;
