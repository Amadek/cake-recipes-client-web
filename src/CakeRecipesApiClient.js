import Axios from 'axios';

export class CakeRecipesApiClient {
  getRecipesByName (recipeName) {
    return Promise.resolve()
      .then(() => Axios.get(`http://localhost:4000/recipe/name/${recipeName}`))
      .then(res => res.data);
  }

  getRecipe (recipeId) {
    return Promise.resolve()
      .then(() => Axios.get(`http://localhost:4000/recipe/id/${recipeId}`))
      .then(res => res.data);
  }
}
