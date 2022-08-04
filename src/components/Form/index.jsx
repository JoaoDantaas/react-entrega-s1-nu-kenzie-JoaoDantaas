import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions, addList }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  function teste() {
    addList(
      select === "Despesas"
        ? {
            description: description,
            type: select,
            value: Number(-value),
          }
        : {
            description: description,
            type: select,
            value: Number(value),
          }
    );
  }

  return (
    <>
      <form onSubmit={(event) => teste(event.preventDefault())}>
        <div>
          <h2 className="h2-form">Descrição</h2>
          <input
            className="input-description"
            required
            placeholder="Digite aqui sua descrição"
            type={"text"}
            onChange={(event) => setDescription(event.target.value)}
          ></input>
          <h3 className="example">Ex: Compra de roupas</h3>
        </div>
        <div className="contanier-values">
          <div>
            <h2 className="h2-form">Valor</h2>
            <input
              className="input-value"
              required
              placeholder="1"
              type={"number"}
              onChange={(event) => setValue(event.target.value)}
            ></input>
          </div>
          <div>
            <h2 className="h2-form">Tipo de valor</h2>
            <select
              className="input-exit"
              onClick={(event) => {
                setSelect(event.target.value);
              }}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesas">Despesas</option>
            </select>
          </div>
        </div>
        <button className="button-form" type="submit">
          Inserir valor
        </button>
      </form>
    </>
  );
}

export default Form;
