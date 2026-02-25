import ContactForm from "../components/form/contactform.jsx";

export default function Contact() {
  return (
    <>
      <section className="contact-page-hero">
        <div className="contact-page-hero-content">
          <h1 className="heading-1">Kontakt mig</h1>
          <p className="hero-p">
            Har du et spørgsmål, et projekt i tankerne, eller vil du bare sige hej?<br />
            Jeg hører gerne fra dig — udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
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
