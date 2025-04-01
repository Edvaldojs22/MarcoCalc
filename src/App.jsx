import './app.css'
import { MdClose } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { FaAppleWhole } from "react-icons/fa6";
import { GiChickenLeg } from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import { LuBeef } from "react-icons/lu";
import { MdOutlineEgg } from "react-icons/md";
import { GiCoffeeBeans } from "react-icons/gi";
import alimentos from "./alimentos/alimentos.json";
import { FaCheck } from "react-icons/fa";


function App() {

  //Fução para aparecer alimentos a cada 5 segundos
  const imagens = [FaAppleWhole, GiChickenLeg, FaFish, LuBeef, MdOutlineEgg, GiCoffeeBeans];
  const [imagemIndex, setImagemIndex] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 5000);

    return () => clearInterval(intervalo)
  })
  //---



  //Variável responsavel por manipular elementos da tela
  const [visivel, setVisivel] = useState(false);
  const [infos, setInfos] = useState(false)
  const [botao, setBotao] = useState("Confirmar")
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
      setAlimento("Não encontrado")
      setTimeout(() => {
        setAlimento("")
      }, 3000)
      return;
    }

    const filtrado = alimentos.filter((item) => {
      return item.nome.toLocaleLowerCase().includes(alimento.toLocaleLowerCase())
    });

    if (filtrado.length == 0) {
      setAlimento("Não encontrado")

      setTimeout(() => {
        setAlimento("")
      }, 3000)

      return;
    } else {
      {
        setListaAlimento((prevLista) => [...prevLista, ...filtrado]);
        setBotao("FaCheck")

      }
    }

    setTimeout(() => {
      setBotao("Confirmar");
      setAlimento("dsad")
    }, 3000)

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

      <main style={{ filter: visivel ? "blur(6px)" : "none" }} >
        <h1 style={{ marginBottom: infos ? "100" : "40px" }}>Monte seu prato</h1>
        <section style={{ marginTop: infos ? "0px" : "30px" }} className='painelInformaçoesMacros'>


          <div style={{ width: infos ? "100%" : "200px", height: infos ? "300px" : "100px", gap: infos ? "100px" : "0", opacity: infos ? "1" : "0" }} className='caixaInfos'>
            <div className='caixaMacros'>
              <p >{(carbo * quantidade).toFixed(1)}g</p>
              <p className='descricaoNutricional'>Carbo</p>
            </div>
            <div className='caixaMacros'>
              <p>{(caloria * quantidade).toFixed(1)}g</p>
              <p className='descricaoNutricional'>Caloria</p>
            </div>

            <div className='caixaMacros'>
              <p>{(proteina * quantidade).toFixed(1)}g</p>
              <p className='descricaoNutricional'>Proteina</p>
            </div>
            <div className='caixaMacros'>
              <p>{(proteina * quantidade).toFixed(1)}g</p>
              <p className='descricaoNutricional'>Gordura</p>
            </div>
          </div>



          <div className='ciculoAlimento'>
            <div className='iconsIMG' key={imagemIndex}>
              {React.createElement(imagens[imagemIndex])}
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
          <label htmlFor="campoVolume">Medida</label>
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



        <button
          onClick={buscaAlimento}
          style={{
            backgroundImage:
              botao === "Confirmar"
                ? "linear-gradient(to bottom, #F60112, #90010B 62%)"
                : "linear-gradient(to bottom, rgb(119, 246, 1), rgb(78, 153, 9) 62%)",

          }} className='botaoAdicionar'>{botao === "Confirmar" ? "Confirmar" : <FaCheck className='iconCheck' />}</button>

        <MdClose onClick={() => { setVisivel(false); setInfos(true) }} className='iconsClose' />

      </section>






    </div>
  )
}

export default App
