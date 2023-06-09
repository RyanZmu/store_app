import { useAuth0 } from "@auth0/auth0-react";
import { Container, Image } from "react-bootstrap";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <Container fluid id="user-profile-container">
                <Image
                src={user.picture}
                alt={user.name}
                />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </Container>
        )
    )
}

export default Profile