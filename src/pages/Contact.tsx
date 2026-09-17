import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Navigation,
  Plus,
  Minus,
  Star,
  Send,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

// Custom clean SVG Social Icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: 'CCTV Surveillance',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Valid e-mail address is required.';
    }
    if (!formData.message.trim()) errors.message = 'Please provide details about your requirement.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        serviceRequired: 'CCTV Surveillance',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF] font-sans text-[#264653]">
      {/* Top Title Header Section */}
      <section className="pt-16 pb-12 bg-[#F0F4FF] text-center">
        <div className="ref-container">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#264653] tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-[#527982] max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Reach out to our technology & surveillance experts. We're here to help build, secure, and scale your infrastructure.
          </p>
        </div>
      </section>

      {/* Main Grid: Get In Touch & Send a Message */}
      <section className="pb-16 bg-[#F0F4FF]">
        <div className="ref-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Get In Touch */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#264653] tracking-tight">
                  Get In Touch
                </h2>
                <p className="text-sm sm:text-base text-[#527982] leading-relaxed mt-4 max-w-lg font-medium">
                  Have questions about our security systems, IT maintenance, networking or software solutions? Connect with our engineering team today.
                </p>
              </div>

              {/* Contact List with Solid Coral Circle Icons */}
              <div className="space-y-6 pt-2">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#E76F51] flex items-center justify-center text-white shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#264653]">
                      Address
                    </h4>
                    <p className="text-sm text-[#527982] font-medium mt-0.5">
                      Picket, Opposite Jubilee Bus Station,
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Akbar Road, Secunderabad, Telangana – 500003
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#E76F51] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Phone className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#264653]">
                      Phone Number
                    </h4>
                    <p className="text-sm text-[#527982] font-medium mt-0.5">
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      +123-456-7890
                    </p>
                  </div>
                </div>

                {/* E-Mail */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#E76F51] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Mail className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#264653]">
                      E-Mail
                    </h4>
                    <a
                      href="mailto:info@cginfotech.in"
                      className="text-sm text-[#527982] hover:text-[#E76F51] transition-colors font-medium block mt-0.5"
                    >
                      info@cginfotech.in
                    </a>
                    <a
                      href="mailto:mailto@subx.com"
                      className="text-xs text-slate-400 hover:text-[#E76F51] transition-colors block mt-0.5"
                    >
                      mailto@subx.com
                    </a>
                  </div>
                </div>

              </div>

              <div className="w-full max-w-md h-px bg-slate-200/80" />

              {/* Follow Us Social Icons */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#264653]">
                  Follow Us:
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E76F51] hover:bg-[#D05A3C] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E76F51] hover:bg-[#D05A3C] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E76F51] hover:bg-[#D05A3C] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E76F51] hover:bg-[#D05A3C] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Send a Message Floating Card with Complete Previous Fields */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-12 shadow-xl shadow-[#264653]/10 border border-slate-100">
              <h3 className="text-3xl font-black text-[#264653] mb-8 tracking-tight">
                Send a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-teal-50 border border-teal-200 text-[#2A9D8F] text-xs font-semibold flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                  <div>
                    Thank you! Your consultation request has been submitted successfully. Our engineering team will contact you shortly.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    An error occurred while sending your message. Please call us directly at +91 98765 43210.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* Grid 1: Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`w-full py-3.5 px-1 border-b text-sm focus:outline-hidden transition-colors font-medium placeholder:text-slate-400 ${
                        formErrors.name
                          ? 'border-rose-400 text-rose-600'
                          : 'border-slate-200 focus:border-[#E76F51] text-[#264653]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full py-3.5 px-1 border-b border-slate-200 focus:border-[#E76F51] text-[#264653] text-sm focus:outline-hidden transition-colors font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Grid 2: Phone Number & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className={`w-full py-3.5 px-1 border-b text-sm focus:outline-hidden transition-colors font-medium placeholder:text-slate-400 ${
                        formErrors.phone
                          ? 'border-rose-400 text-rose-600'
                          : 'border-slate-200 focus:border-[#E76F51] text-[#264653]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail address *"
                      className={`w-full py-3.5 px-1 border-b text-sm focus:outline-hidden transition-colors font-medium placeholder:text-slate-400 ${
                        formErrors.email
                          ? 'border-rose-400 text-rose-600'
                          : 'border-slate-200 focus:border-[#E76F51] text-[#264653]'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-bold text-[#2A9D8F] uppercase tracking-wider mb-1">
                    Service Required *
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full py-3 px-1 border-b border-slate-200 focus:border-[#E76F51] text-[#264653] text-sm focus:outline-hidden font-semibold bg-transparent cursor-pointer"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Project Details */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your site location, camera count, network requirements or project timeline..."
                    className={`w-full py-3.5 px-1 border-b text-sm focus:outline-hidden transition-colors font-medium resize-none placeholder:text-slate-400 ${
                      formErrors.message
                        ? 'border-rose-400 text-rose-600'
                        : 'border-slate-200 focus:border-[#E76F51] text-[#264653]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-500 mt-1 font-medium">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Privacy disclaimer */}
                <p className="text-xs text-slate-400 leading-relaxed font-medium pt-2">
                  By Submitting, you agree to the processing of your personal data by SubX & C&G Infotech as described in the Privacy Statement.
                </p>

                {/* Submit Pill Button */}
                <div className="pt-2 flex justify-start sm:justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#E76F51] hover:bg-[#D05A3C] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Styled Greyscale Map Card Matching Reference Image */}
          <div className="mt-16 rounded-[28px] overflow-hidden border border-slate-200/70 shadow-xs bg-[#E5E7EB] relative h-[320px] sm:h-[380px]">
            {/* Embedded Interactive Greyscale Map */}
            <iframe
              title="London Eye & C&G Infotech Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540424594248!2d-0.12208942337774189!3d51.50332407181467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Custom Google Map Info Card Overlay */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-200 max-w-[280px] sm:max-w-[320px] z-10 font-sans">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#264653] leading-tight">
                    C&G Infotech / London Eye HQ
                  </h4>
                  <p className="text-[11px] text-[#527982] mt-0.5 leading-snug">
                    Picket, Opp. Jubilee Bus Station, Secunderabad, Telangana – 500003
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0 text-slate-600">
                  <Navigation className="w-4 h-4 text-[#E76F51]" />
                  <span className="text-[9px] font-bold mt-0.5 text-[#2A9D8F]">Directions</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-2 text-[11px] font-medium text-slate-600">
                <span className="font-bold text-[#264653]">4.9</span>
                <div className="flex text-[#E9C46A]">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="text-slate-400 text-[10px]">(240+ reviews)</span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-[#2A9D8F] hover:underline mt-1.5 inline-block font-semibold"
              >
                View larger map
              </a>
            </div>

            {/* Custom Map Zoom Controls */}
            <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden flex flex-col z-10">
              <button
                type="button"
                className="p-2 hover:bg-slate-50 text-slate-700 transition-colors border-b border-slate-100"
                aria-label="Zoom in"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-2 hover:bg-slate-50 text-slate-700 transition-colors"
                aria-label="Zoom out"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
