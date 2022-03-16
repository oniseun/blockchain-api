import {Navbar,Nav,  Container} from 'react-bootstrap'

function Header(props: any) { 
  

  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as="span">
        <img
        src="/blockchain.webp"
        height="40"
        className="d-inline-block align-top"
        alt="Blockchain logo"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <Container>
      </Container>
    </>
  );
}
export default Header;