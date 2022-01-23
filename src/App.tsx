import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";

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
      <br />

    </>
  );
}

export default App;
