import {
	Container,
	Card,
	Row,
	Col,
	FormGroup,
	Form,
	Button,
} from 'react-bootstrap';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

function Appointment() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [service, setService] = useState(state?.service ?? 'Tune-up');
	const [date, setDate] = useState(null);
	const [timeSlot, setTimeSlot] = useState(null);
	const TIME_SLOTS = [
		'9:00am - 11:00am',
		'11:00am - 1:00pm',
		'1:00pm - 3:00pm',
		'3:00pm - 5:00pm',
	];

	function handleBook() {
		navigate('/booking/confirmation', { state: { service, date, timeSlot } });
	}

	return (
		<Container className='appointment-container'>
			<Card className='appointment-card'>
				<Card.Title>Book Your Appointment</Card.Title>
				<Card.Subtitle>
					Select a service, pick a date, and you're done!
				</Card.Subtitle>
				<FormGroup className='dropdown'>
					<Form.Label>Select a service:</Form.Label>
					<Form.Select
						value={service}
						onChange={(e) => setService(e.target.value)}
					>
						<option>Tune-up</option>
						<option>Brake Adjustment</option>
						<option>Full Overhaul</option>
						<option>Flat Tire Repair</option>
					</Form.Select>
				</FormGroup>
				<Row className='align-items-start mx-1 mb-3'>
					<Col xs='auto'>
						<DatePicker
							selected={date}
							onChange={(d) => setDate(d)}
							minDate={new Date()}
							inline
						/>
					</Col>
					<Col className='time-slots-col'>
						<p className='time-slots-label'>Select a time:</p>
						{TIME_SLOTS.map((slot) => (
							<Button
								key={slot}
								className={`time-slot-btn ${timeSlot === slot ? 'selected' : ''}`}
								onClick={() => setTimeSlot(slot)}
							>
								{slot}
							</Button>
						))}
					</Col>
				</Row>
				<div className='book-btn-wrapper'>
					<Button
						className='book-appointment-btn'
						disabled={!date || !timeSlot}
						onClick={handleBook}
					>
						Book Appointment
					</Button>
				</div>
			</Card>
		</Container>
	);
}

export default Appointment;
