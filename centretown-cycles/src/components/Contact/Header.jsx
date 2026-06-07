import {Card, Container, Row} from 'react-bootstrap';
function Header(){
    return(
        <Container>
            <Row className="justify-content-md-center p-4 mt-4">
                <Card className="contact-header text-center">
                    <Card.Body>
                        <Card.Title>How to Contact Us</Card.Title>
                        <Card.Text>
                            We are easy to find in the heart of Centretown
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default Header;