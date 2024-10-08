import "./Hero.css";

const Hero = () => {
  return (
    <section className="dental-experience">
      <div className="left-content">
        <h1>
          Get Ready For Your Best <br /> Ever <span>Dental Experience!</span>
        </h1>
        <p>
          We use only the best quality materials on the market in order to
          provide the best products to our patients. So don’t worry about
          anything and book yourself.
        </p>
        <div className="cta-buttons">
          <button className="appointment-btn">Book an appointment</button>
          <div className="emergency-contact">
            <span>Dental 24H Emergency</span>
            <a href="tel:0900-78601">0900-78601</a>
          </div>
        </div>
        <div className="testimonial">
          <img src="/public/coordinator.png" className="testimonial-img" />
          <div className="testimonial-text">
            <span>Thomas Daniel</span>
            <p>
              Top Quality Dental treatment done by field experts. Highly
              Recommended to everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <img
          src={
            "https://res.cloudinary.com/dhykxy8c3/image/upload/v1728402636/omd3vdb0a0ybl79oyupq.png"
          }
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
