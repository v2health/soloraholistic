import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-10 lg:px-40 py-12 md:py-20 flex justify-center bg-white dark:bg-[#1a2e22]">
        <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] w-full max-w-[450px] mx-auto rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqFCauiTFAPOKv2vud7StwsBl0KzURC7Dt2FxXggUyd-gYHY8z68WK__ckkIYanQ_RzRcVjGBJ4W73clyVA8lUTJ4XPC3svEW_3dXazo13dmYKCOkY4mqwyjiw34KuFuXLYToJ2TJOaaBkiNvrOnnJMxdmcI0tGobX03jnaOamwR_WUpzgsQyEk0I5CJbyYrqB0vohO6DgWz8ZNfUjDtyd9VD7vRla1ueTU3TI_MktjnKqukasGCBt3bukOQ47FBIMs0wCCp4laDv9")' }}>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl hidden md:block"></div>
          </div>
          {/* Text Side */}
          <div className="flex flex-col gap-6 order-2 md:order-1 text-center md:text-left">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-4">
                MEET YOUR PRACTITIONER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0e1b12] dark:text-white tracking-tight leading-[1.1]">
                Joanne Papenfus
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
                Naturopathic Nutritional Therapist
              </p>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              Dedicated to uncovering the root causes of health issues through holistic analysis and bioresonance. I bridge the gap between traditional wisdom and modern nutritional science to help you thrive.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link to="/contact" className="bg-primary hover:bg-green-600 text-white dark:text-[#0e1b12] font-bold h-12 px-6 rounded-lg shadow-md transition-all flex items-center gap-2">
                <span>Start Your Health Journey</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link to="/services" className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-600 text-[#0e1b12] dark:text-white font-medium h-12 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials / Trust Section */}
      <section className="w-full bg-[#f0fdf4] dark:bg-[#14261b] border-y border-primary/10 py-10">
        <div className="px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto text-center">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">Accredited & Certified By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
            {/* Credential 1 */}
            <div className="flex items-center gap-3 group">
              <div className="bg-white dark:bg-[#1a2e22] p-2 rounded-full shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]">school</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#0e1b12] dark:text-white leading-tight">CNM Graduate</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">College of Naturopathic Medicine</p>
              </div>
            </div>
            {/* Credential 2 */}
            <div className="flex items-center gap-3 group">
              <div className="bg-white dark:bg-[#1a2e22] p-2 rounded-full shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]">verified_user</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#0e1b12] dark:text-white leading-tight">Registered CNHC</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Natural Healthcare Council</p>
              </div>
            </div>
            {/* Credential 3 */}
            <div className="flex items-center gap-3 group">
              <div className="bg-white dark:bg-[#1a2e22] p-2 rounded-full shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]">diversity_3</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#0e1b12] dark:text-white leading-tight">Member NNA</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Naturopathic Nutrition Assoc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Background Section */}
      <section className="w-full px-4 md:px-10 lg:px-40 py-16 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column: Header */}
            <div className="md:w-1/3 flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1b12] dark:text-white tracking-tight">My Journey</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                From physical fitness to cellular health, my path has always been about empowering others.
              </p>
            </div>
            {/* Right Column: Story Content */}
            <div className="md:w-2/3 flex flex-col gap-8">
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  My passion for health didn't start in a clinic; it started on the gym floor. With a strong background in <strong className="text-[#0e1b12] dark:text-white font-semibold">Personal Training and Aromatherapy</strong>, I spent years helping clients improve their physical fitness and manage stress. However, I often felt there was a missing piece to the puzzle of true vitality.
                </p>
                <p className="mb-4">
                  I realized that exercise and relaxation were only part of the equation. To truly heal and thrive, the body needs the right fuel at a cellular level. This realization led me to pursue a rigorous <strong className="text-[#0e1b12] dark:text-white font-semibold">Diploma in Naturopathic Nutritional Therapy</strong> from the prestigious College of Naturopathic Medicine (CNM).
                </p>
                <p>
                  Today, I combine my understanding of physical physiology with deep nutritional science. As a registered member of the <strong className="text-[#0e1b12] dark:text-white font-semibold">CNHC</strong> and the <strong className="text-[#0e1b12] dark:text-white font-semibold">NNA</strong>, I am committed to the highest standards of practice, constantly updating my knowledge to bring you the most effective, evidence-based care.
                </p>
              </div>
              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white dark:bg-[#1a2e22] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">fitness_center</span>
                  <div>
                    <h4 className="font-bold text-[#0e1b12] dark:text-white text-sm mb-1">Holistic Background</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Experience in Personal Training & Aromatherapy ensures I understand the whole body.</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1a2e22] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">science</span>
                  <div>
                    <h4 className="font-bold text-[#0e1b12] dark:text-white text-sm mb-1">Evidence-Based</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">My protocols are grounded in the latest nutritional science and research.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Block */}
      <section className="w-full py-20 bg-white dark:bg-[#1a2e22] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#17cf54 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
        <div className="px-4 md:px-10 lg:px-40 max-w-[960px] mx-auto relative z-10 text-center flex flex-col items-center gap-8">
          <span className="material-symbols-outlined text-5xl text-primary/30">format_quote</span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight md:leading-snug text-[#0e1b12] dark:text-white max-w-3xl">
            "My mission is to use the <span className="text-primary">latest nutritional science</span> to educate and support you, creating a personalized roadmap that empowers your body's natural ability to heal."
          </h2>
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mb-2">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUC0ycc0yhtwnFumOEp3VdtRKqMeYHxPtG1x3loWETY72kDzsl4OiStdBmwCcbWyQayA20GfpJuq4dzb682CF-64EDWAdZH6ObpCrd7QxLzQricSoE_c4ItUssbUY5qFgNSnKpdOBVGfwnqvwZ4OzC2dGYWoKi8WNpRBn8VI1PQV2aW_hDt6JcXOxEJ6foCl69hNfoZbB0jAaNBbL_Mr7meVewqgvWbNZZ6ac4LDeWVHX0AwAoJ62TwVTJr1VpM0YSdeb1AAsWws0V")' }}>
              </div>
            </div>
            <p className="font-bold text-lg text-[#0e1b12] dark:text-white">Joanne Papenfus</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Founder of Solora</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20 bg-[#f8fcf9] dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto bg-primary rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Abstract decorative background within card */}
          <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(135deg, #0e1b12 0%, transparent 100%)' }}>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0e1b12] mb-4">
                Ready to prioritize your health?
              </h2>
              <p className="text-[#0e1b12]/80 text-lg font-medium mb-0">
                Book a consultation today to discover how Bioresonance and Nutritional Therapy can transform your wellbeing.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact" className="inline-block bg-[#0e1b12] hover:bg-[#0e1b12]/80 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;