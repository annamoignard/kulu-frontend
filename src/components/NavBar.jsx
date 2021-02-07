import { useHistory } from 'react-router-dom';
import { Nav, NavLink } from '../styles/Nav';

export function NavBar(props) {
  const history = useHistory()

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login")
  }

  if (!props.auth) {
    return (
      <>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/schedule">Timetable</NavLink>
          <NavLink to="/bookings">My Bookings</NavLink>
          <NavLink to="/" onClick={logout}>Logout</NavLink>
        </Nav>
        {props.children}
      </>
    )
  } else {
    return (
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/schedule">Timetable</NavLink>
        {props.isInstructor && (
          <>
            <NavLink to="/create-session">Add Class</NavLink>
          </>
        )}
        <NavLink to="/" onClick={logout}>Logout</NavLink>
      </Nav>
    );
  }
}