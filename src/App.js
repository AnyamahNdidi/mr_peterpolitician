import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <div>
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
