import "./Middle.css";
function Middle() {
  return (
    <div className="App">
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
      </section>

      <section className="welcome-section">
        <h2>We’re Welcoming New Patients And Can’t Wait To Meet You.</h2>
        <p>
          We use only the best quality materials on the market in order to
          provide the best products to our patients. So don’t worry about
          anything and book yourself.
        </p>
        <form>
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="input-phone"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
export default Middle;
