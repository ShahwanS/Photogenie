"use client";

import React, {
  ChangeEvent,
  useRef,
  useState,
  FormEvent,
  useEffect,
} from "react";
import emailjs from "@emailjs/browser";

// Extend the Window interface to include grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

// Define a type for the form data
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string>("");

  useEffect(() => {
    const loadReCaptcha = () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=6LcNihYpAAAAAOwedPob8V6XfDyUTCwJY7bGmhfo`;
      script.addEventListener("load", () => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute("6LcNihYpAAAAAOwedPob8V6XfDyUTCwJY7bGmhfo", {
              action: "submit",
            })
            .then((token: string) => {
              setRecaptchaToken(token);
            });
        });
      });
      document.head.appendChild(script);
    };

    loadReCaptcha();
  }, []);

  // Handle changes in form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if consent is given
    if (!formData.consent) {
      alert("Please agree to the terms and conditions to send the message.");
      return;
    }

    if (!recaptchaToken) {
      alert("reCAPTCHA validation failed. Please try again.");
      return;
    }

    emailjs
      .sendForm(
        "service_7wmxyya",
        "template_qdfydjp",
        form.current!,
        "4t9MKVWtL7QlKFUsk"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset the form data
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            consent: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mx-auto px-4 py-8 flex flex-col sm:flex-row mt-[300px] bg-[#2D2D2D] w-full h-full">
      <div className="w-full sm:w-1/2 px-4 space-y-10">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-4 text-[#9E9E9E]">
          Kontaktieren Sie uns
        </h2>
        <p className="mb-4">
          Haben Sie Fragen oder Anfragen? Zögern Sie nicht, uns zu kontaktieren!
        </p>
        <div className="text-[#9E9E9E]">
          <p className="mb-4">
            <i className="fas fa-envelope "></i> ✉ Saif.Shahwan@icloud.com
          </p>
          <p>
            <i className="fas fa-phone "></i> ☏ +49 (176) 61855362
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 px-4">
        <form onSubmit={sendEmail} ref={form} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="firstName" className="text-white block mb-2">
                Vorname{" "}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="lastName" className="text-white block mb-2">
                Nachname
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="email" className="text-white block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email.."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="phone" className="text-white block mb-2">
                Handynummer
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-white block mb-2">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-52"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            />
            <label htmlFor="consent" className="ml-2 text-sm text-white">
              Ich stimme den Bedingungen und Konditionen zu{" "}
            </label>
          </div>
          <button
            type="submit"
            value="Send"
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
