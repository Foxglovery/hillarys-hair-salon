import { useEffect, useState } from "react";
import { GetCustomers } from "../../data/customerData";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import "./CustomerList.css";
export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    GetCustomers().then(setCustomers);
  }, []);

  return (
    <div className="master-customer-container">
      <div className="customer-card-container">
        {customers.map((c) => (
          <MDBCard className="customer-card" alignment="center">
            
            <MDBCardBody>
              <MDBCardTitle>{c.firstName} {c.lastName}</MDBCardTitle>
              <MDBCardText>
                
              </MDBCardText>
              
            </MDBCardBody>
            
          </MDBCard>
        ))}
      </div>
    </div>
  );
}
