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
import { useLocation } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

function Appointment() {
	const { state } = useLocation();
	const [service, setService] = useState(state?.service ?? 'Tune-up');
	const [date, setDate] = useState(null);
	const [timeSlot, setTimeSlot] = useState(null);
	const TIME_SLOTS = [
		'9:00am - 11:00am',
		'11:00am - 1:00pm',
		'1:00pm - 3:00pm',
		'3:00pm - 5:00pm',
	];

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
				<div className='datepicker'>
					<DatePicker
						selected={date}
						onChange={(date) => setDate(date)}
						minDate={new Date()}
						inline
					/>
				</div>
				{TIME_SLOTS.map((slot) => (
					<Button
						key={slot}
						className={`time-slot-btn ${timeSlot === slot ? 'active' : ''}`}
						onClick={() => setTimeSlot(slot)}
					>
						{slot}
					</Button>
				))}
			</Card>
		</Container>
	);
}

export default Appointment;
