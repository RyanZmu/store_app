import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { Nav, Navbar, Container, Button } from "react-bootstrap"
import shoppingCart from '../images/shopping-cart.png'
import { Formik, Form, Field } from "formik"
import NotificationBadge from '../Components/notification_badge'


const NavBar = (props) => {
  const {loginWithRedirect} = useAuth0()
  const {logout} = useAuth0()
  const { user, isAuthenticated} = useAuth0();

    return (
     <div>
         <Navbar fixed='top' expand="lg" bg="dark" variant='dark' >
                <Nav>
                  <Nav.Link as={Link} to='/'>
                    <Navbar.Brand>Everglades Ecommerce</Navbar.Brand>
                  </Nav.Link>
                  {/* onClick will make the store page repopulate when clicked */}
                  <Nav.Link
                  as={Link} to='/store'
                  onClick={() => props.filterItems('')}>
                    Store
                  </Nav.Link>
                  <Nav.Link
                  as={Link}
                  to='/services'>
                    Services
                  </Nav.Link>
                </Nav>

          <Container id="search-container">
              {/* Search bar */}
               <Formik
                className='user-search'
                initialValues={{search:''}}
                onSubmit={(values) => {
                  props.searchData(values)
                  values.search='' //reset field
                }}>
                  {/* access Formik data via props */}
                {props => {
                  return <Form onSubmit={props.handleSubmit}>
                    <Link to='/store'>
                      <Field
                      id='search-field'
                      className='form-control'
                      type="text"
                      name="search"
                      value={props.values.search}
                      />
                    </Link>
                    {/* the field links to store, had to use as a work around for the button not working if wrapped by a Link */}
                    <Button type="submit">Search</Button>
                  </Form>
                }}
                </Formik>
          </Container>

            {/* cart icon and notification badge */}
              <div className="cart-icon">
              {props.count > 0 ? <NotificationBadge cartCount={props.count} /> : null}
              <Nav.Link
              as={Link}
              to='/cart'
              >
                <img
                src={shoppingCart}
                alt='shopping cart icon'/>
              </Nav.Link>
              </div>


              {/* once user is authenticated, show profile info */}
            {isAuthenticated ?
            <Nav.Link as={Link} to='/profile'>
              <Container id='nav-user-container'>
              <img
              className='nav-user-img'
              src={user.picture}
              alt={user.name}
              />
              <p>{`Welcome! ${user.name}`}</p>
              </Container>
            </Nav.Link>: null}

              {/* Login buttons */}
              <Button
              variant='dark'
              onClick={() => loginWithRedirect()}
              >
                Log In
              </Button>
              <Button
              variant='light'
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}
              >
                Log Out
              </Button>
        </Navbar>
     </div>
    )
}

export default NavBar