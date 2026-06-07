import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";
import Header from "./Services/Header";
import Footer from "./Services/Footer";
import ServiceList from "./Services/ServiceList";

function Services() {
  return (
    <>
        <NavigationBar />
        <Container className="services">
            <div className="content">
                <Header />
                <ServiceList />
            </div>
            <Footer />
        </Container>
        </>
  )
}
export default Services;