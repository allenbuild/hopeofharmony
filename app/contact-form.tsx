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
    <form className="modern-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input name="name" type="text" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required />
      </label>
      <label>
        <span>Subject</span>
        <input name="subject" type="text" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <div className="form-submit-row">
        <button className="button" type="submit">Submit <span aria-hidden="true">↗</span></button>
        <p role="status" aria-live="polite">{submitted ? "Thanks for submitting!" : ""}</p>
      </div>
    </form>
  );
}
