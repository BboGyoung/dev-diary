import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import routes from './routes';

const App = () => {

return(
  <Router>
    <Menu />
    <div>
      <Switch>
      {routes.map((route) => {
        return <Route key={route.path} exact path={route.path} component={route.component} />
      })}
      </Switch>
    </div>
  </Router>
);

}

export default App;