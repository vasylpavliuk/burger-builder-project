import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {Object.keys(props.ingredients).map((ingredient) => (
        <BuildControl
          key={ingredient}
          label={ingredient}
          addIngredient={props.addIngredient}
          deductIngredient={props.deductIngredient}
          disabled={props.disabled[ingredient]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
  );
};

export default buildControls;
