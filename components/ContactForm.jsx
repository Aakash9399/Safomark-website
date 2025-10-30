import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const f = e.target;
    const name = f.name.value;
    const email = f.email.value;
    const phone = f.phone.value;
    const message = f.message.value;

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setStatus("✅ Enquiry sent successfully!");
      f.reset();
    } else {
      setStatus("❌ Failed to send. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p className="text-slate-600 mt-2">
          Contact us for quotes, technical details, or bulk enquiries.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" required className="w-full border p-3 rounded" placeholder="Your name" />
              <input name="email" type="email" required className="w-full border p-3 rounded" placeholder="Email" />
              <input name="phone" className="w-full border p-3 rounded" placeholder="Phone" />
              <textarea name="message" rows="5" required className="w-full border p-3 rounded" placeholder="Tell us about your project"></textarea>
              <button
  type="submit"
  disabled={loading}
  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold disabled:opacity-50 transition"
>
  {loading ? "Sending..." : "Send Message"}
</button>

              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">Contact Details</h3>
            <p className="mt-3 text-slate-600">
              <strong>Phone:</strong>{" "}
              <a href="tel:+917974387103" className="text-primary">
                +91 79 7438 7103 , +91 99 2224 3520
              </a>
            </p>
            <p className="mt-2 text-slate-600">
              <strong>Address:</strong> Lammeta Road, Kumarra Churiya, Dist Rajnandgaon (C.G) 491558
            </p>
            <p className="mt-4 text-slate-600">
              <strong>Why choose Safomark:</strong>
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-2">
              <li>Premium raw materials</li>
              <li>Consistent quality and bulk capacity</li>
              <li>Custom formulations & on-time delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
