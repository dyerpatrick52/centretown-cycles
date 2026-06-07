import { Row, Card, Col, Container, ListGroup } from "react-bootstrap";
import { GeoAltFill, TelephoneFill, EnvelopeFill, ClockFill } from "react-bootstrap-icons";

function Hero() {
  return (
    <Container className="contact-hero py-3 mb-4">
        <Row className="justify-content-center">
            <Col md={6} className="contact-cards text-center">
                <Card className="p-4 mt-2">
                    <Card.Title><TelephoneFill className="contact-icon" /> Phone</Card.Title>
                    <Card.Text>613-OTT-BIKE (688-2453)</Card.Text>
                </Card>
                <Card className="p-4 mt-2">
                    <Card.Title><EnvelopeFill className="contact-icon" /> Email</Card.Title>
                    <Card.Text>Hello@centretowncycles.email.com</Card.Text>
                </Card>
                <Card className="p-4 mt-2">
                    <Card.Title><GeoAltFill className="contact-icon" /> Address</Card.Title>
                    <Card.Text>123 Bank St. Ottawa, Ontario, K1P 5N2</Card.Text>
                </Card>
                <Card className="p-4 mt-2">
                    <Card.Title><ClockFill className="contact-icon" /> Hours</Card.Title>
                    <Card.Text>Mon-Fri 9am-6pm, <br></br>Sat 10am-5pm, <br></br>Sun Closed</Card.Text>
                </Card>
            </Col>
            <Col md={6} className="text-center d-flex flex-column">
                <a href="https://maps.google.com/?q=123+Bank+St+Ottawa+Ontario" target="_blank" rel="noreferrer" style={{ textDecoration: "none", flex: 1, display: "flex", flexDirection: "column", marginTop: "0.5rem" }}>
                    <Card className="map-card p-4">
                        <Card.Text><GeoAltFill className="map-icon" /></Card.Text>
                        <Card.Title>123 Bank St. Ottawa, Ontario</Card.Title>
                    </Card>
                </a>
            </Col>
        </Row>
    </Container>
  );
}
export default Hero;