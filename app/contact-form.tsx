"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("subject") ?? "");
    const body = [
      `Name: ${String(data.get("name") ?? "")}`,
      `Email: ${String(data.get("email") ?? "")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:harmonyofhope.org@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form
      className="modern-form"
      aria-labelledby="contact-page-title"
      onSubmit={handleSubmit}
    >
      <label htmlFor="contact-name">
        <span>Name</span>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </label>
      <label htmlFor="contact-email">
        <span>Email</span>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </label>
      <label htmlFor="contact-subject">
        <span>Subject</span>
        <input id="contact-subject" name="subject" type="text" required />
      </label>
      <label htmlFor="contact-message">
        <span>Message</span>
        <textarea id="contact-message" name="message" rows={5} required />
      </label>
      <div className="form-submit-row">
        <button className="button" type="submit">Submit <span aria-hidden="true">↗</span></button>
        <p role="status" aria-live="polite" aria-atomic="true">
          {submitted ? "Thanks for submitting!" : ""}
        </p>
      </div>
    </form>
  );
}
