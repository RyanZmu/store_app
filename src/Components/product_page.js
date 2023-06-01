import { useEffect , useState} from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductPage = (props) => {
    let productId = useParams().id
    let fetchURL = `/api/v1/store/${productId}`
    let [productInfo, productState] = useState({})

    //For now go against DRY and have another fetch, later make a separate fetch component that all other components can call on.
    //API Call for current item
    useEffect(() => {
        fetch(fetchURL)
        .then(result => result.json())
        .then(body => productState(body))
        .catch(error => {
            console.error('Error with fetching',error.message)
        })
        },[fetchURL])

    return (
        <div>
           <Container id='product-info-container' fluid>
           <Button as={Link} to='/store'>Go Back</Button>
            <Card id='product-info'>
                <Card.Title>{productInfo.name}</Card.Title>
                <Card.Subtitle>{productInfo.category}</Card.Subtitle>
                <Card.Img id='product-info-img' src={productInfo.image} />
                <Card.Text>{productInfo.currency + productInfo.price}</Card.Text>
                <Button id='purchase-button' onClick={() => props.addCart(productInfo)}>Add to Cart</Button>
            </Card>
           </Container>
        </div>
    )
}

export default ProductPage