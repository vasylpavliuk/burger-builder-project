import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 1.7,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchaseable: false,
    };
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.deductIngredientHandler = this.deductIngredientHandler.bind(this);
    this.updatePurchaseState = this.updatePurchaseState.bind(this);
  }

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el);
    this.setState({
      purchaseable: sum > 0,
    });
  }

  addIngredientHandler(ingredient) {
    if (this.state.ingredients[ingredient] < 3) {
      let ingredients = { ...this.state.ingredients };
      ingredients[ingredient]++;
      let priceAddition = INGREDIENT_PRICES[ingredient];
      let totalPrice = this.state.totalPrice + priceAddition;
      this.setState({ ingredients: ingredients, totalPrice: totalPrice });
      this.updatePurchaseState(ingredients);
    }
  }

  deductIngredientHandler(ingredient) {
    if (this.state.ingredients[ingredient] > 0) {
      let ingredients = { ...this.state.ingredients };
      ingredients[ingredient]--;
      let priceAddition = INGREDIENT_PRICES[ingredient];
      let totalPrice = this.state.totalPrice - priceAddition;
      this.setState({ ingredients: ingredients, totalPrice: totalPrice });
      this.updatePurchaseState(ingredients);
    }
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler}
          deductIngredient={this.deductIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
