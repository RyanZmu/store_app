import { useEffect } from "react"

const ApiRequests = (props) => {
    console.log(props.storeData);
    const apiRootURL = '/api/v1/store/'
    const HTTPtype = props.type
    let apiReqURL = ''
    const requestURL = [
        {type:'GETALL', path: ''},
        {type:'GETID',path:"/:id"},
        {type:'PATCH',path:"/update/:id"},
        {type:'POST',path:"/post"},
        {type:'DELETE',path:"/delete/:id"},
    ]

    async function createAPIURL (req) {
        console.log(req);
        requestURL.map(item => {
            if (item.type === HTTPtype) {
                apiReqURL = apiRootURL + item.path
            }
            return apiReqURL
        })

    }
    createAPIURL(HTTPtype)
    console.log(apiReqURL);


    useEffect(() => { //useEffect to ensure just one API call - keep array empty
        fetch(apiReqURL)
        .then(result => result.json())
        .then(body => props.storeData(body))
        .catch(error => {
            console.error('Error with fetching',error.message)
         })
        }, [])

}
export default ApiRequests