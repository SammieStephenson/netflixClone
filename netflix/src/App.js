import Moviedesc from "./components/moviedesc/Moviedesc";
import Navbar from "./Navbar"
// import Home from "./Home"
import Login from "./pages/login/Login"
// import Gallery from "./Gallery"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "./Footer"

export default function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
<Moviedesc />

