import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";

const Cart = (props) => {
    console.log(props.cart);


    return (
        <div id="cart-page">
            <Container id="cart-container">
                {props.cart.map(item => {
                   return (<Card key={item._id} className="cart-card">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle>{item.currency + item.price}</Card.Subtitle>
                        <Card.Body>{item.quantity}
                         <Button variant="light" onClick={() => props.increaseCart(item)}>+</Button>
                         <Button variant="light">-</Button>
                        </Card.Body>
                        <Button onClick={() => props.removeCart(item)} variant="danger">Remove</Button>
                        <Card.Img src={item.image}/>
                    </Card>)
                 })
                }
             <Button>Submit Order</Button>
            </Container>

        </div>
    )
}

export default Cart