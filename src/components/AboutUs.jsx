const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-16 text-center md:text-left">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          The National Youth Department of the New Testament Church of God – Kenya
          exists to inspire, equip, and empower the next generation of believers
          across the nation. With over <span className="font-semibold text-blue-600">2000+ youth</span> spread across 
          <span className="font-semibold text-blue-600"> 6 regions</span>, our goal is to build Christ-centered 
          communities, nurture leadership, and spread the Gospel with purpose and passion.
        </p>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          Through national gatherings like <span className="font-semibold text-blue-600">Youth Explosion</span> and
          <span className="font-semibold text-blue-600"> Youth Camp</span>, we create platforms where young people grow 
          spiritually, connect in fellowship, and make a difference in their communities.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
