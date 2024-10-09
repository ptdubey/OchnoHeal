import "./Patientsection.css";
const PatientSection = () => {
  return (
    <section className="new-patients-section">
      <div className="content">
        <h1>We’re Welcoming New Patients And Can’t Wait To Meet You.</h1>
        <p>
          We use only the best quality materials on the market in order to
          provide the best products to our patients. So don't worry about
          anything and book yourself!
        </p>
        <form className="phone-form">
          <input type="tel" placeholder="Enter your Phone Number" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-container">
        <img
          src={
            "https://res.cloudinary.com/dhykxy8c3/image/upload/v1728489727/sszuhfmlpk6beh0bvfao.webp"
          } // Replace with your image URL
          alt="Patient"
        />
      </div>
    </section>
  );
};

export default PatientSection;
