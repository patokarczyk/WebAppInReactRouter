import { Outlet } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../resources/images/logo.jpg";
import dc from "../../resources/images/dc.jpg";
import x from "../../resources/images/X.jpg";
import ln from "../../resources/images/ln.jpg";
import fb from "../../resources/images/fb.jpg";
import './layout.css';
import '../customStyle.css';
import RoundedContainer from "../components/roundedContainer";
import VerticalNavbar from "../components/verticalNavbar";
import UserProvider from "../userContext";

export default function Layout() {
  return (
    <UserProvider>
      <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="d-flex justify-content-between flex-column flex-md-row">
            <Navbar.Brand href="/" className="d-flex align-items-center m-4">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <div className="d-flex flex-column align-items-center">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="my-collapse-style">
                <Nav className="me-auto d-flex align-items-center" >
                  <NavDropdown title="EXPLORE" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">
                      LEARNING PATHS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/challenges">
                      CHALLENGES
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/solutions">
                      SOLUTIONS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                      ARTICLES
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="FOR COMAPNIES" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">
                      HIRE DEVELOPERS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                      TRAIN DEVELOPERS
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/" style={{ whiteSpace: "nowrap", fontWeight: "700" }}>
                    UNLOCK PRO
                  </Nav.Link>
                  <RoundedContainer color="black" href="/login">
                    <div className="d-flex justify-content-center align-items-center"
                      style={{ gap: '8px' }}
                    >
                      LOG IN WITH GITHUB
                      <span className="d-flex align-items-center"
                        style={{ marginLeft: "8px" }}
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                          alt="GitHub"
                          width="20"
                          height="20"
                          style={{ filter: "invert(1)", display: "inline-block" }}
                        />
                      </span>
                    </div>
                  </RoundedContainer>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
        <Outlet></Outlet>
        <footer style={{ backgroundColor: "white" }}>
          <div className="custom-container2 py-5" >
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 mb-4">
              <div className="w-100"
                style={{ maxWidth: "200px"}}
              >
                <img src={logo} alt="Logo"
                  className="img-fluid"
                />
              </div>
              <div className="d-flex gap-3">
                <img src={dc} alt="discord" height={24} />
                <img src={x} alt="X" height={24} />
                <img src={ln} alt="linkedin" height={24} />
                <img src={fb} alt="facebook" height={24} />
              </div>
            </div>
            <div className="row">
              <Col xs={12} md={4} className="mb-4">
                <h1>
                  Stay up to date
                </h1>
                <p>
                  with new challenges, featured solutions, selected articles,
                  and our latest news
                </p>
                <form className="d-flex flex-column flex-sm-row" role="search">
                  <input
                    className="form-control me-2"
                    type="emial"
                    placeholder="email@example.com"
                    aria-label="Email"
                  />
                  <RoundedContainer color="hsl(351 84% 55%)" href="/">
                    SUBSCRIBE
                  </RoundedContainer>
                </form>
              </Col>
              <VerticalNavbar text={["Frontend Mentor", "Unlock Pro", "Contact us", "FAQs", "Become a partner"]}
                links={["/", "/", "/", "/", "/"]} />
              <VerticalNavbar text={["Explore", "Learning paths", "Challenges", "Solutions", "Articles"]}
                links={["/", "/", "/challenges", "/solutions", "/"]} />
              <VerticalNavbar text={["Community", "Discord", "Guidelines"]}
                links={["/", "/", "/"]} />
              <VerticalNavbar text={["For companies", "Hire developers", "Train developers"]}
                links={["/", "/", "/"]} />
            </div>
          </div>
        </footer>
      </>
    </UserProvider>
  );
}
