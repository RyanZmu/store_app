import { Card, Container, Button,Dropdown, ButtonGroup,DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

//Product Images - console log for URI image link, need to be imported; find a better way
import sofaCushionImg from '../images/products/sofa_cushion.jpg';
import lightbulbImg from '../images/products/led_bulb.jpg'
import ivyPlantImg from '../images/products/ivy_plant.jpg'
import tableLampImg from '../images/products/table_lamp.jpg'
import flatScreenImg from '../images/products/flatscreen_tv.jpg'
import smartSpeakerImg from '../images/products/smart_speaker.jpg'
import officeSlacksImg from '../images/products/office_slacks.jpg'
import smartWatchImg from '../images/products/smart_watch.jpg'
import suedeShoesImg from '../images/products/brown_suede.jpg'
import crewNeckImg from '../images/products/crew_tshirt.jpg'

const StoreFront = (props) => {
    let storeInventory = props.storeData

    // console.log(props.category);
    // console.log({storeInventory});

    return (
  <div>
    <h2>Browse our current stock</h2>
    <p>Search bar here or in nav - Filter list on side</p>

{/* Keep filter list here since it will only be used in the storefront */}
    <Container className='filter-list-container'>
                <DropdownButton as={ButtonGroup} title='Filter' vertical>
                    <Dropdown.Item eventKey="1" onClick={() => props.category("")}>All
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => props.category("Home")}>Home</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={() => props.category("Electronics")}>Electronics
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4" onClick={() => props.category("Clothes")}>Clothes
                    </Dropdown.Item>
                </DropdownButton>
            </Container>

    <Container className='card-container' fluid='true'>
        {storeInventory.length >= 1 ? storeInventory.map(data => {
            let idURL = `/store/${data._id}` //creates URL for each item

           return <Card id={data._id} key={data._id} className='product-cards'>
            <Card.Img src={data.image} alt={data.name} className='product-images'/>
            <Card.Body>
            <Card.Title>{`${data.name} Rating: ${data.rating}/5 Stars`}</Card.Title>
            <Card.Subtitle>{data.currency + data.price}</Card.Subtitle>
             <Card.Subtitle>{data.category}</Card.Subtitle>
             <Button id='store-button' as={Link} to={idURL}>Product Page</Button> <Button id='purchase-button'onClick={() => props.addCart(data)}>Add to Cart</Button>
             </Card.Body>
           </Card> //Next work on store pages for each item
        }) : null //conditional so no rendering when data not found
       }
    </Container>
  </div>
    );
};

export default StoreFront