import { useState } from "react";

export default function ContactForm({ children }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

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
    // Her kan du sende data til backend eller email service
    setSuccess("Din besked er sendt! Tak for din henvendelse.");
    setForm({ firstname: "", lastname: "", email: "", message: "" });
  };

  return (
    <section>
      {children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Fornavn:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />

        <label htmlFor="lastname">Efternavn:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Besked:</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </section>
  );
}
