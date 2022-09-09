import { useRef, useState } from "react";
import PinItem from "./PinItem";

function PinInput({ noOfBoxes = 4, length = 1, onChange }) {
  const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));

  const arr = new Array(noOfBoxes).fill(0);

  const ref = useRef([]);

  const handleChange = (val, index) => {
    // set the value[index] to new value
    values[index] = val;
    setValues([...values]);

    //move to next input box
    if (val.length === length && index < noOfBoxes - 1) {
      ref.current[index + 1].focus();
    }
    onChange && onChange(values.join(""));
  };

  const handleBackSpace = (val, index) => {
    let temp = values[index];
    values[index] = val;
    if (index > 0 && temp.length === 0) {
      ref.current[index - 1].focus();
    }
    setValues([...values]);
    onChange && onChange(values.join(""));
  };

  // const handlePaste = () => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {arr.map((_, i) => (
        <PinItem
          key={i}
          ref={(el) => {
            ref.current[i] = el;
          }}
          handleChange={(v) => handleChange(v, i)}
          handleBackSpace={(v) => handleBackSpace(v, i)}
          length={length}
        />
      ))}
    </div>
  );
}

export default PinInput;
