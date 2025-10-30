import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <section id="about" className="py-12">
          <div className="container">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-3 text-slate-600">
              We are a leading manufacturer and supplier of Thermoplastic Road Marking Paint designed to deliver high performance, long life, and superior visibility. Our products comply with IRC:35, BS 3262, and MORTH standards, ensuring reliable performance for both urban and highway applications.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold">Manufacturing Process Overview</h3>
                <ol className="list-decimal list-inside mt-3 text-slate-600">
                  <li>Raw Material Mixing – binder resin, pigments, fillers and glass beads are precisely mixed.</li>
                  <li>Melting & Blending – heated in thermoplastic reactor at 180–200°C.</li>
                  <li>Cooling & Pulverizing – cooled and ground to free-flowing powder.</li>
                  <li>Quality Testing – tested for reflectivity, adhesion and flow properties.</li>
                  <li>Packaging – Packed in 25 kg thermosealed bags or customized as requested.</li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold">Quality Assurance</h3>
                <ul className="list-disc list-inside mt-3 text-slate-600">
                  <li>Reflectance (ASTM D6359)</li>
                  <li>Softening Point (Ring and Ball Method)</li>
                  <li>Retro-reflectivity</li>
                  <li>Resistance to Wear and Tear</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 bg-slate-50">
          <div className="container">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img src="/assets/airport.jpg" alt="runway" className="h-44 w-full object-cover"/>
                <div className="p-4">
                  <div className="font-semibold">Airport runway marking</div>
                  <div className="text-sm text-slate-600 mt-1">High visibility runway markings with glass bead reflective finish.</div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img src="/assets/road.jpg" alt="road" className="h-44 w-full object-cover"/>
                <div className="p-4">
                  <div className="font-semibold">Highway center line</div>
                  <div className="text-sm text-slate-600 mt-1">Thermoplastic application on national highway.</div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img src="/assets/product.jpg" alt="product" className="h-44 w-full object-cover"/>
                <div className="p-4">
                  <div className="font-semibold">Industrial floor & packaging</div>
                  <div className="text-sm text-slate-600 mt-1">Product packaging and plant setup photos.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
