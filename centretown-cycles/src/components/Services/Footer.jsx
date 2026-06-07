import {Row, Col, Card, Container} from 'react-bootstrap';

function Footer(){
    return(
        <Container className="footer">
        <Row className="justify-content-center mt-4">
            <Card className="footer">
                <Card.Body className="text-center">
                    <Card.Title>
                        Not sure what you need? Call us at (613)-OTT-BIKE (688-2453)
                    </Card.Title>
                </Card.Body>
            </Card>
        </Row>
        </Container>
        
    );
}

export default Footer;