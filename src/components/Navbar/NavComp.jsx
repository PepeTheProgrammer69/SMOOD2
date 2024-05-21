import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function NavComp() {
  const location = useLocation();
  const isNotHomeRoute = location.pathname !== "/";

  return (
    <>
      <Navbar bg="transparent" data-bs-theme="transparent">
        <Container className="d-flex navComp-container" style={{ marginLeft: '5px', width: '100%' }}>
          <Nav className="me-auto ms-0 " style={{ width: '4rem' }}>
            <Nav.Link as={Link} to="/screener" className="navText">Screener</Nav.Link>
            {/*<Nav.Link as={Link} to="/maps" className="navText">Maps</Nav.Link>*/}
            <Nav.Link as={Link} to="/news" className="navText">News</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navText">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComp;
