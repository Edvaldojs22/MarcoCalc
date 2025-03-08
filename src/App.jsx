import './app.css'
import iconLobo from '../src/assets/lobo.png';
import Menu from './components/menu/Menu'
import { SlReload } from "react-icons/sl";
import { useState, useEffect } from 'react';
import alimentos from "./alimentos/alimentos.json";
import { FaCheck } from "react-icons/fa";


function App() {

  const [carbo, setCarbo] = useState(0);
  const [proteina, setProteina] = useState(0);
  const [caloria, setCaloria] = useState(0);

  const [quantidade, setQuantidade] = useState(1);


  const [listaAlimentos, setListaAlimento] = useState([]);

  const [alimento, setAlimento] = useState("");


  //Codigo responsavel por filtra o alimento do input e colocar na lista alimentos selecionados
  const buscaAlimento = (event) => {
    event.preventDefault();

    if(!alimento.trim()){
      alert("Por favor, preencha todos os campos antes de adicionar.");
      return;
    }

    const filtrado = alimentos.filter((item) => {
      return item.nome.toLocaleLowerCase().includes(alimento.toLocaleLowerCase())
    });

    if (filtrado.length == 0) {
      console.log("Alimento não encontrado");
      return;
    } else {
      {
        setListaAlimento((prevLista) => [...prevLista, ...filtrado]);

      }
    }
 
  }

  // Responsavel por fazer a somas dos nutrientes dos alimentos
  useEffect(() => {
    const totalCarbo = listaAlimentos.reduce((acc, item) => acc + item.carboidrato, 0);
    const totalProteina = listaAlimentos.reduce((acc, item) => acc + item.proteina, 0);
    const totalCaloria = listaAlimentos.reduce((acc, item) => acc + item.calorias, 0);


    setCarbo(totalCarbo);
    setProteina(totalProteina);
    setCaloria(totalCaloria);
  }, [listaAlimentos]);




  return (
    <div className='app'>
      <Menu />
      <main>
        <div className='caixaImg'>
          <img src={iconLobo} alt="lobo" className='iconLobo' />
        </div>




        <section className='painelValorNutricinal'>

          <div className='bolasValores'>
            <p>{(carbo * quantidade).toFixed(2)}g</p>
            <p className='descricaoNutricional'>Carbo</p>
          </div>

          <div className='bolasValores'>
            <p>{(caloria * quantidade).toFixed(2)}g</p>
            <p className='descricaoNutricional'>Kcal</p>
          </div>

          <div className='bolasValores'>
            <p>{(proteina * quantidade).toFixed(2)}g</p>
            <p className='descricaoNutricional'>Protein</p>

          </div>
        </section>

        <h1>Customize Your Dish</h1>


        <section className='painelComidas'>
          <form className='fromularioComidaVolume' action="">
            <div className='painelIpuntoFood'>
              <div className='painelSugestao'>

              </div>
              <label htmlFor="campoFood">Comida</label>
              <input
                id="food"
                type="text"
                value={alimento}
                onChange={(e) => setAlimento(e.target.value)}
                required />
            </div>
            <div className='painelIpuntVolume'>
              <label htmlFor="campoVolume">medida</label>
              <input
                type="text"
                name=""
                id="volume"
                value={quantidade}
                onChange={(e) => {
                  setQuantidade(e.target.value);
                }}
                required />

              <select id="unidade" name="unidade">
                <option value="g">g</option>
                <option value="ml">ml</option>
              </select>

            </div>
            <button onClick={buscaAlimento} className='botaoAdicionar'>Adicionar</button>

          </form>
           <ul className='listaAlimentos'>
            {listaAlimentos.map((a, index) =>(
              <li key={index}>{a.nome} {quantidade}g<FaCheck className='iconCheck'/></li>
            ))}

          </ul> 


        </section>


        < SlReload className='iconReload' />

      </main>

    </div>
  )
}

export default App
