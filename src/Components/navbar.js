import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { Nav, Navbar, Container, Button } from "react-bootstrap"
import shoppingCart from '../images/shopping-cart.png'


const NavBar = (props) => {
  const {loginWithRedirect} = useAuth0()
  const {logout} = useAuth0()
  const { user, isAuthenticated} = useAuth0();
  let searched = ''


    return (
     <div>
         <Navbar expand="lg" bg="dark" variant='dark' >
           <Nav.Link as={Link} to='/'><Navbar.Brand>Everglades Ecommerce</Navbar.Brand></Nav.Link> 
                <Nav>
                  <Nav.Link as={Link} to='/store'>Store</Nav.Link>
                </Nav>

            <Container fluid id='login-container'>
              <div>
                <input className='user-search' type='text' onChange={(event) => searched = event.target.value}></input>
                <Button type='submit' onClick={() => {props.searchData(searched)}}>Go</Button>
              </div>

              <div className="cart-icon">
              <Nav.Link as={Link} to='/cart'><img src={shoppingCart} alt='shopping cart icon'/  ></Nav.Link>
              </div>

              {/* once user is authenticated, show profile info */}
            {isAuthenticated ?
            <Nav.Link as={Link} to='/profile'>
              <div id='nav-user-container'>
              <img className='nav-user-img' src={user.picture} alt={user.name}/>
              <p>{`Welcome! ${user.name}`}</p>
            </div>
            </Nav.Link>: null}

              {/* Login buttons */}
              <Button variant='dark' onClick={() => loginWithRedirect()}>Log In</Button>
              <Button variant='light' onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>Log Out</Button>
            </Container>
        </Navbar>
     </div>
    )
}

export default NavBar