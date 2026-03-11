import { useState, useRef, useEffect } from "react";

export default function ContactForm({ children, endpoint }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [fieldSuccess, setFieldSuccess] = useState({});
  const [touched, setTouched] = useState({});
  const [popup, setPopup] = useState(null); // { type: 'success' | 'error', message: string }
  const [sending, setSending] = useState(false);

  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = "auto";
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  }, [form.message]);

  const validateField = (name, value) => {
    if (name === "firstname" || name === "lastname" || name === "message") {
      if (!value.trim()) return "Dette felt er påkrævet.";
    }
    if (name === "email") {
      if (!value.trim()) return "Dette felt er påkrævet.";
      if (!/\S+@\S+\.\S+/.test(value)) return "Indtast en gyldig email.";
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
      setFieldSuccess((prev) => ({ ...prev, [name]: !error && value.trim() !== "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
    setFieldSuccess((prev) => ({ ...prev, [name]: !error && value.trim() !== "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["firstname", "lastname", "email", "message"];
    const newTouched = {};
    const newErrors = {};
    const newSuccess = {};

    requiredFields.forEach((name) => {
      newTouched[name] = true;
      const error = validateField(name, form[name]);
      newErrors[name] = error;
      newSuccess[name] = !error && form[name].trim() !== "";
    });

    setTouched((prev) => ({ ...prev, ...newTouched }));
    setFieldErrors((prev) => ({ ...prev, ...newErrors }));
    setFieldSuccess((prev) => ({ ...prev, ...newSuccess }));

    if (Object.values(newErrors).some(Boolean)) return;

    const FORMSPREE_ENDPOINT = endpoint || import.meta.env.VITE_FORMSPREE_ENDPOINT;

    (async () => {
      try {
        setSending(true);

        const body = {
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          message: form.message,
          _subject: `Kontaktformular fra ${form.firstname} ${form.lastname}`,
        };
        if (form.company) body.company = form.company;

        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          const msg = data.error || data.message || "Der opstod en fejl ved afsendelse.";
          setPopup({ type: "error", message: msg });
        } else {
          setPopup({ type: "success", message: "Din besked er sendt! Tak for din henvendelse." });
          setForm({ firstname: "", lastname: "", email: "", company: "", message: "" });
          setFieldErrors({});
          setFieldSuccess({});
          setTouched({});
        }
      } catch {
        setPopup({ type: "error", message: "Kunne ikke sende beskeden. Prøv igen senere." });
      } finally {
        setSending(false);
      }
    })();
  };

  const fieldClass = (name) => {
    let cls = "contact-form-field";
    if (fieldErrors[name]) cls += " has-error";
    else if (fieldSuccess[name]) cls += " has-success";
    return cls;
  };

  return (
    <section className="contact-form-section">
      {children}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>

        {/* Fornavn */}
        <div className={fieldClass("firstname")}>
          <div className="contact-form-input-wrapper">
            <input
              className="contact-form-input"
              type="text"
              id="firstname"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
            />
            <label className="contact-form-label" htmlFor="firstname">Fornavn</label>
            <span className="contact-form-field-icon" aria-hidden="true" />
            {fieldErrors.firstname && (
              <span className="contact-form-field-error">{fieldErrors.firstname}</span>
            )}
          </div>
        </div>

        {/* Efternavn */}
        <div className={fieldClass("lastname")}>
          <div className="contact-form-input-wrapper">
            <input
              className="contact-form-input"
              type="text"
              id="lastname"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
            />
            <label className="contact-form-label" htmlFor="lastname">Efternavn</label>
            <span className="contact-form-field-icon" aria-hidden="true" />
            {fieldErrors.lastname && (
              <span className="contact-form-field-error">{fieldErrors.lastname}</span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className={fieldClass("email")}>
          <div className="contact-form-input-wrapper">
            <input
              className="contact-form-input"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
            />
            <label className="contact-form-label" htmlFor="email">Email</label>
            <span className="contact-form-field-icon" aria-hidden="true" />
            {fieldErrors.email && (
              <span className="contact-form-field-error">{fieldErrors.email}</span>
            )}
          </div>
        </div>

        {/* Virksomhed (valgfrit) */}
        <div className="contact-form-field">
          <div className="contact-form-input-wrapper">
            <input
              className="contact-form-input"
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder=" "
            />
            <label className="contact-form-label" htmlFor="company">
              Virksomhed <span className="contact-form-label-optional">(valgfrit)</span>
            </label>
          </div>
        </div>

        {/* Besked */}
        <div className={fieldClass("message")}>
          <div className="contact-form-input-wrapper">
            <textarea
              ref={messageRef}
              className="contact-form-textarea"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
            />
            <label className="contact-form-label contact-form-label--textarea" htmlFor="message">Besked</label>
            <span className="contact-form-field-icon contact-form-field-icon--textarea" aria-hidden="true" />
            {fieldErrors.message && (
              <span className="contact-form-field-error">{fieldErrors.message}</span>
            )}
          </div>
        </div>

        <button className="contact-form-button" type="submit" disabled={sending}>
          {sending ? "Sender..." : "Send"}
        </button>
      </form>

      {popup && (
        <div className="contact-form-popup-overlay" onClick={() => setPopup(null)}>
          <div
            className={`contact-form-popup contact-form-popup--${popup.type}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="contact-form-popup-icon" aria-hidden="true">
              {popup.type === "success" ? "✓" : "✕"}
            </span>
            <p className="contact-form-popup-message">{popup.message}</p>
            <button className="contact-form-popup-close" onClick={() => setPopup(null)}>
              Luk
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
