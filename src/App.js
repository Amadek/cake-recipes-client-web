import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import { SearchTabWithRouter } from './SearchTab';
import { RecipeDetailsWithRouter } from './RecipeDetails';
import { AppContext } from './AppContext';
import { CakeRecipesApiClient } from './CakeRecipesApiClient';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.appContext = {
      cakeRecipesApiClient: new CakeRecipesApiClient()
    };
  }

  render () {
    return (
      <AppContext.Provider value={this.appContext}>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/recipe/:recipeId'>
              <RecipeDetailsWithRouter />
            </Route>
            <Route path='/'>
              <SearchTabWithRouter />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}
