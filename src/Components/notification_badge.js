import { Badge, Container } from "react-bootstrap";

const NotificationBade = (props) => {
    return (
        <Container>
            <Badge pill id='cart-count'>
                {props.cartCount}
            </Badge>
        </Container>
    )
}

export default NotificationBade