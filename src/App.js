//Crie um component de class
//Crie um array de objetos no STATE com pelo menos 6 objetos
//Faça um map do seu state e exiba os dados na tela

import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    flores: [
      {
        nome: "Alpínia",
        alturaMediaMetros: 4,
        corPetala: "vermelho"
      },
      {
        nome: "Hortênsia",
        alturaMediaMetros: 1.74,
        corPetala: "diversas"
      },
      {
        nome: "Rosa",
        alturaMediaMetros: 1,
        corPetala: "vermelho"
      },
      {
        nome: "Copo-de-leite",
        alturaMediaMetros: 0.9,
        corPetala: "branco"
      },
      {
        nome: "Papoula",
        alturaMediaMetros: 1.5,
        corPetala: "vermelho"
      },
      {
        nome: "Cravo",
        alturaMediaMetros: 1,
        corPetala: "diversos"
      },
      {
        nome: "Margarida",
        alturaMediaMetros: 0.6,
        corPetala: "branco"
      }
    ]
  };

  render() {
    return (
      <nav>
        {this.state.flores.map((item) => (
          <section>
            <ul>
              <li>Nome popular da flor: {item.nome}</li>
              <li>Altura: {item.alturaMediaMetros} metros</li>
              <li>Cor da Pétala: {item.corPetala}</li>
            </ul>
          </section>
        ))}
      </nav>
    );
  }
}
