import React, { useState } from 'react'; // Importamos React y el hook useState
import './App.css'; // Importamos los estilos CSS

function App() {
  const [visor, setVisor] = useState(''); // Definimos el estado 'visor' para manejar la visualización

  // Función para agregar un valor al visor
  const valorvisor = (valor) => {
    setVisor(visor + valor);
  };

  // Función para borrar todo el contenido del visor
  const zerar = () => {
    setVisor('');
  };

  // Función para borrar el último carácter del visor
  const backspace = () => {
    setVisor(visor.slice(0, -1));
  };

  // Función para agregar una operación al visor
  const operador = (op) => {
    if (visor !== '') { // Solo permite operar si el visor tiene algún valor
      setVisor(visor + op);
    }
  };

  // Función para calcular el resultado de la expresión en el visor
  const calcular = () => {
    try {
      setVisor(eval(visor).toString()); // Evalúa la expresión y convierte el resultado a texto
    } catch (e) {
      setVisor('Error'); // Muestra "Error" si la expresión es inválida
    }
  };

  // Función para cambiar el signo del número en el visor
  const masMenos = () => {
    setVisor((parseFloat(visor) * -1).toString());
  };

  // Función para agregar un punto decimal, si no existe ya en el visor
  const punto = () => {
    if (!visor.includes('.')) {
      setVisor(visor + '.');
    }
  };

  return (
    <div id="calculadora">
      <form name="form">
        <h1 id="title">Calculadora</h1> {/* Título de la calculadora */}
        <input type="text" className="vsaida" id="visor" value={visor} readOnly /> {/* Visor de la calculadora */}
      </form>
      <table id="teclado">
        <tbody>
          <tr>
            <td>
              <input type="button" className="limpar" value="C" onClick={zerar} />
              <input type="button" className="botaoAux" value="⌫" onClick={backspace} />
              <input type="button" className="botaoAux" value="%" onClick={() => operador('%')} />
              <input type="button" className="divisao" value="÷" onClick={() => operador('/')} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" className="numero" value="7" onClick={() => valorvisor('7')} />
              <input type="button" className="numero" value="8" onClick={() => valorvisor('8')} />
              <input type="button" className="numero" value="9" onClick={() => valorvisor('9')} />
              <input type="button" className="multiplicacao" value="x" onClick={() => operador('*')} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" className="numero" value="4" onClick={() => valorvisor('4')} />
              <input type="button" className="numero" value="5" onClick={() => valorvisor('5')} />
              <input type="button" className="numero" value="6" onClick={() => valorvisor('6')} />
              <input type="button" className="subtracao" value="-" onClick={() => operador('-')} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" className="numero" value="1" onClick={() => valorvisor('1')} />
              <input type="button" className="numero" value="2" onClick={() => valorvisor('2')} />
              <input type="button" className="numero" value="3" onClick={() => valorvisor('3')} />
              <input type="button" className="soma" value="+" onClick={() => operador('+')} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" className="botaoAux" value="+/-" onClick={masMenos} />
              <input type="button" className="numero" value="0" onClick={() => valorvisor('0')} />
              <input type="button" className="botaoAux" value="." onClick={punto} />
              <input type="button" className="igual" value="=" onClick={calcular} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
