import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// Context
import Global from './Context/Global/Global'
// Components
import Navigation from './components/Navigation'
// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Product from './pages/Product'

function App() {

  return (
    <Global>
        <Router>
        <div>
          <Navigation />
        </div>

        <div className="container mt-5">
        <Switch>
          
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
          <Route path="/home/:id"
          render={props => <Product id={props.match.params.id}/> }
          />
          <Route path="/home" component={ Home } />
          <Redirect from="/" to="/home" />

        </Switch>
        </div>
        </Router>
    </Global>

    )

  }
export default App