import ContactForm from "../form/contactform";

export default function FrontpageContact() {
  return (
    <section className="frontpage-contact">
      <h2 className="frontpage-contact-title">
        Kontakt
      </h2>
      <p className="frontpage-contact-text">
        Har du spørgsmål, ønsker at samarbejde eller bare vil sige hej? Du er altid velkommen til at kontakte mig!
      </p>
      <ContactForm />
    </section>
  );
}
