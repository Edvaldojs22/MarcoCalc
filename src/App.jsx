import './app.css'
import iconLobo from '../src/assets/lobo.png';
import Menu from './components/menu/Menu'
import { FaRegCircleCheck } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
import { useState } from 'react';
import alimentos from "./alimentos/alimentos.json";

function App() {

  const [food, setFood] = useState("");
  const [volume, setVolume] = useState("");

  const [carbo, setCarbo] = useState(0);
  const [proteina, setProteina] = useState(0);
  const [caloria, setCaloria] = useState(0);




  return (
    <div className='app'>
      <Menu />
      <main>
        <div className='caixaImg'>
          <img src={iconLobo} alt="lobo" className='iconLobo' />
        </div>


        <section className='painelValorNutricinal'>

          <div className='bolasValores'>
            <p>0g</p>
            <p className='descricaoNutricional'>Carbo</p>
          </div>

          <div className='bolasValores'>
            <p>0g</p>
            <p className='descricaoNutricional'>Carbo</p>
          </div>

          <div className='bolasValores'>
            <p>0g</p>
            <p className='descricaoNutricional'>Carbo</p>

          </div>
        </section>

        <h1>Customize Your Dish</h1>


        <section className='painelComidas'>
          <form className='fromularioComidaVolume' action="">
            <div className='painelIpuntoFood'>
              <div className='painelSugestao'>

              </div>
              <label htmlFor="campoFood">Food</label>
              <input
                id="food"
                type="text"
                onChange={(e) => {
                  console.log(e.target.name);
                }}
                name="eu"
              />
            </div>
            <div className='painelIpuntVolume'>
              <label htmlFor="campoVolume">Volume</label>
              <input type="text" name="" id="volume" required />

              <select id="unidade" name="unidade">
                <option value="g">g</option>
                <option value="ml">ml</option>
              </select>

            </div>
            <button > <FaRegCircleCheck className='iconComfirm' /> </button>

          </form>
          <ul className='listaAlimentos'>
            <li>alimento</li>
            <li>alimento</li>
            <li>alimento</li>
            <li>alimento</li>
            <li>alimento</li>
            <li>alimento</li>
          </ul>


        </section>

        < SlReload className='iconReload' />

      </main>

    </div>
  )
}

export default App
