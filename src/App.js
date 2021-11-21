import './App.css';
import React, { useEffect, useState } from 'react';
import apiCep from './Apicep';

function App() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState([]);
  const [btn, setBtn] = useState(true);

  useEffect(()=>{
    apiCep.get(`${cep}/json/`)
    .then((response)=>{
      setDados(response.data)
    })
    .catch((erro)=>{
      console.log('erro')
    })
  }, [cep]);

  return (
    <div className="App">
      <section className='consulta'>
        <h1>---- CONSULTAR CEP ----</h1>
        <input type='number' name='cep' placeholder='ex: 55500000' onChange={(e) => setCep(e.target.value)} />
        <button type='button' onClick={() => btn? setBtn(false) : setBtn(true)}>Buscar</button>
      </section>

      <section className='return-dados'>
        <h2>CEP {dados.cep}</h2>
        <p> {dados.localidade} - {dados.uf} </p>  
        <aside className='container-dados'>
          <div className='dados'>
            <p><span>Logradouro:</span> {dados.logradouro} </p>
            <p><span>CEP:</span> {dados.cep} </p>
            <p><span>Bairro:</span> {dados.bairro} </p>
          </div>
          <div className='dados'>
            <p><span>Cidade:</span> {dados.localidade} </p>
            <p><span>UF:</span> {dados.uf} </p>
            <p><span>DDD:</span> {dados.ddd} </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default App;
