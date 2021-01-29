import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Home } from './Home';
import { Schedule } from './Schedule';
import { Bookings} from './Bookings';
import { NewBooking } from './NewBooking';
import { NavBar } from './NavBar';
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Schedule } from "./Schedule"


function App() {

  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/newbooking" component={NewBooking} />
      <Route exact path="/bookings" component={Bookings} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>
    </>
  );
}

export default App;
