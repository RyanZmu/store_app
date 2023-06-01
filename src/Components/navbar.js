import { Link } from "react-router-dom"
const { Nav, Navbar, Container } = require("react-bootstrap")


const NavBar = () => {
    return (
     <div>
         <Navbar expand="lg" bg="dark" variant='dark' >
            <Navbar.Brand>Everglades Ecommerce</Navbar.Brand>
                <Nav>
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/store'>Store</Nav.Link>
                  <Nav.Link as={Link} to='/login' >Login</Nav.Link>
                  <Nav.Link as={Link} to='/cart' className="cart-link" >Cart</Nav.Link>
                </Nav>
        </Navbar>
     </div>
    )
}

export default NavBar