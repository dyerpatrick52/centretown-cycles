import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Header from "./Contact/Header";
import Hero from "./Contact/Hero";

function Contact() {
    return(
        <>
        <NavigationBar/>
        <Container className="contact">
            <Header />
            <Hero />
        </Container>
        </>
    );
}
export default Contact;