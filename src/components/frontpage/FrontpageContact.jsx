import ContactForm from "../form/contactform";

export default function FrontpageContact() {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="heading-2">Kontakt</h2>
          <p className="contact-text">
            Har du spørgsmål, ønsker at samarbejde eller bare vil sige hej? Du er altid velkommen til at kontakte mig!
          </p>
          <p className="contact-aside">
            Jeg er altid åben for nye muligheder og samarbejder. Hvis du har et projekt i tankerne, eller bare vil sige hej, så tøv ikke med at kontakte mig!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
