import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import ClubDetails from './Components/ClubDetails/ClubDetails';

function App() {

  return (
    <>
   <Router>
     <Header></Header>
      <Switch>

      <Route exact path="/">
          <Home />
        </Route>

        <Route path="/club/:idTeam/">
          <ClubDetails />
        </Route>

        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>

        </Switch>
   </Router>
   </>
  );
}

export default App;
