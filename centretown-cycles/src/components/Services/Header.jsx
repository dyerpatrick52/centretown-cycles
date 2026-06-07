import {Row, Col, Card} from 'react-bootstrap';
    
function Header() {
  return (
    <Row className="services-header justify-content-center">
            <Col xs={12}>
                <Card className="services-header-card">
                    <Card.Body>
                        <Card.Title>Our Services and Pricing!</Card.Title>
                        <Card.Text>
                            No hidden fees, just honest work
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
  );
}
export default Header;