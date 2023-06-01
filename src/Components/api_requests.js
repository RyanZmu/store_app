import { useEffect, useState } from "react"

const ApiRequests = (props) => {
    const requestURL = '/api/v1/store'
    const [storeData, dataState] = useState([])


    useEffect(() => { //useEffect to ensure just one API call
        fetch(requestURL)
        .then(result => result.json())
        .then(body => dataState((body)))
        .catch(error => {
            console.error('Error with fetching',error.message)
         })
        })

}

export default ApiRequests