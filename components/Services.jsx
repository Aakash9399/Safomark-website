export default function Services(){
  const items = [
    {
      title: 'Airport Marking',
      desc: 'Runway, taxiway and apron markings installed according to standards with high retro-reflectivity.',
      img: '/assets/airport.jpg'
    },
    {
      title: 'Road Marking',
      desc: 'Thermoplastic and paint marking for highways, urban roads, and parking with anti-skid properties.',
      img: '/assets/road.jpg'
    },
    {
      title: 'Industrial Coating',
      desc: 'Floor coatings, demarcations and safety zone markings for factories and warehouses.',
      img: '/assets/product.jpg'
    },
    {
      title: 'Maintenance & Refurbishment',
      desc: 'Re-marking, surface prep and maintenance contracts to keep markings visible and safe.',
      img: '/assets/product.jpg'
    }
  ]

  return (
    <section id="services" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="text-slate-600 mt-2">Application, refurbishment and customized marking solutions for roads, airports and industrial sites.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {items.map((s,i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
              <img src={s.img} alt={s.title} className="w-28 h-20 object-cover rounded"/>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
