import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export function Bookings() {
    const [booking, setBooking] = useState([]);
    const [client, setClient] = useState(false);

    function fetchBookings(){
      fetch("http://localhost:3000/bookings", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => res.json())
        .then(({ booking, client }) => {
          setBooking(booking)
          setClient(client)
        });
    }
      useEffect(() => { 
        fetchBookings();
      }, []);
    
      async function onDeleteLinkClick(e, session) {
        try {
          e.preventDefault();
          if (window.confirm("Do you want to drop the class?")) {
            await fetch(
              `http://localhost:3000/sessions/${session.id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
              }
            );
            fetchBookings();
          }
        } catch (err) {
          console.log(err.message);
        }
      }
  return ( 
    <>
    <Link onClick={(e) => onDeleteLinkClick(e)}
      to={`/booking/${booking.id}`}>Remove</Link>
    </>
      );
    
  }