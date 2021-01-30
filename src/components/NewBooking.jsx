import { NewBookingForm, BookingLabel} from '../styles/NewBooking'

export function NewBooking() {
  return (
  <NewBookingForm>
  <BookingLabel for="session">Session</BookingLabel>
    <select name="session" id="session">
      <option value ="Vinyasa Flow">Vinyasa Flow</option>
      <option value ="Power Flow">Power Flow</option>
      <option value ="Restorative Flow">Restorative Flow</option>
    </select>
    <BookingLabel  htmlFor="date">Date</BookingLabel>
    <input type="text" name="date" id="date"/>
    <BookingLabel htmlFor="Client Name">Client Name</BookingLabel>
    <input type="text" name="Client Name" id="Client Name"/>
    </NewBookingForm> 
  )
}