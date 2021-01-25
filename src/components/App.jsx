import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Home } from './Home';
import { Schedule } from './Schedule';
import { NewBooking } from './NewBooking';
import { NavBar } from './NavBar';


function App() {

  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/newbooking" component={NewBooking} />
      <Route exact path="/schedule" component={Schedule} />
    </Switch>
    </>
  );
}

export default App;
