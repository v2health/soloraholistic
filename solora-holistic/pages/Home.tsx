import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-10 pb-16 md:py-24 px-4 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-dark dark:text-primary w-fit">
              <span className="material-symbols-outlined text-sm">science</span>
              <span className="text-xs font-bold uppercase tracking-wide">Evidence-Based Holistic Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-text-main dark:text-white">
              Empowering Your Journey to <span className="text-primary relative inline-block">
                Lasting Wellness
                <svg className="absolute -bottom-2 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-xl">
              Personalized Naturopathic Nutrition and Bioresonance Scanning to uncover the root cause of your health concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link to="/contact" className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/25">
                Book a Consultation
              </Link>
              <Link to="/about" className="flex items-center justify-center rounded-xl h-12 px-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Learn More
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-background-dark overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCHRZSk0eV6WXwV-llfxwtr_9Yu6dtpLU3jvO_WE_kfrBozB6C2wSk4UVAK_wsjVVrWEi_ApI5FIh_BVi7GXfHY2_WqJkJiCOeQMkLDliHk2-DkOjg6niLhpE9UzmB8sKBXkojqYqb3NySHUZ5mKZc8xs6neFtKkUnYvkDxiGgZutmvgUuQil1zuNW0yuT77N4W7GbUUZekbqwnxZcA1yfXFc2IIdH2GCqFSPzWjtQ5ShPD9texrG11YfgZraSo5PwV4TSvQxvJiro")' }}></div>
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-background-dark overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjoaC1UeI-zL51QpFfZ3D9alEno4GBBSY6ePOQ2Kz0J6aueKycLGajMvoW53xm88RmBWDlVPS5W1DiKvNTAMoqC3iFTDigESuxkYrqSoloG49lnzcvtT6Dzi7kOXPgeKBkCxbIXpInGzlyZrLqmSH3yvocpN0GKyWJ5xcc3Cy2QXpEBp2fMDo7zeoqreHUvsKwoyI0-DB6ztuF5iGHyDbbcaC_yRXsMnsMQIyCtdygxjEFv4NH2Il3rnFLis9doub0vHSYQ2ItPwPh")' }}></div>
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-background-dark overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQfgB4hELNxyzD-UvoocqCJw2FhGDGS8ozwqN9SaeedDhEjcjpZNyKTOwSbHC_HkA11wcj0f_EB0LE_OJRCuuvU42hswUGLiH00FugfHakDnfHP5CsqgVmoyXTjpHU9jAMVv7GzZNQPGfIX1RrJugs-GlG49IeJQ-NSvzczbDjsMhgKl3dvnKaIuk83ZtJRF4EDuQ7NoOOlDJQY7NyzddYx5vdPBWnpu1KD_b8NP2Wv-yFNxiw5HBpN0evjVgfrqneZFG0jFooG7zF")' }}></div>
              </div>
              <p>Trusted by 500+ patients</p>
            </div>
          </div>
          {/* Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4SzRl4FdB8pCa9lLP40RQbDad-DuVzM48qG0FpKk6OFcr-0j2NWHXvW8KjG0QBYtenWZaVOk9z3pTNPLHdyCGoax1XCy8OghrSDZ4crhSvO-6ZdWarnpyz6Ewo0kEoKXePqtgICm-ZJ1usrpZzCfy1yWSTpTCbsq9PCSapX8-W0-jkCy3fU1RN81yjOuYS2Be1vLLc_2AopgvnfxsMatXo1pebdeVXMhwrFt50GS2wLi3qUz8C5iSssaiODEhb91jFdUCaak-vL82")' }}>
              </div>
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark dark:text-primary">
                  <span className="material-symbols-outlined">ecg_heart</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Health Metric</p>
                  <p className="text-sm font-bold text-text-main dark:text-white">Restoring Natural Balance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Statement Block */}
      <section className="py-16 bg-white dark:bg-background-dark border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">Bridging Nature & Science</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            We use functional medicine models to look upstream at the root causes of illness, treating the whole person, not just the symptoms. Join us in a collaboration towards better health, where clinical data meets holistic wisdom.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center gap-3">
              <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h3 className="font-bold text-text-main dark:text-white">Root Cause Analysis</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Going deeper than symptoms to find the source.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-2xl">fingerprint</span>
              </div>
              <h3 className="font-bold text-text-main dark:text-white">Personalized Plans</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tailored nutrition and lifestyle strategies for you.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-2xl">science</span>
              </div>
              <h3 className="font-bold text-text-main dark:text-white">Scientific Approach</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Evidence-based functional medicine models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Comprehensive care tailored to your unique biological needs.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
              View all services <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-primary">nutrition</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                  <div className="size-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">restaurant_menu</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">Naturopathic Nutritional Therapy</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Focusing on diet, lifestyle, and nutrient therapy to restore balance. We create sustainable plans that nourish your body and address deficiencies.
                  </p>
                </div>
                <Link to="/services" className="inline-flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
                  Learn more <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-teal-500">monitor_heart</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                  <div className="size-14 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6">
                    <span className="material-symbols-outlined text-3xl">query_stats</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">Bioresonance Scanning</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Advanced energetic analysis to identify stressors and imbalances. Non-invasive technology providing deep insights into your cellular health.
                  </p>
                </div>
                <Link to="/services" className="inline-flex items-center text-teal-600 dark:text-teal-400 font-bold group-hover:translate-x-1 transition-transform">
                  Learn more <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold">
              View all services <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 px-4 md:px-10 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-5xl text-primary/30 mb-6">format_quote</span>
          <blockquote className="text-2xl md:text-3xl font-medium text-text-main dark:text-white leading-relaxed mb-8">
            "After years of unexplained fatigue, the bioresonance scan finally pinpointed the issue. The nutritional plan wasn't just a diet, it was a lifestyle change that gave me my life back."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 rounded-full overflow-hidden bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXLvrtSCwTuig5qZ2uUDx7p3BOjFlxIyrrnN6r1x6O9EjnCuXAzIPor-lc6YmmCUOS0XOMFWRDBb7Ls7H3xCJFukNUU654QkwTCbYx7RSQDObt_5je0XjaAFfKTv2hmHL2l9Sbnfr4qkrqzhvPfmXCNdQyyQd1ySlMggEt2dqZENtugfohMLAOp1z9_7-MFIBNIw-pVBKLnyMNA81rbM2cfF4pRRLBUSopj_vJXRooTpj8UE78Pdo3k6JkS2o4b0R7ynEyR2vJH4pm")' }}></div>
            <div className="text-left">
              <div className="font-bold text-text-main dark:text-white">Sarah Jenkins</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Nutritional Therapy Patient</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center bg-white dark:bg-gray-900 p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Ready to reclaim your vitality?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Schedule your initial consultation today and take the first step towards understanding your body's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="flex items-center justify-center rounded-xl h-14 px-8 bg-primary hover:bg-primary-dark text-white text-lg font-bold shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5">
              Book Consultation
            </Link>
            <Link to="/contact" className="flex items-center justify-center rounded-xl h-14 px-8 bg-transparent border-2 border-gray-200 dark:border-gray-700 text-text-main dark:text-white text-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;