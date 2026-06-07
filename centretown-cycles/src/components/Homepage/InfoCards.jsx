import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Tools, CurrencyDollar, GeoAlt} from 'react-bootstrap-icons';


function InfoCards(){
    return(
        <Row className="info-cards justify-content-center g-4">
            <Col xs={4}>
                <Card className="quality-repairs">
                    <Card.Body>
                        <Tools size={64}/>
                        <Card.Title>Quality Repairs</Card.Title>
                        <Card.Text>
                            Our experienced mechanics provide top-notch repair services to get you back on the road in no time.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={4}>
                <Card className="fair-pricing">
                    <Card.Body>
                        <CurrencyDollar size={64}/>
                        <Card.Title>Fair Pricing</Card.Title>
                        <Card.Text>
                            We believe in transparent and competitive pricing for all our services.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={4}>
                <Card className="downtown-ottawa">
                    <Card.Body>
                        <GeoAlt size={64}/>
                        <Card.Title>Downtown Ottawa</Card.Title>
                        <Card.Text>
                            Conveniently located in the heart of downtown Ottawa, we are easily accessible for all your cycling needs.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
export default InfoCards;