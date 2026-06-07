import { Container, Card, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleFill } from 'react-bootstrap-icons';

function AppointmentConfirmation() {
	const { state } = useLocation();
	const navigate = useNavigate();

	const { service, date, timeSlot } = state ?? {};

	const formattedDate = date
		? new Date(date).toLocaleDateString('en-CA', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
		  })
		: '—';

	return (
		<Container className='confirmation-container'>
			<Card className='confirmation-card'>
				<div className='confirmation-icon'>
					<CheckCircleFill size={64} />
				</div>
				<Card.Title className='confirmation-title'>
					Appointment Confirmed!
				</Card.Title>
				<Card.Subtitle className='confirmation-subtitle'>
					Here's a summary of your booking.
				</Card.Subtitle>
				<div className='confirmation-details'>
					<div className='confirmation-row'>
						<span className='confirmation-label'>Service</span>
						<span className='confirmation-value'>{service}</span>
					</div>
					<div className='confirmation-row'>
						<span className='confirmation-label'>Date</span>
						<span className='confirmation-value'>{formattedDate}</span>
					</div>
					<div className='confirmation-row'>
						<span className='confirmation-label'>Time</span>
						<span className='confirmation-value'>{timeSlot}</span>
					</div>
				</div>
				<div className='confirmation-actions'>
					<Button className='confirmation-back-btn' onClick={() => navigate('/booking')}>
						Book Another
					</Button>
					<Button className='confirmation-home-btn' onClick={() => navigate('/')}>
						Back to Home
					</Button>
				</div>
			</Card>
		</Container>
	);
}

export default AppointmentConfirmation;
