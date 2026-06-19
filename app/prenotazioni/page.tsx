
import BookingForm from '../components/BookingForm';
import UpcomingBookings from '../components/UpcomingBookings';

export default function Prenotazioni() {
  return (
    <>
      <h2>Prenotazioni</h2>
      <BookingForm />
      <section className="card">
        <h3>Prossime prenotazioni</h3>
        <UpcomingBookings />
      </section>
    </>
  );
}
