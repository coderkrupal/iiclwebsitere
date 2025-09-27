import "../App.css";

export default function About() {
  return (
    <section className="page about">
      {/* Original Content */}
      <h2>About Us</h2>
      <img
        src="images/ahmed-siddiqui-DfuZPZxoxwQ-unsplash.jpg"
        alt="Our Team"
        className="page-image"
      />
      <p>
        Our team of experts ensures safety, efficiency, and reliability in
        container leasing and inspection services.
      </p>

      {/* Vision Section */}
      <div className="about-block">
        <h3>Our Vision</h3>
        <p>
          To be the most trusted and innovative partner in global container
          logistics, setting new benchmarks for reliability and customer
          satisfaction.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-block">
        <h3>Our Mission</h3>
        <p>
          Deliver reliable, sustainable, and customer-centric solutions across
          the container industry while promoting innovation and responsibility.
        </p>
      </div>

      {/* Values Section */}
      <div className="about-values">
        <h3>Our Core Values</h3>
        <ul>
          <li>✔ Safety First</li>
          <li>✔ Customer Commitment</li>
          <li>✔ Integrity & Transparency</li>
          <li>✔ Innovation & Excellence</li>
          <li>✔ Sustainability</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <h3>Our Leadership</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="images/business-man-500x341-1.webp" alt="CEO" />
            <p>
              <strong>John Doe</strong>
              <br />
              Chief Executive Officer
            </p>
          </div>
          <div className="team-member">
            <img src="images/Image1-4.png" alt="COO" />
            <p>
              <strong>Jane Smith</strong>
              <br />
              Chief Operating Officer
            </p>
          </div>
          <div className="team-member">
            <img
              src="images/Sujey-Edward-Chief-Technology-Officer-Federal-Market-IBM-Consulting.jpg"
              alt="CTO"
            />
            <p>
              <strong>Michael Lee</strong>
              <br />
              Chief Technology Officer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
