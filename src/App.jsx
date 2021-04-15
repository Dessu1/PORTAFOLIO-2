import "./App.scss";
import Home from "./views/Home";
import Estudios from "./views/Estudios";
import Habilidades from "./views/Habilidades";
import Contactame from "./views/Contactame";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/estudios' component={Estudios} />
        <Route exact path='/habilidades' component={Habilidades} />
        <Route exact path='/contactame' component={Contactame} />
      </Switch>
    </Router>
  );
}

export default App;
