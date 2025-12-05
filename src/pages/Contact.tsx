import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import React from 'react'
import { toast } from 'react-toastify';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '' , message: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const form = event.currentTarget;
    const formDataToSend = new FormData(form);
    formDataToSend.append("access_key", "d8b34e39-52fb-482e-a7ab-26fb2b96c61c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        form.reset();
        setFormData({ name: '', email: '', subject: '' , message: '' });
      } else {
        console.error("Error:", data);
        toast.error(data.message || "Failed to send message.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#6D00C0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1>Get in Touch</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to learn more about our work or how you can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[#6D00C0] mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#6D00C0] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#6D00C0] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#6D00C0] focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#6D00C0] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full bg-[#6D00C0] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                >
                {isSending ? "Sending..." : ""}
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[#6D00C0] mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  You can also reach us directly through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#6D00C0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#6D00C0] mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      No. 20810 Unity P, Seke<br />
                      Chitungwiza, Zimbabwe
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#F4FF05] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#6D00C0]" />
                  </div>
                  <div>
                    <h3 className="text-[#6D00C0] mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+263782964717" className="hover:text-[#6D00C0] transition-colors">
                        +263 78 296 4717
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+263774096258" className="hover:text-[#6D00C0] transition-colors">
                        +263 77 409 6258
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#6D00C0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#6D00C0] mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=doubleportionorganisation@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#6D00C0] transition-colors break-all"
                      >
                        doubleportionorganisation@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-8 bg-[#6D00C0] text-white rounded-2xl">
                <h3 className="mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>Open 24/7</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>Open 24/7</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Open</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-[#6D00C0] mb-4">Find Us</h2>
            <p className="text-gray-600">
              Visit our office in Chitungwiza, Zimbabwe
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
              className="rounded-3xl overflow-hidden shadow-xl bg-gray-200 h-60 sm:h-80 md:h-96 lg:h-[36rem] xl:h-[48rem]"
          >
            <div className="w-full h-full bg-muted border border-border rounded-lg overflow-hidden">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30523.89456344719!2d31.0418!3d-18.0144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAwJzUxLjgiUyAzMcKwMDInMzAuNSJF!5e0!3m2!1sen!2szw!4v1234567890"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
