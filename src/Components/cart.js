import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = (props) => {
    console.log(props.cart);


    return (
        <Container id="cart-page">
            <h2>Shopping Cart:</h2>
            <Container id="cart-container">
                {props.cart.map(item => {
                   return (
                        <Card
                        key={item._id}
                        className="cart-card"
                        bg='dark'
                        text='light'
                        border='success'
                        >
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle>{item.currency + item.price}</Card.Subtitle>
                        <Card.Body>
                        {item.quantity}
                         <Button
                         variant="light"
                         onClick={() => props.increaseCart(item)}>
                            +
                        </Button>
                         <Button
                         variant="light"
                         onClick={() => props.subtractCart(item)}>
                            -
                        </Button>
                        </Card.Body>

                        <Button
                        onClick={() => props.removeCart(item)}
                        variant="danger">
                            Remove
                        </Button>

                        <Card.Img
                        className='cart-image'
                        src={item.image}
                        />
                    </Card>)
                 })
                }
            </Container>
            {/* link to order form component here */}
            <Link to='/order'><Button>Proceed to Checkout</Button></Link>

        </Container>
    )
}

export default Cart