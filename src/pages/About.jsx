import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">

      <section className="text-center py-16 bg-gradient-to-r from-pink-100 to-blue-100">
        <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are passionate about delivering high-quality products and exceptional service to our customers.
        </p>
      </section>

      
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          To revolutionize e-commerce by offering curated collections, seamless shopping experiences, and unmatched customer satisfaction.
        </p>
      </section>


      <section className="py-12 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
        <ul className="space-y-4 list-disc list-inside">
          <li> Premium quality products</li>
          <li> Fast and secure delivery</li>
          <li> 24/7 customer support</li>
          <li> Trusted by 10,000+ happy customers</li>
        </ul>
      </section>

      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p>
          Founded in 2023, our journey began with a vision to make quality products accessible to everyone online. What started as a small idea has grown into a thriving e-commerce business.
        </p>
      </section>


    </div>
  );
};

export default About;
