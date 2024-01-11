import { useEffect, useState } from "react";
import { GetStylists } from "../../data/stylistData";
import { Form, Table } from "reactstrap";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./StylistList.css";

export default function StylistList() {
  const [stylists, setStylists] = useState([]);

  useEffect(() => {
    GetStylists().then(setStylists);
  }, []);

  return (
    <div className="stylist-card-container">
      {stylists.map((s) => (
        <MDBCard className="stylist-card" alignment="center">
          {/* removed header and MDBCardText because not needed rn */}
          {/* <MDBCardHeader>Featured</MDBCardHeader> */}
          <MDBCardBody>
            <MDBCardTitle>
              {s.firstName} {s.lastName}
            </MDBCardTitle>

            {s.isActive ? (
              <MDBBtn href="#">Deactivate</MDBBtn>
            ) : (
              <MDBBtn href="#">Activate</MDBBtn>
            )}
          </MDBCardBody>
          <MDBCardFooter className="text-muted">
            {s.isActive ? "Active" : "Inactive"}
          </MDBCardFooter>
        </MDBCard>
      ))}
    </div>
  );
}
