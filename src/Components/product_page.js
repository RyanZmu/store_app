import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import addTOCartImg from '../images/add-to-cart.png';

const ProductPage = (props) => {
    let productId = useParams().id
    let productInfo = props.storeData.find(item => item._id === productId) // find the product requested

    // console.log(productInfo);

    return (
        <div>
           <Container id='product-info-container' fluid>
           <Button as={Link} to='/store'>Go Back</Button>
            <Card id='product-info'>
                <Card.Title>{productInfo.name}</Card.Title>
                <Card.Subtitle>{productInfo.category}</Card.Subtitle>
                <Card.Img id='product-info-img' src={productInfo.image} />
                <Card.Text>{productInfo.currency + productInfo.price}</Card.Text>
                <Button id='purchase-button' onClick={() => props.addCart(productInfo)}>
                 <img src={addTOCartImg} alt='shopping bag icon'/>Add to Cart
                </Button>
            </Card>
           </Container>
        </div>
    )
}

export default ProductPage