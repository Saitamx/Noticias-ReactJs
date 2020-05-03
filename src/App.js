import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  // Definir la categoria y noticias
  const[categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const apiKey = 'fdff6ece32014acb854f944ad7bf7b8c'
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria])


  return (
    <>
      <Header titulo="Buscador de Noticias"/>

      <div className="container-white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias noticias={noticias}/>
      </div>
    </>
  );
}

export default App;
