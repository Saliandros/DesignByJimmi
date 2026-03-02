import ContactForm from "../components/form/contactform.jsx";

export default function Contact() {
  return (
    <>
      <section className="contact-page-hero">
        <div className="contact-page-hero-content">
          <h1 className="heading-1">Har du et spørgsmål, jeg lover at svare tilbage.</h1>
          <p className="hero-p">
            Jeg er altid åben for nye muligheder og samarbejder. Hvis du har et projekt i tankerne, eller bare vil sige hej, så tøv ikke med at kontakte mig!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="heading-2">Send en besked</h2>
            <p className="contact-text">Du er velkommen til at sende en besked via formularen herunder.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
