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

            //Cart functions
        async function addCart (itemToAdd) {
            console.log(itemToAdd);
            //creates quantity for item, starts at 1 once user adds to cart. Compare to stock count when user submits order
                if (itemToAdd.quantity === undefined || itemToAdd.quantity === 0){
                itemToAdd.quantity = 1
                }

                if (!cartInv.some(item => item._id === itemToAdd._id)){
                cartState([...cartInv,itemToAdd])
                }else { //if already in cart then increase quantity
                itemToAdd.quantity +=1
                cartState([...cartInv]) //update state
                }

            }

        async function subtractItems(itemToSubtract) {
              console.log(itemToSubtract)
              if (itemToSubtract.quantity >= 2) {
                itemToSubtract.quantity -= 1
              }
              cartState([...cartInv])
        }


        async function removeItems(itemToRemove) {
              let indexToRemove =  cartInv.indexOf(itemToRemove)
              console.log(indexToRemove);
              itemToRemove.quantity = 0
              cartInv.splice(indexToRemove,1,)
              cartState([...cartInv]) //update state
            }


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
            increaseCart={addCart}
            removeCart={removeItems} 
            subtractCart={subtractItems} />}/>
        </Routes>
    </div>
    )
}

export default App
