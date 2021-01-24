import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { Schedule } from './Schedule';
import { NewBooking } from './NewBooking';


function App() {
  return (
    <Switch>
      <Route exact path="Home" component={Home} />
      <Route exact path="NewBooking" component={NewBooking} />
      <Route exact path="Schedule" component={Schedule} />
    </Switch>


  );
}

export default App;
