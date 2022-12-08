import React from "react";

const ScreenBox = (props) => {
  return (
    <div className="screenBox">
      <input type="text" id="showComputation" value={props.fig} readOnly />
    </div>
  );
};

export default ScreenBox;
