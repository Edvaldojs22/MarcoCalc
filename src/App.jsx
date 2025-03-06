import './app.css'
import iconLobo from '../src/assets/lobo.png';
import Menu from './components/menu/Menu'
import { GiConfirmed } from "react-icons/gi";

function App() {
  return (
    <div className='app'>
      <Menu />
      <main>
        <img src={iconLobo} alt="lobo" className='iconLobo' />

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
          <form action="">
            <div>
              <label htmlFor="campoFood">Food</label>
              <input type="text" name="" id=""  required />
            </div>
            <div>
              <label htmlFor="campoVolume">Volume</label>
              <input type="text" name="" id=""  required />
            </div>
            <button > <GiConfirmed/> </button>


          </form>
          <button></button>

        </section>

      </main>

    </div>
  )
}

export default App
