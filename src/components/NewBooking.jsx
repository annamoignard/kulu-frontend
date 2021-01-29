export function NewBooking(props) {
  
  return (
  <form>
    <label for="session">Session</label>
    <select name="session" id="session">
      <option value ="Vinyasa Flow">Vinyasa Flow</option>
      <option value ="Power Flow">Power Flow</option>
      <option value ="Restorative Flow">Restorative Flow</option>
    </select>
    <label htmlFor="date">Date</label>
    <input type="text" name="date" id="date"/>
    <label htmlFor="instructor">Instructor</label>
    <input type="text" name="instructor" id="instructor"/>
    </form> 
  )
}
