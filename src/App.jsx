import { useState } from "react";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { UserInput } from "./components/UserInput";
import "./index.css";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const finalData = calculateInvestmentResults(inputData);

  function handleInputChange(name, value) {
    setInputData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} inputData={inputData} />
      <Result finalData={finalData} />
    </>
  );
}

export default App;
