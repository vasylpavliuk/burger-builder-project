import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const buildControls = (props) => {
  return Object.keys(props.ingredients).map((ingredient) => {
    return (
      <div key={ingredient} className={classes.BuildControls}>
        <BuildControl
          label={ingredient}
          addIngredient={props.addIngredient}
          deductIngredient={props.deductIngredient}
        />
      </div>
    );
  });
};

export default buildControls;
