import { useState } from "react";

function CurrencyConvertor() {

  const [rupees, setRupees] = useState("");

  const euroRate = 90;

  function convert() {

    const euro = rupees / euroRate;

    alert("Euro : " + euro.toFixed(2));

  }

  return (

    <div>

      <h2>Currency Convertor</h2>

      <input
        type="number"
        value={rupees}
        onChange={(e)=>setRupees(e.target.value)}
        placeholder="Enter Rupees"
      />

      <button onClick={convert}>
        Convert
      </button>

    </div>

  );

}

export default CurrencyConvertor;