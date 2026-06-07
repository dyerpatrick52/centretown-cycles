import NavigationBar from "./NavigationBar"
import Hero from "./Homepage/Hero"
import InfoCards from "./Homepage/InfoCards"
import Container from 'react-bootstrap/Container';

function Homepage(){
    return(
        <>
        <NavigationBar />
        <Container className="homepage">
            <div className="content">
                <Hero />
                <InfoCards />
            </div>
        </Container>
        </>
    );
}

export default Homepage;