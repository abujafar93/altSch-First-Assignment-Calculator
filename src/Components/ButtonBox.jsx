import React, { useState } from "react";
import ScreenBox from "./ScreenBox";

const ButtonBox = () => {
  // const screen = document.getElementById("showComputation");
  // const buttons = document.querySelectorAll(".btn");
  // const equalSign = document.getElementById("total");
  // const clearAll = document.getElementById("clear");

  const [result, setResult] = useState(0);
  const [backkey, setBackkey] = useState("");
  const clearAllInputs = () => {
    setResult(() => {
      return 0;
    }, []);
  };

  const clickHandler = (e) => {
    let value = e.target.innerHTML;

    let preValue = backkey;
    console.log(preValue);

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
        // console.log("default");
        if (prev === 0) {
          // console.log("zeroIf");
          return value;
        } else if (preValue === "." && value === ".") {
          // console.log("pointIf");
          return prev;
        }

        return result.includes(".") && value === "." ? prev : prev + value;
      });
    }

    setBackkey(() => {
      return value;
    });

    // equalSign.addEventListener("click", () => {
    //   let AllInputs = value;
    //   setResult(() => {
    //     return value.evaluate(AllInputs);
    //   });
    // });
  };

  // equalSign.addEventListener("click", () => {
  //   let allInputs = ;
  //   screen.value.evaluate(allInputs);
  // });

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
