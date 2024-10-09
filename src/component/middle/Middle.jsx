import PatientSection from "../WelcomeSection/PatientSection";
import "./Middle.css";

function Middle() {
  return (
    <div className="container">
      <section className="treatment-section">
        <div className="treatment-card">
          <h3>Root Canal Treatment</h3>
          <p>
            Root canal treatment (endodontics) is a dental procedure used to
            treat infection at the centre of a tooth.
          </p>
          <button>Learn More</button>
        </div>
        <div className="treatment-card">
          <h3>Cosmetic Dentist</h3>
          <p>
            Cosmetic dentistry is the branch of dentistry that focuses on
            improving the appearance of your smile.
          </p>
          <button>Learn More</button>
        </div>
        <div className="treatment-card">
          <h3>Dental Implants</h3>
          <p>
            A dental implant is an artificial tooth root placed into your jaw to
            hold a prosthetic tooth or bridge.
          </p>
          <button>Learn More</button>
        </div>
        <PatientSection />
      </section>
    </div>
  );
}
export default Middle;
