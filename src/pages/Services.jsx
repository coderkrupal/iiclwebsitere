import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faLaptopCode,
  faTools,
  faCloud,
  faShieldAlt,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    {
      name: "Container Inspection & Certification",
      url: "https://www.icclindia.com/",
      icon: faCogs,
    },
    {
      name: "Repair & Maintenance Supervision",
      url: "https://www.icclindia.com/",
      icon: faTools,
    },
    {
      name: "Leasing & Compliance Consulting",
      url: "https://www.icclindia.com/",
      icon: faUsersCog,
    },
    {
      name: "Full Stack Development",
      url: "https://www.icclindia.com/",
      icon: faLaptopCode,
    },
    {
      name: "Cloud Solutions",
      url: "https://www.icclindia.com/",
      icon: faCloud,
    },
    {
      name: "Cybersecurity Services",
      url: "https://www.icclindia.com/",
      icon: faShieldAlt,
    },
  ];

  return (
    <section className="page services">
      <h2>Our Services</h2>
      <img
        src="images/jeshoots-com-sMKUYIasyDM-unsplash.jpg"
        alt="Services Overview"
        className="page-image"
      />
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
