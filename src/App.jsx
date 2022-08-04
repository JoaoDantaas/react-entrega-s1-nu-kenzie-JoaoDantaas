import nuKenzie from "./Nu Kenzie.png";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import userEvent from "@testing-library/user-event";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesas", value: -2000 },
  ]);
  const [filter, setFilter] = useState([]);

  function addList(newList) {
    setListTransactions([...listTransactions, newList]);
  }

  function handleList(item) {
    const itensFiltrados = listTransactions.filter((elem) => {
      return elem !== item;
    });
    setListTransactions(itensFiltrados);
  }

  function filterAll() {
    const itensFiltrados = listTransactions.filter((elem) => {
      return elem;
    });
    setListTransactions(itensFiltrados);
  }
  // function filterEntry() {
  //   const itensFiltrados = listTransactions.filter((elem) => {
  //     return elem.type === "Entrada";
  //   });
  //   setFilter(itensFiltrados);
  // }
  // function filtreDespesas() {
  //   const itensFiltrados = listTransactions.filter((elem) => {
  //     return elem.type === "Despesas";
  //   });
  //   setFilter(itensFiltrados);
  // }

  return (
    <div className="App">
      <header>
        <img src={nuKenzie} alt="hahah"></img>
        <button>Início</button>
      </header>
      <div className="container">
        <div className="container-form">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            addList={addList}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="conatiner-big">
          <div className="container-nav">
            <h1 className="resume">Resumo financeiro</h1>
            <nav>
              <button id="todos" className="button-click" onClick={filterAll}>
                Todos
              </button>
              <button id="entradas">Entradas</button>
              <button id="despesas">Despesas</button>
            </nav>
          </div>

          <List listTransactions={listTransactions} handleList={handleList} />
        </div>
      </div>
    </div>
  );
}

export default App;
