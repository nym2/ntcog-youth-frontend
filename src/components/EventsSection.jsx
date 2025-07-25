import CountdownTimer from "./CountdownTimer";

const EventsSection = () => {
  const targetDate = "2025-12-03T08:00:00"; // Adjust to your actual Youth Explosion date & time

  return (
    <section className="bg-gradient-to-b from-white to-blue-100 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Upcoming Event: Youth Explosion 2025
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Get ready for a life-transforming gathering of youth from all over the nation.
          Don’t miss the movement!
        </p>

        <CountdownTimer targetDate={targetDate} />
      </div>
    </section>
  );
};

export default EventsSection;
