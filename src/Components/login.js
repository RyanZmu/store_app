import {useAuth0} from '@auth0/auth0-react'
import { Button, Container } from 'react-bootstrap'

const LoginPage = () => {
    const {loginWithRedirect} = useAuth0()
    const {logout} = useAuth0()

    return (
        <Container id="user-login-container">
            <Button onClick={() => loginWithRedirect()}>Log In</Button>
            <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>Log  out</Button>
        </Container>
    )
}

export default LoginPage