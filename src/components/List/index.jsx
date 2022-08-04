import ButtonTrash from "./ButtonTrash.png";
import noCard from "./NoCard.png";
import "./style.css";

function List({
  listTransactions,
  handleList,
  filterAll,
  filterEntry,
  filtreDespesas,
}) {
  return listTransactions.length > 0 ? (
    <ul>
      {listTransactions.map((card, index) => {
        return card.value > 0 ? (
          <li className="positive" key={index}>
            <div className="up">
              <h1 className="card-description">{card.description}</h1>
              <h2 className="card-value">R$ {card.value}</h2>
              <img
                className="card-lixo"
                onClick={() => handleList(card)}
                src={ButtonTrash}
                alt="Lixo"
              />
            </div>
            <h3 className="card-type">{card.type}</h3>
          </li>
        ) : (
          <li className="negative" key={index}>
            <div className="up">
              <h1 className="card-description">{card.description}</h1>
              <h2 className="card-value">R$ {card.value}</h2>
              <img
                className="card-lixo"
                onClick={() => handleList(card)}
                src={ButtonTrash}
                alt="Lixo"
              />
            </div>
            <h3 className="card-type">{card.type}</h3>
          </li>
        );
      })}
    </ul>
  ) : (
    <>
      <div className="container-nothing">
        <h1 className="nothing">Você ainda não possui nenhum lançamento</h1>
        <ul>
          <li>
            <img src={noCard} alt="noCard" />
          </li>
          <li>
            <img src={noCard} alt="noCard" />
          </li>
          <li>
            <img src={noCard} alt="noCard" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default List;
