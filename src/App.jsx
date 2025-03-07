import './app.css'
import iconLobo from '../src/assets/lobo.png';
import Menu from './components/menu/Menu'
import { FaRegCircleCheck } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";

function App() {
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
            <div>
              <label htmlFor="campoFood">Food</label>
              <input type="text" name="" id="food"  required />
            </div>
            <div>
              <label htmlFor="campoVolume">Volume</label>
              <input type="text" name="" id="volume"  required />
            </div>
            <button > <FaRegCircleCheck className='iconComfirm'/> </button>
          </form>
          <button></button>

        </section>

        < SlReload className='iconReload'/>

      </main>

    </div>
  )
}

export default App
