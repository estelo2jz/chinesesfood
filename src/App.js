import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

import './styles/main.scss';

import Home from './components/Home';
import Menu from './components/Menu';
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
import Coupon from './components/Coupon';
import Map from './components/Map';
import Cart from './components/Cart';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

// Menu Options Pages
import LunchSpecial from './components/Menu/BrowseMenu/LunchSpecial';
import Soup from './components/Menu/BrowseMenu/Soup';
import Appetizers from './components/Menu/BrowseMenu/Appetizers'
import FriedRice from './components/Menu/BrowseMenu/FriedRice';
import LoMien from './components/Menu/BrowseMenu/LoMien';
import MaiFun from './components/Menu/BrowseMenu/MaiFun';
import ChopSuey from './components/Menu/BrowseMenu/ChopSuey';
import Chicken from './components/Menu/BrowseMenu/Chicken';
import Pork from './components/Menu/BrowseMenu/Pork';
import Beef from './components/Menu/BrowseMenu/Beef';
import SeaFood from './components/Menu/BrowseMenu/SeaFood';
import EggFooYoung from './components/Menu/BrowseMenu/EggFooYoung';
import Vegetables from './components/Menu/BrowseMenu/Vegetables';
import SweetSour from './components/Menu/BrowseMenu/SweetSour';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="App-nav-container">
        <TopNav />
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/coupon" component={Coupon} />
        <Route path="/map" component={Map} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/cart" component={Cart} />

        {/* Menu Option Pages */}
        <Route path="/lunchspecial" component={LunchSpecial} />
        <Route path="/soup" component={Soup} />
        <Route path="/appetizers" component={Appetizers} />
        <Route path="/friedrice" component={FriedRice} />
        <Route path="/lomien" component={LoMien} />
        <Route path="/maifun" component={MaiFun} />
        <Route path="/chopsuey" component={ChopSuey} />
        <Route path="/chicken" component={Chicken} />
        <Route path="/pork" component={Pork} />
        <Route path="/beef" component={Beef} />
        <Route path="/seafood" component={SeaFood} />
        <Route path="/eggfooyoung" component={EggFooYoung} />
        <Route path="/vegetables" component={Vegetables} />
        <Route path="/sweetsour" component={SweetSour} />

      </Switch>
      {/* <Footer /> */}
    </Router>
  </div>
  );
}

export default App;
