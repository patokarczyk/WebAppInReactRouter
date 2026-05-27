import { Container, Nav, Navbar } from "react-bootstrap";

export default function VerticalNavbar({ text = [], links = [] }: { text?: string[], links?: string[] }) {
    const navText = text.slice(1);
    const navLinks = links.slice(1);

    return (
        <div className="col-12 col-md-3 col-lg-2 mb-4">
            <Navbar expand="md" className="flex-md-column bg-light px-3 py-4 h-100 rounded shadow-sm">
                <Navbar.Brand href={links[0]}
                    className="w-100 pl-3 text-truncate d-flex align-items-start fw-bold text-dark fs-5 mb-2"
                    style={{ maxHeight: "2.5rem" }}
                >
                    {text[0]}
                </Navbar.Brand>
                <Nav className="flex-md-column w-100">
                    {navText.map((text, id) => (
                        <Nav.Link key={id} href={navLinks[id]}
                            className="py-1 px-2 text-dark"
                            style={{ width: "100%" }}
                        >
                            {text}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </div>
    );
}