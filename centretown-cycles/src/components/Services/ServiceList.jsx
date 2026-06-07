import { Container, Card, Row, ListGroup, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import flatTire from '../../assets/flatTire.jpg';
import tuneUp from '../../assets/tuneUp.jpg';
import assembly from '../../assets/assembly.jpg';
import breaks from '../../assets/breaks.jpg';

function ServiceList() {
	return (
		<Container className='service-list pt-5'>
			<Row className='justify-content-center'>
				<Col md={5}>
					<Card>
						<Card.Img
							variant='top'
							src={tuneUp}
						/>
						<Card.Body>
							<Card.Title>Basic Tune-Up</Card.Title>
						</Card.Body>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								Gear adjustment, brake check, lubrication
							</ListGroup.Item>
							<ListGroup.Item>$45 - $65</ListGroup.Item>
							<ListGroup.Item>
                                <Button variant='primary' as={Link} to="/booking" state={{ service: "Tune-up" }}>Book Now</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>

				<Col md={5}>
					<Card>
						<Card.Img
							variant='top'
							src={breaks}
						/>
						<Card.Body>
							<Card.Title>Break Adjustment</Card.Title>
						</Card.Body>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								Full brake system check and adjustment
							</ListGroup.Item>
							<ListGroup.Item>$20 - $40</ListGroup.Item>
							<ListGroup.Item>
                                <Button variant='primary' as={Link} to="/booking" state={{ service: "Brake Adjustment" }}>Book Now</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
            <Row className='justify-content-center mt-4'>
                <Col md={5}>
					<Card>
						<Card.Img
							variant='top'
							src={assembly}
						/>
						<Card.Body>
							<Card.Title>Full Overhaul</Card.Title>
						</Card.Body>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								Complete disassembly, cleaning and rebuild
							</ListGroup.Item>
							<ListGroup.Item>$120 - $180</ListGroup.Item>
							<ListGroup.Item>
                                <Button variant='primary' as={Link} to="/booking" state={{ service: "Full Overhaul" }}>Book Now</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>

				<Col md={5}>
					<Card>
						<Card.Img
							variant='top'
							src={flatTire}
						/>
						<Card.Body>
							<Card.Title>Flat Tire Repair</Card.Title>
						</Card.Body>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								Tube replacement, patching, wheel truing
							</ListGroup.Item>
							<ListGroup.Item>$20 - $35</ListGroup.Item>
							<ListGroup.Item>
                                <Button variant='primary' as={Link} to="/booking" state={{ service: "Flat Tire Repair" }}>Book Now</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
            </Row>
		</Container>
	);
}
export default ServiceList;
