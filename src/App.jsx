import './app.css'
import { MdClose } from "react-icons/md";
import { useState, useEffect } from 'react';
import alimentos from "./alimentos/alimentos.json";
import { FaCheck } from "react-icons/fa";


function App() {

  const imagens = {
    
  }


  //Variável responsavel por manipular a tela Add alimento
  const [visivel, setVisivel] = useState(false);
  const [infos, setInfos] = useState(false);

  console.log(visivel)
  //---

  //Variáveis para exibição
  const [carbo, setCarbo] = useState(0);
  const [proteina, setProteina] = useState(0);
  const [caloria, setCaloria] = useState(0);
  //---

  const [quantidade, setQuantidade] = useState(0); //Usanda para calcular os macros totais

  const [listaAlimentos, setListaAlimento] = useState([]);
  const [alimento, setAlimento] = useState("");


  //Codigo responsavel por filtra o alimento do input e colocar na lista alimentos selecionados
  const buscaAlimento = (event) => {
    event.preventDefault();

    if (!alimento.trim()) {
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
      <div className='barraApp cima'>

      </div>
      <div className='barraApp baixo'>
      </div>

      <main style={{ filter: visivel ? "blur(6px)" : "none" }} >

        <section style={{ marginTop: infos ? "0px" : "100px" }} className='painelInformaçoesMacros'>
          <h1>Customize Your Dish</h1>


          <div className='painelMacros'>
            <div style={{ display: infos ? "block" : "none" }} className='caixaMacros'>
              <p style={{ display: infos ? "block" : "none" }}>{(carbo * quantidade).toFixed(1)}g</p>
              <p style={{ display: infos ? "block" : "none" }} className='descricaoNutricional'>Carbo</p>
            </div>
            <div style={{ display: infos ? "block" : "none" }} className='caixaMacros'>
              <p>{(caloria * quantidade).toFixed(1)}g</p>
              <p className='descricaoNutricional'>Caloria</p>
            </div>
          </div>

          <div className='ciculoAlimento'>

          </div>

          <div className='painelMacros'>
            <div style={{ display: infos ? "block" : "none" }} className='caixaMacros'>
              <p>{(proteina * quantidade).toFixed(1)}g</p>
              <p className='descricaoNutricional'>Proteina</p>
            </div>
            <div style={{ display: infos ? "block" : "none" }} className='caixaMacros'>
              <p>{(proteina * quantidade).toFixed(1)}g</p>
              <p className='descricaoNutricional'>Gordura</p>
            </div>
          </div>

        </section>


        <ul style={{ display: infos ? "block" : "none" }} >
          {listaAlimentos.map((a, index) => (
            <li key={index}>{a.nome} {quantidade}g<FaCheck className='iconCheck' /></li>
          ))}
        </ul>

        <button onClick={() => setVisivel(true)} className='botaoAdd'>
          Adicionar
        </button>

      </main>

      <section style={{ display: visivel ? "block" : "none" }} className='painelOpcoes'>
        <div>
          <label htmlFor="campoFood">Comida</label>
          <input
            id="food"
            type="text"
            value={alimento}
            onChange={(e) => setAlimento(e.target.value)}
            required />
        </div>

        <div>
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



        <button onClick={buscaAlimento} className='botaoAdicionar'>Confirmar</button>

        <MdClose onClick={() => { setVisivel(false); setInfos(true) }} className='iconsClose' />

      </section>






    </div>
  )
}

export default App
