import {Navbar, Nav, Container} from "react-bootstrap";

export default function NavBar(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Sandesh Koirala</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About Me</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

