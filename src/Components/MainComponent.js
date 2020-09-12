import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetails from './DishDetails';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
      // selectedDish : null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({selectedDish : dishId});
    
  // }

  render(){
   const HomePage = () => {
     return(
       <Home />
     )
   }
   return (
    <div className="App">
        <Header />
        {/* <Menu dishes={this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>
        <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />   */}

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
     </div>
    );
  }
}

export default Main;
