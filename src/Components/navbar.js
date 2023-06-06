import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { Nav, Navbar, Container, Button } from "react-bootstrap"
import shoppingCart from '../images/shopping-cart.png'
import { Formik, Form, Field } from "formik"


const NavBar = (props) => {
  const {loginWithRedirect} = useAuth0()
  const {logout} = useAuth0()
  const { user, isAuthenticated} = useAuth0();
  let searched = ''

    return (
     <div>
         <Navbar fixed='top' expand="lg" bg="dark" variant='dark' >
           <Nav.Link as={Link} to='/'><Navbar.Brand>Everglades Ecommerce</Navbar.Brand></Nav.Link>
                <Nav>
                  <Nav.Link as={Link} to='/store' onClick={() => props.filterItems('')}>Store</Nav.Link>
                  {/* above onClick will make the store page repopulate when clicked */}
                </Nav>

            <Container fluid id='login-container'>
              {/* Search bar */}
               <Formik
                className='user-search'
                initialValues={{search:''}}
                onSubmit={(values) => {
                  searched = values
                  props.searchData(searched)
                  console.log(searched);
                }}>
                  {/* access Formik data via props */}
                {props => {
                  return <Form onSubmit={props.handleSubmit}>
                    <Link to='/store'><Field
                    type="text"
                    name="search"
                    value={props.values.search}
                    /></Link>
                    {/* the field links to store, had to use as a work around for the button not working if wrapped by a Link */}
                    <Button type="submit">Search</Button>
                  </Form>
                }}
                </Formik>


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