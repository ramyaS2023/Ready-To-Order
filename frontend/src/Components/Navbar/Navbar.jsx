import { useContext, useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

function AppNavbar({ setShowLogin }) {
  const { token, setToken } = useContext(StoreContext);
  const [show, setShow] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <>
      {/* ✅ Fixed Navbar */}
      <Navbar expand="lg" className="px-3 py-3 fixed-top bg-white shadow-sm ">
        <Container fluid>
          {/* ✅ Logo */}
          <Nav.Link as={Link} to="/" className="me-auto">
            <img src={assets.logo} alt="Logo" className="logo" />
          </Nav.Link>

          {/* ✅ Center Links (Desktop) */}
          <Nav className="me-auto d-none d-lg-flex gap-4" style={{fontSize:"18px"}}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#explore-menu">Menu</Nav.Link>
            <Nav.Link href="#app-download">Mobile-app</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>

          {/* ✅ Right side */}
          <div className="d-flex align-items-center gap-4 navbar-right">
            {/* Search */}
            <img src={assets.search_icon} alt="search" className="nav-icon" />

            {/* Cart */}
            <div className="navbar-search-icon">
              <Nav.Link as={Link} to="/cart">
                <img src={assets.basket_icon} alt="cart" className="nav-icon" />
              </Nav.Link>
              <div className="dot"></div>
            </div>

            {/* Sign in / Profile */}
            {!token ? (
              <button className="signin-btn" onClick={() => setShowLogin(true)}>
                Sign In
              </button>
            ) : (
              <div className="navbar-profile" onClick={toggleDropdown}>
                <img src={assets.profile_icon} alt="profile" style={{height:"25px", width:"25px"}}/>
                <ul className={`nav-profile-dropdown ${dropdownOpen ? "show" : ""}`}>
                  <li onClick={()=>navigate('/myorders')}>
                    <img src={assets.bag_icon} alt="" /><p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={logout}>
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}

            {/* Toggler */}
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="border-0"
              onClick={handleShow}
            />
          </div>
        </Container>
      </Navbar>

      {/* ✅ Offcanvas (Mobile) */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        id="offcanvasNavbar"
      >
        <Offcanvas.Header closeButton>
          <img src={assets.logo} alt="Logo" className="logo" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link href="#explore-menu" onClick={handleClose}>Menu</Nav.Link>
            <Nav.Link href="#app-download" onClick={handleClose}>Mobile-app</Nav.Link>
            <Nav.Link href="#footer" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppNavbar;












































































