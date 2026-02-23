import { useState, useRef, useEffect } from "react";

export default function ContactForm({ children, endpoint }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      // reset height then set to scrollHeight to auto-grow
      messageRef.current.style.height = "auto";
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  }, [form.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpel validering
    if (!form.firstname || !form.lastname || !form.email || !form.message) {
      setError("Alle felter skal udfyldes.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Indtast en gyldig email.");
      return;
    }

    // Determine endpoint: prop -> env -> placeholder
    const FORMSPREE_ENDPOINT =
      endpoint || import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Send to service (Formspree-compatible JSON)
    (async () => {
      try {
        setSending(true);
        setError("");
        setSuccess("");

        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            message: form.message,
            _subject: `Kontaktformular fra ${form.firstname} ${form.lastname}`,
          }),
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          const msg = data.error || data.message || "Der opstod en fejl ved afsendelse.";
          setError(msg);
        } else {
          setSuccess("Din besked er sendt! Tak for din henvendelse.");
          setForm({ firstname: "", lastname: "", email: "", message: "" });
        }
      } catch {
        setError("Kunne ikke sende beskeden. Prøv igen senere.");
      } finally {
        setSending(false);
      }
    })();
  };

  return (
    <section className="contact-form-section">
      {children}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="firstname">Fornavn:</label>
          <input
            className="contact-form-input"
            type="text"
            id="firstname"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="lastname">Efternavn:</label>
          <input
            className="contact-form-input"
            type="text"
            id="lastname"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="email">Email:</label>
          <input
            className="contact-form-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="message">Besked:</label>
          <textarea
            ref={messageRef}
            className="contact-form-textarea"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="contact-form-button" type="submit" disabled={sending}>
          {sending ? "Sender..." : "Send"}
        </button>

        {error && <p className="contact-form-error">{error}</p>}
        {success && <p className="contact-form-success">{success}</p>}
      </form>
    </section>
  );
}
