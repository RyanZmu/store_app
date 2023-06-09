import { Card, Carousel, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import shoppingBagImg from '../images/shopping_bag.jpg'
import clothesRackImg from '../images/clothes_rack.jpg'
import homeCategoryImg from '../images/categories/home_category.jpg'
import clothesCategoryImg from '../images/categories/clothes_category.jpg'
import electronicsCategoryImg from '../images/categories/electronics_category.jpg'

const LandingPage = (props) => {

 return (
    <Container fluid id="landing-page-container">
        <Container className='carousel-container' fluid>
           <Carousel variant='light'>
            <Carousel.Item>
                <img className='carousel-image'
                src= {shoppingBagImg}
                alt= 'shopping bag'
                />
                <Carousel.Caption id='carousel-caption'>
                    <h3>Selection Matters</h3>
                    <p>Select from over 100+ brands!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='carousel-image'
                src= {clothesRackImg}
                alt= 'clothes rack'
                />
                <Carousel.Caption id='carousel-caption'>
                    <h3>Clothes from All Regions</h3>
                    <p>Select styles from Around the World!</p>
                </Carousel.Caption>
            </Carousel.Item>
           </Carousel>
          </Container>

{/* Cards for different categories - make own cards component possibly*/}
        <Container
        className='landing-card-container'
        fluid='true'
        >
         <Nav.Link
         as={Link}
         to='/store'
         onClick={() => {props.category("Home")}}
         >
            <Card
            className='card-ele'
            bg='dark'
            text='light'
            border='primary'
            >
                <Card.Header>Home</Card.Header>
                <Card.Img
                className='category-card-img'
                src={homeCategoryImg}
                />
                <Card.Body>
                    <Card.Title>Click here to shop Home!</Card.Title>
                </Card.Body>
            </Card>
        </Nav.Link>

          <Nav.Link
          as={Link}
          to='/store'
          onClick={() => {props.category("Clothes")}}
          >
            <Card
            className='card-ele'
            bg='dark'
            text='light'
            border='success'
            >
                <Card.Header>Clothes</Card.Header>
                <Card.Img
                className='category-card-img'
                src={clothesCategoryImg}
                />
                <Card.Body>
                    <Card.Title>Click here to shop Clothes!</Card.Title>
                </Card.Body>
            </Card>
         </Nav.Link>

          <Nav.Link
          as={Link}
          to='/store'
          onClick={() => {props.category("Electronics")}}
          >
            <Card
            className='card-ele'
            bg='dark'
            text='light'
            border='danger'
            >
                <Card.Header>Electronics</Card.Header>
                <Card.Img
                className='category-card-img'
                src={electronicsCategoryImg}
                />
                <Card.Body>
                    <Card.Title>Click here to shop Electronics!</Card.Title>
                </Card.Body>
            </Card>
         </Nav.Link>
        </Container>

    </Container>)
}

export default LandingPage