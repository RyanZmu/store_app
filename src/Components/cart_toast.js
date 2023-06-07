import { Alert, Badge, Container } from "react-bootstrap";

const CartMessage = (props) => {
    // console.log(props.cartAdded);

   return (
        <div>
         <Container fluid id='cart-alert-container'>
          <Alert id="cart-alert" show={props.cartAdded} variant="success">
           <Alert.Heading>Added to Cart</Alert.Heading>
          </Alert>
         </Container>
        </div>
    )
}

export default CartMessage