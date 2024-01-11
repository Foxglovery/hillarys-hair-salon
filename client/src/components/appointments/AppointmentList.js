import { useEffect, useState } from "react";
import { GetAppointments } from "../../data/appointmentData";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import "./AppointmentList.css"
export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    GetAppointments().then(setAppointments);
  }, []);

  return (
    <div className="appointment-card-container">
      {appointments.map((a) => (
        <MDBCard className="appointment-card" alignment="center">
        <MDBCardHeader>{a.customer.firstName} {a.customer.lastName}</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText> <span className="bold-big">Will Undergo</span>
            {a.services.map((s) => (
                <div>{s.name}</div>
            ))}
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className="text-muted">{a.stylist.firstName}</MDBCardFooter>
      </MDBCard>
      ))};
      
    </div>
  );
}
