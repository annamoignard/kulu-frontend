import { Route, Switch } from 'react-router-dom'
import { Home } from './Home';
import { Schedule } from './Schedule';
import { Bookings} from './Bookings';
import { NewBooking } from './NewBooking';
import { NavBar } from './NavBar';
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { UpdateSession } from "./UpdateSession";
import { CreateSession } from "./CreateSession";

function App() {

  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new-booking" component={NewBooking} />
      <Route exact path="/bookings" component={Bookings} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/create-session" component={CreateSession} />
      <Route exact path="/session/:id/update" component={UpdateSession} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>
    </>
  );
}

export default App;
