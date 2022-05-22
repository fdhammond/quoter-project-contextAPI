import { useState, createContext } from "react";
import { obtainYearDifference, obtainBrandValue, calculatePlan, formatCurrency } from "../helpers/index.js";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    // Una base
    let result = 2000;
    //Obtain difference between years
    const diference = obtainYearDifference(data.year);
    // 3% per year
    result -= ((diference * 3) * result) / 100
    // Europe 30%
    // America 15%
    // Asia 5%
    result *= obtainBrandValue(data.brand)
    // Basic 20%
    // Complete 50%
    result *= calculatePlan(data.plan)
    // Format dollar currency
    result = formatCurrency(result)

    setLoading(true)

    setTimeout(() => {
      setResult(result)
      setLoading(false)
    }, 3000);
  };

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
        result,
        loading
      }}>
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };
export default QuoterContext;
