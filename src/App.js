import { useState,useEffect } from "react"
import { Routes, Route } from "react-router-dom"

// Import Components
import LandingPage from './Components/landingPage'
import NavBar from './Components/navbar'
import Cart from './Components/cart'
import StoreFront from './Components/store_front'
import ProductPage from './Components/product_page'
import UserProfile from './Components/user_profile'
import CartMessage from './Components/cart_alert'

function App () {
    let [storeData, dataState] = useState([]) // initial store data - all items
    let [filteredData, filterState] = useState([]) // filtered if user requests it
    let [isFIlterActive, filterActiveState] = useState(true) //button starts DISABLED
    let [cartInv, cartState] = useState([]) // tracks cart inventory
    let [cartAdded, cartAddState] = useState(false) //check for cart alert
    let [cartCount, cartCountState] = useState(0)
    // let cartCount = 0

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
                // if requestCategory is ALL ("") then disable filter button, otherwise Enable it
                requestedCategory === "" ? filterActiveState(true) : filterActiveState(false)

                return filterState(storeData.filter(items => items.category === requestedCategory))
            }

            //Cart functions
        async function addCart (itemToAdd) {
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
                cartAddState(true)
                showNotification(true)

                // timeout the alert
                setTimeout(() => {
                    cartAddState(false)
                }, 3000);

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

            // Search bar
        async function searchStore (searchReq) {
            console.log(searchReq);
            let itemsSearched = []
            //in the future tags will be added and those will be compared to search requests if valid
            if (searchReq.search !== "") {
                storeData.filter(item => {
                    if (item.name.toLowerCase().includes(searchReq.search.toLowerCase())) {
                      itemsSearched.push(item)
                      console.log(itemsSearched);
                    }
                    return itemsSearched
                })
            filterActiveState(false) // disabled==false so remove button works
            return itemsSearched !== undefined ? filterState([...itemsSearched]) : null // store front expects an array, if itemSearched is invalid then we do nothing
            }}


            async function showNotification (cartAdded) {
                console.log(cartAdded);
                // console.log(cartCount);
                if (cartAdded) {
                    cartCountState(cartCount+=1)
                }
            }
return (
     <div id='App'>
        <NavBar
        searchData={searchStore}
        filterItems={filterItems}
        count={cartCount}
        />

        {/*when a user adds to cart, show message  */}
        {cartAdded === true ?<CartMessage cartAdded={cartAdded}/> : null}

        {/* Routing */}
        <Routes>
            <Route
            path='/'
            element= {<LandingPage
            category={filterItems}
            />}/>

            <Route
            path='/store/:id'
            element= {<ProductPage
            storeData={storeData}
            addCart={addCart}
            />}/>

            <Route
            path='/store'
            element= {<StoreFront
            storeData={filteredData.length >= 1 ? filteredData : storeData} //if filter/search is invoked, use filterData
            category={filterItems}
            addCart={addCart}
            isCartAdded={cartAdded}
            isFilterActive={isFIlterActive}
            />}/>
            {/* here we send the filterItems function to /store and then the OnClick function in /store sends it's data back to the App component, do same for API Request component if possible */}

            <Route
            path='/cart'
            element= {<Cart
            cart={cartInv}
            increaseCart={addCart}
            removeCart={removeItems}
            subtractCart={subtractItems}
            />}/>

            <Route
            path='/profile'
            element={<UserProfile
            />}/>
        </Routes>

        <footer>Icons Provided By:<a href="https://www.flaticon.com/" > Flaticon </a></footer>
    </div>
    )
}

export default App
