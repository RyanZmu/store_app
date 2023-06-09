import { Card, Container, Button,Dropdown, ButtonGroup,DropdownButton, Nav, ToggleButton } from "react-bootstrap";
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
import addTOCartImg from '../images/add-to-cart.png'

const StoreFront = (props) => {
    let storeInventory = props.storeData
    let disableButton = props.isFilterActive

    // console.log(props.category);
    // console.log(props.isCartAdded);
    // console.log(disableButton);
    // console.log({storeInventory});
    return (
  <div>
    <h2>Browse our current stock</h2>
{/* Keep filter list here since it will only be used in the storefront */}
    <Container fluid className='filter-list-container'>
                <DropdownButton as={ButtonGroup} title='Filters' vertical>
                    <Dropdown.Header>Department</Dropdown.Header>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item eventKey="1" onClick={() => props.category("Home")}>Home</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => props.category("Electronics")}>Electronics
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={() => props.category("Clothes")}>Clothes
                    </Dropdown.Item>

                    <Dropdown.Header>Price Range</Dropdown.Header>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item eventKey="4">$25 and Under</Dropdown.Item>
                    <Dropdown.Item eventKey="5">$25 - $100</Dropdown.Item>
                    <Dropdown.Item eventKey="6">$100 - $500</Dropdown.Item>
                    {/* add price range logic to filterItems */}

                </DropdownButton>

                <Button variant='danger' disabled={disableButton} onClick={() => {
                  props.category("")}}>Remove Filters</Button>

            </Container>

    <Container className='card-container' fluid='true'>
        {storeInventory.length >= 1 ? storeInventory.map(data => {
            let idURL = `/store/${data._id}` //creates URL for each item

           return <Card id={data._id} key={data._id} className='product-cards'>
            <Nav.Link as={Link} to={idURL}><Card.Img src={data.image} alt={data.name} className='product-images'/></Nav.Link>
            <Card.Body>
              <Card.Title>{`${data.name} Rating: ${data.rating}/5 Stars`}</Card.Title>
              <Card.Subtitle>{data.currency + data.price}</Card.Subtitle>
              <Card.Subtitle>{data.category}</Card.Subtitle>
              <Button id='purchase-button'onClick={() => {props.addCart(data)}}>
              <img src={addTOCartImg} alt={'shopping bad icon'}/>Add to Cart</Button>
            </Card.Body>
           </Card>//Next work on store pages for each item
        }) : null //conditional so no rendering when data not found
       }
    </Container>
  </div>
    );
};

export default StoreFront