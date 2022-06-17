import React from "react";

const defaultStyle = {
  fontSize: "25px",
  width: "15px",
  margin: "2px",
  height: "28px",
  border: "1px solid white",
  padding: "10px",
  borderBottom: "2px solid "
};

const PinItem = React.forwardRef(
  ({ length, handleChange, handleBackSpace }, ref) => {
    const handleKeyUp = (e) => {
      switch (e.code) {
        case "Backspace": {
          handleBackSpace && handleBackSpace(e.target.value);
          break;
        }
        case "ShiftLeft":
        case "ShiftRight":
        case "Tab":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowDown":
          break;

        default: {
          handleChange(e.target.value);
        }
      }
    };

    return (
      <div>
        <input
          ref={ref}
          maxLength={length}
          style={defaultStyle}
          onKeyUp={handleKeyUp}
          // onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  }
);

export default PinItem;
