import React from "react";
import ScreenBox from "./ScreenBox";

const ButtonBox = () => {
  const screen = document.querySelector(".showComputation");
  let buttons = document.querySelectorAll(".btn");
  const equalSign = document.getElementById("total");
  const clearAll = document.getElementById("clear");

  buttons.forEach((button) => {
    if (button !== equalSign) {
      button.addEventListener("click", (e) => {
        screen.value = "";
        let value = e.target.innerHTML;
        screen.value += value;
      });
    }
  });

  clearAll.addEventListener("click", () => {
    screen.value = "0";
  });

  equalSign.addEventListener("click", () => {
    let allInputs = screen.value;
    screen.value.evaluate(allInputs);
  });

  return (
    <div className="buttonBox">
      <div class="btn action-btn" id="clear">
        AC
      </div>
      <div className="btn action-btn"> MC</div>
      <div className="btn num-btn  action-btn"> %</div>
      <div className="btn num-btn  calc-action-btn"> /</div>
      <div className="btn num-btn seven">7</div>
      <div className="btn num-btn eight">8</div>
      <div className="btn num-btn  nine">9</div>
      <div className="btn num-btn  calc-action-btn">*</div>
      <div className="btn num-btn  four">4</div>
      <div className="btn num-btn  five">5</div>
      <div className="btn num-btn  six">6</div>
      <div className="btn num-btn  calc-action-btn">-</div>
      <div className="btn num-btn  one">1</div>
      <div className="btn num-btn  two">2</div>
      <div className="btn num-btn  three">3</div>
      <div className="btn num-btn  calc-action-btn">+</div>
      <div className="btn num-btn  zero">0</div>
      <div className="btn num-btn  point">.</div>
      <div className="btn calc-action-btn" id="total">
        =
      </div>
    </div>
  );
};

export default ButtonBox;
