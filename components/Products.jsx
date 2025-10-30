export default function Products(){
  return (
    <section id="products" className="py-12 bg-slate-50">
      <div className="container">
        <h2 className="text-2xl font-semibold">Our Products</h2>
        <p className="mt-2 text-slate-600">Thermoplastic road marking paints engineered for performance.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">White Thermoplastic Road Marking Paint</h3>
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
              <li>High retro-reflectivity & durability</li>
              <li>Fast drying & skid-resistant</li>
              <li>Good for pedestrian crossings, edge lines & lane markings</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Yellow Thermoplastic Road Marking Paint</h3>
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
              <li>UV-resistant, anti-crack & long-lasting</li>
              <li>Excellent adhesion to bitumen & concrete</li>
              <li>Ideal for center lines & divider markings</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Custom Colors & Specs</h3>
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
              <li>Available in Red, Blue and other shades</li>
              <li>Formulations available for tenders & client specs</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Technical Specifications</h3>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm rounded-md overflow-hidden">
              <tbody className="bg-white">
                <tr className="border-b"><td className="p-3 font-medium">Softening Point</td><td className="p-3">100°C – 120°C</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Specific Gravity</td><td className="p-3">1.9 – 2.1</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Binder Content</td><td className="p-3">18 – 22%</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Glass Bead Content</td><td className="p-3">20 – 30%</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Drying Time</td><td className="p-3">3 – 5 minutes</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Application Temperature</td><td className="p-3">180°C – 200°C</td></tr>
                <tr><td className="p-3 font-medium">Reflectivity</td><td className="p-3">≥ 250 mcd/lux/m²</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
