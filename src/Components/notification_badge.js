import { Badge } from "react-bootstrap";

const NotificationBade = (props) => {
    return (
        <div>
            <Badge pill id='cart-count'>
                {props.cartCount}
            </Badge>
        </div>
    )
}

export default NotificationBade