export default function Hero(){
  return (
    <section id="home" className="bg-gradient-to-r from-white to-slate-50 py-12">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-dark">Durable Thermoplastic Road Marking Solutions</h1>
          <p className="mt-4 text-slate-600">
            Premium thermoplastic paints compliant with IRC:35, BS 3262 and MORTH standards — engineered for high visibility, long life and environmental safety.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">Request Quote</a>
            <a href="#products" className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700">Our Products</a>
          </div>
          <div className="mt-4 text-sm text-slate-500">
            <strong>Call:</strong> <a href="tel:+917974387103" className="text-primary">+91 79 7438 7103</a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="/assets/airport.jpg" alt="Airport marking" className="w-full h-64 object-cover"/>
        </div>
      </div>
    </section>
  )
}
