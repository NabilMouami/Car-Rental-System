import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Register from './components/register/Register';
import Vehicules from './components/vehicules/Vehicules';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import GetRentalCar from './components/services/car-rental/GetRentalCar';
import RentalCar from './components/services/car-rental/RentalCar';
import Cart from './components/services/car-rental/cart-car/Cart';
import Selling from './components/services/selling/Selling';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/register" component={Register} />
         <Route exact path="/vehicules" component={Vehicules} />      
         <Route exact path="/services" component={Services} />      
         <Route exact path="/contact" component={Contact} />   
         <Route exact path="/car-rental/" component={GetRentalCar} />   
         <Route exact path="/car-rental/:id" component={RentalCar} />   
         <Route exact path="/cart" component={Cart} />   
         <Route exact path="/services/selling" component={Selling} />   
         <Route exact path="/reviews" component={Reviews} />   

         
      </Switch>
    </Router>
  );
}

export default App;
