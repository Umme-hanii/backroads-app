import Title from "./Title"
import { services } from "../data"

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" span="services" />
      <div className="section-center services-center">
        {services.map(service => {
          return (
            <article className="service" key={service.id}>
              <span className="service-icon"><i className={service.icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{service.name}</h4>
                <p className="service-text">{service.info}                  
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services