import services from '../data/services.js'

export default function ServicesSection() {
  return (
    <>
      {services.map((item, index) => (
        <div className="service-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}
