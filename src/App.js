import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';

const App = () => {

return(
  <Router>
    <Menu />
    <div>
      <Switch>
        <Route path="/" exact>
          Home Page
        </Route>
      </Switch>
    </div>
  </Router>
);

}

export default App;