import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContadorComponent } from './ContadorComponent'
import { use } from 'react'
import { useContadorstore } from './store/ContadorStore'

function App() {
  // const [count, setCount] = useState(0)
  const {count, setCount, listaNumeros, eliminarItem, resetear} = useContadorstore()

  const handleEliminarItem = (index) => {
    eliminarItem(index)
  }



  return (
    <>
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={resetear}>Reset</button>

        <div>
          <h2>Valores acomulados de contador:</h2>
          <ul>
            {
              listaNumeros.map((item, index) => {
                return (
                  <div  key={index}>
                    <li>{item} <button onClick={() => handleEliminarItem(index)}>eliminar</button></li>   
                  </div>
                )
              })
            }
          </ul>
        </div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount({numero:2})}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
