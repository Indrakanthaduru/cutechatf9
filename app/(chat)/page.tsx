import FlightBookingModal from '@/components/flight-booking-modal';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Travel Booking Platform</h1>
        <p className="mb-8 text-gray-600">Book your next flight with our AI-powered assistant</p>
        <FlightBookingModal />
      </div>
    </main>
  );
}