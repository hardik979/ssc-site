// src/components/ContactAppointmentSection.tsx
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircleMoreIcon,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  contact: string;
  organizationName: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
}

export default function ContactAppointmentSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    contact: "",
    organizationName: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error while typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitStatus("idle");
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (!phoneRegex.test(form.contact.trim())) {
      newErrors.contact = "Please enter a valid phone number.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Google Form submission
      const formData = new FormData();

      // Replace these entry IDs with your actual Google Form field entry IDs
      formData.append("entry.1995762809", form.name);
      formData.append("entry.355345215", form.email);
      formData.append("entry.1030419938", form.contact);
      formData.append("entry.1613813149", form.organizationName);

      // Replace YOUR_FORM_ID with your actual Google Form ID

      const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLSe6ZdIP84sYFzQmTahpVu5VgowQUpf0V6UQzyvlWi4vsXGAmA/formResponse`;

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms
      });

      setSubmitStatus("success");
      setForm({
        name: "",
        email: "",
        contact: "",
        organizationName: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-md px-4 py-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] transition";
  const inputError = "border-red-500 focus:ring-red-500 focus:border-red-500";

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Outer card */}
        <div className="rounded-3xl bg-[#3b4252] shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* LEFT: FORM */}
            <div className="flex-1 px-8 lg:px-12 py-10">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Book An Appointment
              </h2>
              <p className="mt-3 text-xs md:text-sm text-gray-300 max-w-xl">
                Engineered for Excellence, Built for Performance. Engineered for
                built the process of the
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
                noValidate
              >
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-200">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className={`${inputBase} ${errors.name ? inputError : ""}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-300">{errors.name}</p>
                  )}
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-200">
                      E-Mail
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your E-mail"
                      className={`${inputBase} ${
                        errors.email ? inputError : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-300">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-200">
                      Contact
                    </label>
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Enter your Contact Number"
                      className={`${inputBase} ${
                        errors.contact ? inputError : ""
                      }`}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-xs text-red-300">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-200">
                    Organization Name{" "}
                    <span className="text-gray-400 normal-case">
                      (Optional)
                    </span>
                  </label>
                  <input
                    name="organizationName"
                    value={form.organizationName}
                    onChange={handleChange}
                    placeholder="Enter your Organization Name"
                    className={inputBase}
                  />
                </div>

                {/* Status text */}
                {submitStatus === "success" && (
                  <p className="text-xs text-emerald-300">
                    Thank you! Your request has been received.
                  </p>
                )}
                {submitStatus === "error" &&
                  Object.keys(errors).length === 0 && (
                    <p className="text-xs text-red-300">
                      Something went wrong. Please try again.
                    </p>
                  )}

                {/* Yellow button centered */}
                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-[#fbbf24] px-10 py-3 text-sm font-semibold text-gray-900 shadow-md transition hover:bg-[#f59e0b] disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT: CONTACT INFO PANEL */}
            <aside className="w-full lg:w-[340px] bg-linear-to-b from-[#111827] via-[#111827] to-[#1f2937] px-8 py-10 text-white">
              <h3 className="text-xl font-semibold">
                Hi! We Are Always Here To Help Here
              </h3>

              {/* Phone card */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-[#1f2937] px-5 py-4 shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111827]">
                    <Phone className="h-5 w-5 text-[#fbbf24]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">Phone Number</p>
                    <p className="text-sm font-semibold">+91 70878 15515</p>
                  </div>
                </div>

                {/* Address card */}
                <div className="flex items-center gap-4 rounded-2xl bg-[#1f2937] px-5 py-4 shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111827]">
                    <MapPin className="h-5 w-5 text-[#fbbf24]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">Address</p>
                    <p className="text-sm font-semibold leading-snug">
                      Nehru Park Road, Jalandhar,
                      <br />
                      Punjab – 144001
                    </p>
                  </div>
                </div>

                {/* Email card */}
                <div className="flex items-center gap-4 rounded-2xl bg-[#1f2937] px-5 py-4 shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111827]">
                    <Mail className="h-5 w-5 text-[#fbbf24]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">E - Mail</p>
                    <p className="text-sm font-semibold break-all">
                      Contact@sscglobal.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-white/10" />

              {/* Socials */}
              <div>
                <p className="text-sm font-semibold">Connect With Us :</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                  >
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                  >
                    <Facebook className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                  >
                    <Twitter className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                  >
                    <MessageCircleMoreIcon className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
