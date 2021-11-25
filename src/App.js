import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Privacy from './Components/Privacy/Privacy';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AuthProvider from './Components/context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ProductDetails from './Components/Products/ProductDetails/ProductDetails';

function App() {
  return (
    <div>

<AuthProvider>
<Router>
  <Header></Header>
          <Switch>
            <Route exact path="/">
      <Home></Home>
            </Route>
            <Route path="/home">
           <Home></Home>
            </Route>
            <Route path="/login">
           <Login> </Login>
            </Route>
            <PrivateRoute path="/product/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/signup">
           <Signup></Signup>
            </Route>
            <Route path="/about">
             <About></About>
         </Route>
            <Route path="/contact">
              <Contact></Contact>
         </Route>
            <Route path="/privacy">
              <Privacy></Privacy>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
</AuthProvider>





    </div>
  );
}

export default App;
