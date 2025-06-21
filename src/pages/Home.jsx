import React from "react";
import { Link } from "react-router-dom";

const shirtImage = "/images/shirt.jpg";
const jeansImage = "/images/jeans.jpg";
const sunglassesImage = "/images/sglass.jpg";
const shoesImage = "/images/shoe.jpg";
const formalShirtImage = "/images/f-shirtA.jpg";
const jeansAImage = "/images/jeansA.jpg";
const graphicTshirtImage = "/images/g-tshirtA.jpg";
const levisImage = "/images/levis.jpg";
const adidasImage = "/images/addidasshoe.jpg";
const nikeImage = "/images/niketshirt.jpg";
const shoesAImage = "/images/shoeA.jpg";
const puma = "/images/puma.jpg";

function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Elevate Your Style with{" "}
            <span className="text-primary">UrbanWear</span>
          </h1>
          <p className="text-lg text-gray-600">
            Premium shirts, t‑shirts, jeans & sunglasses curated for the modern
            man.
          </p>
          <Link
            to="/products"
            className="inline-block bg-primary hover:bg-accent hover:text-black text-white px-6 py-3 rounded-full text-lg transition"
          >
            Explore Collection
          </Link>
        </div>
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={shirtImage}
            alt="Men's Fashion"
            className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <CategoryCard to="/shirts" img={shirtImage} title="Shirts" />
          <CategoryCard
            to="/sunglass"
            img={sunglassesImage}
            title="Sunglasses"
          />
          <CategoryCard to="/jeans" img={jeansImage} title="Jeans" />
          <CategoryCard to="/shoes" img={shoesImage} title="Shoes" />
        </div>
      </section>

      <section className="bg-white py-14 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard img={shoesAImage} title="Running Shoes" price={1999} />
            <ProductCard
              img={graphicTshirtImage}
              title="Graphic T‑Shirt"
              price={799}
            />
            <ProductCard
              img={formalShirtImage}
              title="Formal Shirt"
              price={1299}
            />
            <ProductCard img={jeansAImage} title="Blue Jeans" price={1499} />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Top Brands We Feature
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center h-40">
              <img
                src={nikeImage}
                alt="Nike"
                className="max-h-40 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center h-40">
              <img
                src={levisImage}
                alt="Levi's"
                className="max-h-40 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center h-40">
              <img
                src={adidasImage}
                alt="Adidas"
                className="max-h-33 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center h-40">
              <img
                src={puma}
                alt="Puma"
                className="max-h-36 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">
            🛍️ Explore the Latest Trends in Shirts and More!
          </h2>
          <Link
            to="/products"
            className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
          >
            Browse Collection
          </Link>
        </div>
      </section>

      <FAQSection />

      <TestimonialsSection />

      <WhyShopSection />

      <AboutSection />
    </div>
  );
}

function CategoryCard({ to, img, title }) {
  return (
    <Link
      to={to}
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img src={img} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4 font-semibold">{title}</div>
    </Link>
  );
}

function ProductCard({ img, title, price }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={img}
        alt={title}
        className="mb-3 w-full h-48 object-cover rounded-md"
      />
      <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
      <p className="text-gray-600">₹{price.toLocaleString()}</p>
    </div>
  );
}

function BrandLogo({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-12 grayscale hover:grayscale-0 transition"
    />
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How do I track my order?",
      a: "Once your order is shipped, you'll receive a tracking number via email/SMS.",
    },
    {
      q: "Do you offer returns or exchanges?",
      a: "Yes! You can return or exchange any item within 7 days of delivery.",
    },
    {
      q: "Are there any size charts?",
      a: "Absolutely! Each product page includes a detailed size guide.",
    },
  ];

  return (
    <section className="bg-gray-100 py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-xl">{q}</h4>
              <p className="text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const quotes = [
    "UrbanWear shirts feel premium and fit perfectly!",
    "I love the sleek design of the shoes!",
    "Best quality jeans I’ve purchased online.",
    "Fast delivery and excellent customer service!",
  ];

  return (
    <section className="bg-gray-100 py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {quotes.map((quote, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow text-left">
              <p className="text-gray-700 italic mb-2">“{quote}”</p>
              <p className="text-sm font-semibold text-right text-primary">
                – Customer {idx + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyShopSection() {
  const perks = [
    {
      title: "✅ Premium Quality",
      desc: "We source only the finest fabrics and materials for long‑lasting style.",
    },
    {
      title: "🚚 Fast Delivery",
      desc: "Get your fashion fix fast with our reliable shipping service.",
    },
    {
      title: "🔄 Easy Returns",
      desc: "Something not right? Return it within 7 days, no questions asked.",
    },
    {
      title: "💬 24/7 Support",
      desc: "Our team is here around the clock to help with your orders or questions.",
    },
  ];

  return (
    <section className="py-14 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Shop With Us?</h2>
        <p className="text-lg mb-10 text-gray-300">
          Trusted by thousands of men. Here’s why they choose UrbanWear.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {perks.map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-xl mb-2">{title}</h4>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 bg-white text-gray-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-primary">UrbanWear</span>
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            UrbanWear isn’t just about clothing — it’s about confidence. We
            blend the edge of street fashion with the comfort of everyday
            essentials, tailored for the modern man.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-600">
            Whether you’re heading to a business meet or chilling on the
            weekend, our premium, handpicked pieces keep you sharp and stylish
            at every step.
          </p>
          <ul className="space-y-3 text-left">
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-2">✔️</span>Curated
              collections updated monthly
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-2">✔️</span>Ethical
              manufacturing & sustainable fabrics
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-2">✔️</span>Designed
              for Indian body types & climates
            </li>
          </ul>
        </div>

        <div
          className="w-full h-80 bg-gray-200 rounded-lg shadow-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-fashion.jpg')" }}
        ></div>
      </div>
    </section>
  );
}

export default Home;
