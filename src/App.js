import { useState,useEffect } from "react"
import { Routes, Route } from "react-router-dom"

// Import Components
import LandingPage from './Components/landingPage'
import NavBar from './Components/navbar'
import Cart from './Components/cart'
import StoreFront from './Components/store_front'
import ProductPage from './Components/product_page'
// import Banner from './Components/banner'

function App () {
    let [storeData, dataState] = useState([]) // initial store data - all items
    let [filteredData, filterState] = useState([]) // filtered if user requests it
    let [cartInv, cartState] = useState([]) // tracks cart inventory

    let apiURL = '/api/v1/store'

        //useEffect to ensure just one API call; App does an inital API call to populate storeData
        useEffect(() => {
                fetch(apiURL)
                .then(result => result.json())
                .then(body => dataState(body))
                .catch(error => {
                    console.error('Error with fetching',error.message)
                })
                },[apiURL])

        //Filter
        async function filterItems (requestedCategory) {
                console.log({requestedCategory});
                // console.log({storeInventory});
                return filterState(storeData.filter(items => items.category === requestedCategory))
            }
                // console.log({filteredData});


        //Cart functions
        async function addCart (itemToAdd) {
            console.log(itemToAdd);

            //creates quantity for item, starts at 1 once user adds to cart. Compare to stock count when user submits order
            if (itemToAdd.quantity === undefined){
                itemToAdd.quantity = 1
            }

            //take current cart inv and then add next item with ...
            if (!cartInv.includes(itemToAdd)){
                cartState([...cartInv,itemToAdd])
            }

            //increase item quantity in cart by 1
            cartInv.map(item => {
                if (item._id === itemToAdd._id) {
                    item.quantity +=1
                }
                return item
              })
            }
            // console.log({cartInv});


return (
     <div id='App'>
            {/* <Banner /> */}
        <NavBar />

        <Routes>
            <Route
            path='/'
            element= {<LandingPage />}/>

            <Route
            path='/store/:id'
            element= {<ProductPage
            storeData={storeData}
            addCart={addCart} />}/>

            <Route
            path='/store'
            element= {<StoreFront
            storeData={filteredData.length >= 1 ? filteredData : storeData} //pass all
            category={filterItems}
            addCart={addCart} />}/>
            {/* here we send the filterItems function to /store and then the OnClick function in /store sends it's data back to the App component, do same for API Request component if possible */}

            <Route
            path='/cart'
            element= {<Cart
            cart={cartInv}
            increaseCart={addCart} />}/>
        </Routes>
    </div>
    )
}

export default App
