import React from "react";

type QuantityInputPropTypes = {
  onChange: (value: number) => void;
};

const QuantityInput = ({ onChange }: QuantityInputPropTypes) => {
  const [value, setValue] = React.useState(0);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  };

  const decrement = () => {
    const newValue = value - 1;
    if (newValue < 0) {
      return;
    }
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <fieldset data-quantity>
        <button className="sub" title="Down" onClick={decrement}>
          Down
        </button>
        <input
          value={value}
          type="number"
          name="quantity"
          pattern="[0-9]+"
          readOnly
        />
        <button className="add" title="Up" onClick={increment}>
          Up
        </button>
      </fieldset>
    </div>
  );
};

export default QuantityInput;
