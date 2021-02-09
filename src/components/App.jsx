import { Route, Switch } from 'react-router-dom'
import { Home } from './Home';
import { Schedule } from './Schedule';
import { Bookings } from './Bookings';
import { NewBooking } from './NewBooking';
import { NavBar } from './NavBar';
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { UpdateSession } from "./UpdateSession";
import { CreateSession } from "./CreateSession";
import { Success } from "./Success";
import { Cancel } from "./Cancel";

function App() {

  return (
    <>
      <Switch>
        <ProtectedRoute exact path="/new-booking" component={NewBooking} />
        <ProtectedRoute exact path="/bookings" component={Bookings} />
        <ProtectedRoute exact path="/create-session" component={CreateSession} />
        <ProtectedRoute exact path="/session/:id/update" component={UpdateSession} />
        <ProtectedRoute exact path="/success/:id" component={Success} />
        <ProtectedRoute exact path="/cancel" component={Cancel} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <NavBar auth={false}>
          <Route exact path="/" component={Home} />
          <Route exact path="/schedule" component={Schedule} />
        </NavBar>
      </Switch>
    </>
  );
}

export default App;
