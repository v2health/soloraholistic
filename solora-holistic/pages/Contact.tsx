import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden bg-cover bg-center py-16 text-center lg:min-h-[400px]" style={{ backgroundImage: 'linear-gradient(rgba(17, 33, 22, 0.6) 0%, rgba(17, 33, 22, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQJZQIVMje93gluYdLjWs6RkRMhhhWMRsmUmTZjTtq8xsaAS_sD8gmtdTWWE-dtxkiUXTKDDN_j6tgE-JM7URUwAZeWIMG_GoyHxSFUSueLzS8lW43v30HlHu0vDauTSY2xygYZv24fM2bfIV818nYjiB_dZV1NdFrZMpHZDZbe-hN3g70i4KQK5-3vI0xJ1y_O25ZwtYSsOB8dzUWS8N2nDtvRIs-XsTw8gimd_V5vbmpzBxeTZu_9KdZr6qN77tWAIfbJh8o1BAs")' }}>
        <div className="container px-4">
          <h1 className="mb-4 text-4xl font-black text-white lg:text-5xl tracking-tight">
            Contact Solora
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Whether you have questions about Bioresonance Scanning or are ready to book your Nutritional Therapy session, we are here to support your journey.
          </p>
        </div>
      </section>

      {/* Main Content Container - Form Removed */}
      <div className="container mx-auto px-4 py-12 lg:px-20 lg:py-20">
        <div className="flex justify-center">
          
          {/* Centered Info & Location */}
          <div className="w-full max-w-2xl flex flex-col gap-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-2">Get In Touch</h2>
              <p className="text-text-secondary dark:text-gray-400">We look forward to hearing from you.</p>
            </div>

            {/* Contact Info Card */}
            <div className="overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-xl border border-border-light dark:border-border-dark">
              <div className="bg-primary/10 p-6 dark:bg-primary/5">
                <h3 className="text-xl font-bold text-text-main dark:text-white text-center">Contact Information</h3>
              </div>
              <div className="flex flex-col gap-8 p-8">
                {/* Location */}
                <div className="flex gap-6 items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-main dark:text-white">Visit Us</h4>
                    <p className="text-base text-text-secondary dark:text-gray-400 mt-1">298 Cregagh Rd, Castlereagh,<br />Belfast BT6 9EW</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex gap-6 items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-main dark:text-white">Call Us</h4>
                    <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Mon-Fri from 9am to 6pm</p>
                    <a href="tel:07861219371" className="text-primary hover:underline font-bold text-lg mt-1 block">07861219371</a>
                  </div>
                </div>
                {/* Email */}
                <div className="flex gap-6 items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-main dark:text-white">Email Us</h4>
                    <a href="mailto:info.soloranutrition@gmail.com" className="text-primary hover:underline font-bold text-lg mt-1 block">info.soloranutrition@gmail.com</a>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="h-64 w-full bg-slate-200 dark:bg-slate-700 relative group overflow-hidden border-t border-border-light dark:border-border-dark">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPFxlNGjeZG9WtS2JJuOkzzXLJoOm15-Zaqu_DVx5EptBwZEv-mlhPwyjTPkO7OkM3er7CgEq1MrqMYxTWRweV-uJ2fB-IaUrhkwRdqDzYvR_MQCPb3rB1ShzmQTlKIkma1Ou6vH-_xKQRoaz8n3Cn5y2YEO9Eii5mEjC6v-l1ovSuEuZyhgokbukUcBjO7TB0YPNlbCG7Cs1Z6NHrr5qOahtql2q0uqkfgNE83llEBYEm4--mdT4YNLu9rGuLNAz3W3vo2m6FXapZ")' }}>
                </div>
                <a href="https://maps.google.com/?q=298+Cregagh+Rd,+Castlereagh,+Belfast+BT6+9EW" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">map</span>
                    View on Google Maps
                  </span>
                </a>
              </div>
            </div>
            
            {/* FAQ Mini-accordion */}
            <div className="rounded-2xl border border-border-light dark:border-border-dark p-6 bg-surface-light dark:bg-surface-dark">
              <h4 className="font-bold text-text-main dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">help</span>
                Quick Question?
              </h4>
              <p className="text-sm text-text-secondary dark:text-gray-400 mb-4">
                Many clients ask about preparation for Bioresonance.
              </p>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between font-medium text-text-main dark:text-white hover:text-primary transition-colors">
                  <span>What should I bring?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <p className="mt-2 text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  Just bring yourself and a list of current medications. We recommend drinking plenty of water before your appointment.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;