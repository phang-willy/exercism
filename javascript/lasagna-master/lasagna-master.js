/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(reminingTime){
  if (reminingTime <= 0 ) {
    return "Lasagna is done."
  }

  if (reminingTime > 0){
    return "Not done, please wait."
  }

  return "You forgot to set the timer."
}

export function preparationTime(layers, timePerLayerInMinute) {
  const DEFAULT_TIME_PER_LAYER = 2
  const parsedTimePerLayerInMinute =  Number(timePerLayerInMinute)
  const timePerLayer = parsedTimePerLayerInMinute > 0 ? parsedTimePerLayerInMinute : DEFAULT_TIME_PER_LAYER

  return layers.length * timePerLayer
}

export function quantities(layers) {
  const QUANTITY_PER_NOODLE = 50
  const QUANTITY_PER_SAUCE = 0.2
  const recipe = {
    noodles : 0,
    sauce: 0
  }

  for(let layer of layers){
    if (layer === "noodles"){
      recipe.noodles += QUANTITY_PER_NOODLE
    }

    if(layer === "sauce") {
      recipe.sauce += QUANTITY_PER_SAUCE
    }
  }

  return recipe
}

export function addSecretIngredient (friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portionsToCook) {
  const DEFAULT_QUANTITY_PER_PEOPLE = 2;

  const scaledRecipe = {};

  for (const [ingredient, quantity] of Object.entries(recipe)) {
    scaledRecipe[ingredient] = (quantity / DEFAULT_QUANTITY_PER_PEOPLE) * portionsToCook;
  }

  return scaledRecipe;
}
