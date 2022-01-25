import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { CounterReducer } from "./components/CounterReducer";

import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>Curso para principiantes - React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <TimerPadre />
      <hr />

      <h2>useReducer</h2>
      <CounterReducer />
      <hr />

      <h2>customHooks</h2>
      <Formulario />
    </>
  );
}

export default App;
