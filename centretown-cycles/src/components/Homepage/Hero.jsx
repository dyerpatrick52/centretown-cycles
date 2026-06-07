import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import {Bicycle} from "react-bootstrap-icons";

function Hero(){
    return(
        <Row className="hero justify-content-center">
            <Col xs={12}>
                <Card className="hero-card">
                    <Card.Body>
                        <Card.Title>Welcome to Centretown Cycles!</Card.Title>
                        <Card.Text>
                            Your one-stop shop for all your cycling needs in the heart of the city.
                        </Card.Text>
                        <Button variant="primary">See all services</Button>
                        <Bicycle size={275} className="hero-icon" />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Hero;