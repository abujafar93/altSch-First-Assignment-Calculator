import React, { useState } from "react";
import ScreenBox from "./ScreenBox";

const ButtonBox = () => {
  // const buttons = document.querySelectorAll(".btn");

  const [result, setResult] = useState(0);
  const [backkey, setBackkey] = useState("");

  const clearAllInputs = () => {
    setResult(() => {
      return 0;
    }, []);
  };

  //   buttons.forEach((button) => {
  //   button.addEventListener("click", (e) => {
  //     let value = e.target.innerHTML;

  //     let preValue = backkey;

  //     if (value.trim() === "=") {
  //       setResult(() => {
  //         return eval(result);
  //       });
  //     } else if (value.trim() === "CE") {
  //       setResult((prev) => {
  //         return prev.slice(0, -1);
  //       });
  //     } else {
  //       setResult((prev) => {
  //         if (prev === 0) {
  //           return value;
  //         } else if (preValue === "." && value === ".") {
  //           return prev;
  //         }

  //         return result.includes(".") && value === "." ? prev : prev + value;
  //       });
  //     }

  //     setBackkey(() => {
  //       return value;
  //     });
  //   });
  // });

  const clickHandler = (e) => {
    let value = e.target.innerHTML;

    let preValue = backkey;

    if (value.trim() === "=") {
      setResult(() => {
        return eval(result);
      });
    } else if (value.trim() === "CE") {
      setResult((prev) => {
        return prev.slice(0, -1);
      });
    } else {
      setResult((prev) => {
        if (prev === 0) {
          return value;
        } else if (preValue === "." && value === ".") {
          return prev;
        }

        return result.includes(".") && value === "." ? prev : prev + value;
      });
    }

    setBackkey(() => {
      return value;
    });
  };

  return (
    <>
      <ScreenBox fig={result} />
      <div className="buttonBox">
        <div className="btn action-btn" id="clear" onClick={clearAllInputs}>
          AC
        </div>
        <div className="btn action-btn" onClick={clickHandler}>
          CE
        </div>
        <div className="btn num-btn  action-btn" onClick={clickHandler}>
          {" "}
          %
        </div>
        <div className="btn num-btn  calc-action-btn" onClick={clickHandler}>
          {" "}
          /
        </div>
        <div className="btn num-btn seven" onClick={clickHandler}>
          7
        </div>
        <div className="btn num-btn eight" onClick={clickHandler}>
          8
        </div>
        <div className="btn num-btn  nine" onClick={clickHandler}>
          9
        </div>
        <div className="btn num-btn  calc-action-btn" onClick={clickHandler}>
          *
        </div>
        <div className="btn num-btn  four" onClick={clickHandler}>
          4
        </div>
        <div className="btn num-btn  five" onClick={clickHandler}>
          5
        </div>
        <div className="btn num-btn  six" onClick={clickHandler}>
          6
        </div>
        <div className="btn num-btn  calc-action-btn" onClick={clickHandler}>
          -
        </div>
        <div className="btn num-btn  one" onClick={clickHandler}>
          1
        </div>
        <div className="btn num-btn  two" onClick={clickHandler}>
          2
        </div>
        <div className="btn num-btn  three" onClick={clickHandler}>
          3
        </div>
        <div className="btn num-btn  calc-action-btn" onClick={clickHandler}>
          +
        </div>
        <div className="btn num-btn  zero" onClick={clickHandler}>
          0
        </div>
        <div className="btn num-btn  point" onClick={clickHandler}>
          .
        </div>
        <div className="btn calc-action-btn" id="total" onClick={clickHandler}>
          =
        </div>
      </div>
    </>
  );
};

export default ButtonBox;
