
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar color="info" expand="md">
      <Nav navbar>
        <NavbarBrand href="/">Hillary's Hair Salon</NavbarBrand>
        <NavItem>
          <NavLink href="/stylists">Stylists</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/customers">Customers</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    <Outlet />
  </>
  );
}

export default App;
