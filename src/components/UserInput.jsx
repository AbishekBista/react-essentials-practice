export const UserInput = ({ onInputChange, inputData }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => onInputChange(e.target.name, e.target.value)}
            value={inputData["initialInvestment"]}
            name="initialInvestment"
          />
        </div>

        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => onInputChange(e.target.name, e.target.value)}
            value={inputData["annualInvestment"]}
            name="annualInvestment"
          />
        </div>

        <div>
          <label>Initial Investment</label>
          <input
            type="text"
            onChange={(e) => onInputChange(e.target.name, e.target.value)}
            value={inputData["expectedReturn"]}
            name="expectedReturn"
          />
        </div>

        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => onInputChange(e.target.name, e.target.value)}
            value={inputData["duration"]}
            name="duration"
          />
        </div>
      </div>
    </div>
  );
};
