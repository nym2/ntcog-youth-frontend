const PartnerWithUs = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Partner With Us
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Join hands with us as we impact lives and raise a godly generation of youth across Kenya and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Pray</h3>
            <p className="text-gray-600">
              Stand with us in prayer for the youth, the ministry, and the revival of our generation.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Give</h3>
            <p className="text-gray-600">
              Support the mission through donations or sponsoring youth to attend the event.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Serve</h3>
            <p className="text-gray-600">
              Volunteer your time, skills, or services before or during Youth Explosion 2025.
            </p>
          </div>
        </div>

        <button className="mt-10 px-6 py-3 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition">
          Contact Us to Partner
        </button>
      </div>
    </section>
  );
};

export default PartnerWithUs;
