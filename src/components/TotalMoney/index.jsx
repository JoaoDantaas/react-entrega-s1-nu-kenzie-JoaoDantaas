import "./style.css";

function TotalMoney({ listTransactions }) {
  return listTransactions.length > 0 ? (
    <>
      <div className="container-money">
        <div className="container-total">
          <h2 className="text-total">Valor total:</h2>
          <h2 className="value-total">
            $
            {listTransactions.reduce(
              (previousValue, currentValue) =>
                previousValue + currentValue.value,
              0
            )}
          </h2>
        </div>
        <h3 className="ref">O valor se refere ao saldo</h3>
      </div>
    </>
  ) : (
    <></>
  );
}

export default TotalMoney;
