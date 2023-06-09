import { Alert, Container } from "react-bootstrap";

const CartMessage = (props) => {
    // console.log(props.cartAdded);

   return (
         <Container fluid id='cart-alert-container'>
          <Alert
          id="cart-alert"
          show={props.cartAdded}
          variant="success">
           <Alert.Heading>Added to Cart</Alert.Heading>
          </Alert>
         </Container>
    )
}

export default CartMessage