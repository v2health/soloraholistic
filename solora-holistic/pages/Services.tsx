import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background-light dark:bg-background-dark py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 text-primary"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark dark:text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Holistic Health Services
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Root Cause Resolution for <span className="text-primary">Chronic Wellness</span>
              </h1>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                Discover personalized pathways to health through Naturopathic Nutritional Therapy and Bioresonance Scanning. We specialize in digestive health and identifying the underlying triggers of chronic illness.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => document.getElementById('nutrition')?.scrollIntoView({behavior: 'smooth'})} className="h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white dark:text-[#0e1b12] font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                  View Services
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </button>
                <Link to="/about" className="flex items-center justify-center h-12 px-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main-light dark:text-text-main-dark font-medium transition-all">
                  Learn About Us
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9il-B-Dmsf9pbV85ImJn_CjHQjJ9on71aY8mhg_j8p5RUT8iw2Ppg6tHcSuMPScz6CrCFMJXslOIZnT4bBbLbrcGr-lfNb0wDSz3lb93UeQnPs3NqbIJ5-IMzekbRml8rUIfNkANhRR_z-K1tTyGjAboCmbHqr8k0gNun4KN0Kaw0qNmxhHwH9flG-Bkd9jK0Hu958-YOnSJ81OMFR7BSW266M4Gmx9FWFiVuvaMwp9USeqBvl00ZeoHncxbB0D2Y5QG5gUno77G1")' }}></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex gap-4">
                  <div className="bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur p-4 rounded-xl flex-1 border border-white/20">
                    <span className="block text-2xl font-bold text-primary mb-1">98%</span>
                    <span className="text-xs font-medium uppercase tracking-wide opacity-80">Client Satisfaction</span>
                  </div>
                  <div className="bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur p-4 rounded-xl flex-1 border border-white/20">
                    <span className="block text-2xl font-bold text-primary mb-1">15+</span>
                    <span className="text-xs font-medium uppercase tracking-wide opacity-80">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Naturopathic Nutritional Therapy */}
      <section id="nutrition" className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                  <div className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDu9yV7Xc0NIoYiEetaikEoXUHpxwl4QZWKPw_SbrYOcW0VhqP6iaG7ATgMYEI9nhk_aa5_fjyN6hmxfYgmc6vriiri6IkIFAvyr6b_azvpFi8PBYWVTEfQALyQw-ieSyNp4WCIvqbhEml-QfAht09lnz3BtE1mKIeuxROB7xnq4HpM31es8zHquVXPIl5vxspsIGMhMS5zC0h91HQK7jiYEgkZIm7y55zBA4kq7G3UGpjJDnpn6RDY8PvFKqTOybdBMQrSc0DL1sRu")' }}></div>
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-100 mt-12">
                  <div className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgLcJong8bFJmSato3oJfB6a79EiGKx8uAGr2Mw_JHHokG4pSP1Xnawk0lhoL8m5g48fCMXkq9bIHEokf24a2snobZmHEJysXpjPO5afco5aY_XBBCLnvuA8kdfVFg2KLa--WCaAG0ZnNhT0QHecZkAQhzi0uzsE1tEhhzXoeaK_FV4yvwu35QJD-bc7J_kkWMbPKEVZzE7xFRR0XPNuKAhdOtaOMlM07w17D7jwMdB6ia4i2eXR8T0Rcs3bGbd-xaXKbE3Tz1pgZH")' }}></div>
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Core Service</span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Naturopathic Nutritional Therapy</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
                  We investigate the root causes of your symptoms using personalized dietary advice, orthomolecular supplementation, and lifestyle adjustments. Our approach is not one-size-fits-all; it's tailored to your unique biochemistry.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">local_dining</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Personalized Diet</h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Tailored nutrition plans designed specifically for your metabolic needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">medication</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Orthomolecular Support</h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Targeted high-quality supplementation protocols to correct imbalances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">self_improvement</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Lifestyle Adjustments</h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Sustainable habit changes for long-term stress management and health.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">spa</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Gut Health Focus</h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Specialized protocols for IBS, SIBO, and other digestive disorders.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white dark:text-[#0e1b12] font-bold transition-all">
                  Start Your Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Bioresonance Scanning */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqFCauiTFAPOKv2vud7StwsBl0KzURC7Dt2FxXggUyd-gYHY8z68WK__ckkIYanQ_RzRcVjGBJ4W73clyVA8lUTJ4XPC3svEW_3dXazo13dmYKCOkY4mqwyjiw34KuFuXLYToJ2TJOaaBkiNvrOnnJMxdmcI0tGobX03jnaOamwR_WUpzgsQyEk0I5CJbyYrqB0vohO6DgWz8ZNfUjDtyd9VD7vRla1ueTU3TI_MktjnKqukasGCBt3bukOQ47FBIMs0wCCp4laDv9")' }}></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-6">
                  <p className="text-white font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    Non-invasive scanning technology
                  </p>
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Advanced Technology</span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Bioresonance Scanning</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
                  Experience state-of-the-art scanning technology combined with expert consultation. We analyze your body's energetic field to identify stressors, pathogens, and imbalances that traditional tests might miss.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {/* Feature Card 1 */}
                <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-[#e7f3eb] dark:border-[#2a4032] hover:border-primary/50 transition-colors group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-background-light dark:bg-background-dark rounded-lg group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">monitor_heart</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Energetic Analysis</h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">Detailed insights into organ function, food sensitivities, and environmental toxins.</p>
                    </div>
                  </div>
                </div>
                {/* Feature Card 2 */}
                <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-[#e7f3eb] dark:border-[#2a4032] hover:border-primary/50 transition-colors group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-background-light dark:bg-background-dark rounded-lg group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">child_care</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Safe for All Ages</h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">Completely non-invasive, painless, and comfortable for children and sensitive individuals.</p>
                    </div>
                  </div>
                </div>
                {/* Feature Card 3 */}
                <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-[#e7f3eb] dark:border-[#2a4032] hover:border-primary/50 transition-colors group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-background-light dark:bg-background-dark rounded-lg group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">handshake</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Integrated Consultation</h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">Results are immediately discussed and integrated with your nutritional therapy plan.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-[#0e1b12] font-bold transition-all">
                  Book a Scan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Functional Testing */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-rows-2 gap-4 h-full min-h-[400px]">
                <div className="rounded-2xl overflow-hidden bg-gray-100 h-64">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvws6NjZAS5LhTrFhiwKghtTb29qTfQYJhwHaIkinfuXnL5uxdfTTiDQrpIoooU0YIPGlLblx9ac-Ex8D6BCDnD7YE-wEvb3tEwxZTMABfc0fbM2YEGE05PUyGntfVZhhi7WQ-y1wfkLWsiDLS3rYu8kCnxOAUXja8JSXIJL3VZd_VQoZNtuxOhqJfkwyhaNMx74jpccDhoASUZS5e1gyMKAlKwR3gnLqYrr-Q5jPzsfEepOuMhbiYpyX5VzSQooH8n74kCPcVOhJT")' }}></div>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 flex flex-col justify-center items-start">
                  <h4 className="text-2xl font-bold text-primary mb-2">Data-Driven</h4>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">We don't guess, we test. Functional testing removes the guesswork from your health journey.</p>
                  <button className="text-sm font-bold underline decoration-2 decoration-primary underline-offset-4 hover:text-primary transition-colors">See Sample Reports</button>
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Specialized Analysis</span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Functional Testing</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
                  Go deeper with specialized testing for biochemical differences. We partner with leading laboratories to offer comprehensive stool, breath, and blood analysis to pinpoint the root of chronic issues.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                  <div className="mt-1 size-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white dark:text-[#0e1b12] text-sm">check</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Comprehensive Stool Analysis</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">Evaluate the microbiome, digestion, absorption, and inflammation markers to address IBS and IBD.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="mt-1 size-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white dark:text-[#0e1b12] text-sm">check</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">SIBO Breath Testing</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">Non-invasive testing to diagnose Small Intestinal Bacterial Overgrowth, a common cause of bloating.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="mt-1 size-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white dark:text-[#0e1b12] text-sm">check</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Hormone & Adrenal Profiles</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">Saliva and urine testing to understand stress response, fatigue, and hormonal imbalances.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-main-light dark:text-text-main-dark font-bold transition-all shadow-sm">
                  Explore Test Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Healing Journeys</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">See how our holistic approach has helped others find balance and vitality.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all text-left">
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-text-main-light dark:text-text-main-dark mb-6 italic">"After years of unexplained bloating, the SIBO testing and personalized plan finally gave me answers. I feel like myself again."</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlpJ3LRBSwe-EjqWi0Xw1aYui69ex6XYGd7qnqLJQYmUEv9CnJ2jZExPqftEJNKwWb7tEUedl4R612HtXwC_rToOXQuuC6S-RFGB4AboA4gVXtFssLri3ncn-PC8wTWFcS-_jdgychjSfDhYsYrkR7uo9xWvcVE8flXavThREIBSt1zhRrEZj1CKm0VHRRmaInNxuM8GFWN2IWpgDdpXqmS_TT-8LXS8NFTOiAzM56amJpyrBQy9DrEe7uWq8cI9SHVLVPbD6d9Yyj")' }}></div>
                </div>
                <div>
                  <p className="text-sm font-bold">Sarah J.</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Digestive Health Client</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all text-left">
              <div className="flex text-primary mb-4">
                 {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-text-main-light dark:text-text-main-dark mb-6 italic">"The bioresonance scan was incredibly detailed. It picked up on sensitivities I suspected but couldn't confirm. Highly recommended."</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAigCeTM1L9Gx9WD581u_y5MT7pbEDm6oIU80h1nGoB0vHxFwDGoQpmtnjtKYuM6Xa85JnqtBxXeP5Ed7H5trB1KadHTDD8Zm7_MuWk-6f1Cbk0Vque-ozyLP_tTxodttNRZX9JNck2Qx9IFNbouS_J0zGyHSHNjZUoiIFK0ved8CorJ7bGdenVyq7z2iorClcINMRx6WfBAfSJwYH382ntkS9cFhH4SJjWNjbpdNBeZuLnNoJCcIwTbW1zFrRNiflit5uz8G_e3mLS")' }}></div>
                </div>
                <div>
                  <p className="text-sm font-bold">Michael T.</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Bioresonance Client</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all text-left">
              <div className="flex text-primary mb-4">
                 {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-text-main-light dark:text-text-main-dark mb-6 italic">"Professional, knowledgeable, and caring. The combination of nutrition and testing is a game changer for chronic fatigue."</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWDsTZmIKYqZicSHJ5uR_PqSsmn0YoeboUHSYRMxHrrAy4xquvDL1AhNmalEcwEj-GvpOfRt0k-wNXOLNWeNn7ZQax3umkLemtoSqIxqkCnvCZjQ0xSlXu_cqw4mNdBOiiUjh9y1Gi-p4inTSfy2iMosZJgXStOlKoE6TD9BohqZrTMiDyV-pJGq5g7gdWswTJprbb6wb7xsii9E0-3LcY2Phx2aE34E6H1ufVvAVoITYDnBWmQkcC7-2NxR3BrRRC4rVKihLkttbH")' }}></div>
                </div>
                <div>
                  <p className="text-sm font-bold">Elena R.</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Chronic Wellness Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-main-light dark:text-text-main-dark">Common Questions</h2>
          <div className="space-y-4">
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Do I need a referral to book a consultation?
                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary-light dark:text-text-secondary-dark">
                No, you do not need a referral. You can book a consultation directly through our website. We are happy to work alongside your GP or specialist if you wish.
              </div>
            </details>
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Is Bioresonance scanning safe for children?
                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary-light dark:text-text-secondary-dark">
                Yes, Bioresonance is completely non-invasive, painless, and safe for children and babies. It does not use radiation or needles.
              </div>
            </details>
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Can I combine services?
                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary-light dark:text-text-secondary-dark">
                Absolutely. Many of our clients benefit from a "Gold Standard" package that combines Nutritional Therapy with a Bioresonance scan for the most comprehensive insight into their health.
              </div>
            </details>
            <details className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                How long does it take to see results?
                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary-light dark:text-text-secondary-dark">
                Results vary depending on the complexity of your condition and adherence to the plan. Some clients feel relief within weeks, while chronic conditions may require 3-6 months of dedicated support.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-background-dark text-white text-center px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="size-16 rounded-full bg-primary flex items-center justify-center text-[#0e1b12] mb-2">
            <span className="material-symbols-outlined text-3xl">calendar_month</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to reclaim your health?</h2>
          <p className="text-gray-300 text-lg">Schedule your initial consultation today and take the first step towards a balanced, vibrant life.</p>
          <Link to="/contact" className="mt-4 inline-flex items-center justify-center h-14 px-10 rounded-lg bg-primary hover:bg-primary-dark text-[#0e1b12] font-bold text-lg transition-all shadow-lg hover:shadow-primary/30">
            Book Consultation Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;