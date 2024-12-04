import { formatter } from "../util/investment";

export const Result = ({ finalData }) => {
  let accumulatedInterest = 0;
  return finalData.length === 0 ? (
    <p className="center">Enter a valid duration</p>
  ) : (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interst(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {finalData.map((data, index) => {
          accumulatedInterest += data.interest;
          return (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(accumulatedInterest)}</td>
              <td>
                {formatter.format(data.valueEndOfYear - accumulatedInterest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
