import Container from 'react-bootstrap/Container';
import { FiPhone } from "react-icons/fi";
import { VscMail } from "react-icons/vsc";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";

function Header() {
    return (
        <>
            <section className='header-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='header-strip'>
                            <div className="header-strip-div">
                                <FiPhone />0422-2231091 / 0422-438975
                            </div>
                            <div className="header-strip-div">
                                <VscMail />cbenova@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/nova-school/"><img src={"/nova-school/assets/nova_school_logo.webp"} alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/nova-school/">Home</Nav.Link>
                            <Nav.Link href="/nova-school/faculty/">About us</Nav.Link>
                            <NavDropdown title="Academics" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">B.Ed</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    B.EL.Ed
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nova-school/cbse">CBSE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/nova-school/faculty/">Faculty</Nav.Link>
                            <Nav.Link href="/nova-school/faculty/">Facilities</Nav.Link>
                            <Nav.Link href="/nova-school/faculty/">Activities</Nav.Link>
                            <Nav.Link href="/nova-school/faculty/">Gallery</Nav.Link>
                        </Nav>
                        <div className='header-contact-div'>
                            <button className='header-contact-button'>Contact Us</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;