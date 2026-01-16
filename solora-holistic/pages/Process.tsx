import React from 'react';
import { Link } from 'react-router-dom';

const Process: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-light/80 via-background-light/95 to-background-light dark:from-background-dark/80 dark:via-background-dark/95 dark:to-background-dark z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-60 dark:opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv0gL5reJ3ZDlkeu6gJmRhGROt3nmvm-blaDudQvEDxBTEGWx60s9yPmIWph6Y6gGkDZt1odX7Efb1oB8X2ckAULXlm1wznHGaCDm4aw30pqJfXmn3n2Mb8veXZGnJqubN_IKRl83sm1ekfX7mOgkoluxB5McC4lFRLZYiSfB78cpEUgnc_ZWuhVBkKNcaRt-SUWRMMm6jtyxXc013j04dKlk3NF_SxwihwCg2hjYdq-kOrobd8S8r4BiAt7SBqC5lQQn4a0GdWGrg')" }}>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-text-main dark:text-white">
            Your Journey to <span className="text-primary">Holistic Health</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto leading-relaxed">
            A simple, transparent path to understanding your body and restoring balance through our unique 3-step process.
          </p>
          <div className="pt-4">
            <button onClick={() => document.getElementById('steps')?.scrollIntoView({behavior: 'smooth'})} className="inline-flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-background-dark text-base font-bold shadow-xl hover:bg-primary/90 transition-all transform hover:-translate-y-1">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section id="steps" className="relative py-16 px-4 md:px-10 max-w-5xl mx-auto">
        <div className="grid gap-12 relative">
          {/* Vertical Connector Line (Absolute) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Step 1 Image (Left on Desktop) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 order-2 md:order-1">
              <div className="w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu472Bdm3F6PHvqjCLHcvAJmlaeiCzquSjbtmamLtze4lGTSpzuGCfv4XgVXnQ1sBfDRdR7i5o4evas9skLzA56pmo9MWJb78-gjaRk0Pnjewl7L-z8ZrrHjFdPTUmqPrO0LvBwPDUOkIVB2XU-PK7zlzdQBByylQgAIsRg2Hr9yeHzAdiRmTBWQ3x_ebYRIpzcXOwB8qqIxXG3uyCN7dk9IKOlMtVpPD-yoQij96CYIAIfOgkd0e74xLLHqJbrPzVfX5sr-Z9HFbz')" }}>
                </div>
              </div>
            </div>
            {/* Step 1 Center Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-8 z-10 hidden md:flex flex-col items-center">
              <div className="size-12 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg ring-8 ring-background-light dark:ring-background-dark">
                <span className="material-symbols-outlined text-2xl font-bold">history_edu</span>
              </div>
            </div>
            {/* Step 1 Content (Right on Desktop) */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:pl-12 pt-0 md:pt-4 order-1 md:order-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="md:hidden size-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold shadow-md">
                  <span className="material-symbols-outlined text-xl">history_edu</span>
                </span>
                <h3 className="text-primary font-bold tracking-wider uppercase text-sm">Step 01</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">Discovery & History</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We begin with a deep dive into your health history. We listen to your story to understand the root causes, not just symptoms. This comprehensive consultation sets the foundation for a truly personalized approach.
              </p>
              <ul className="flex flex-col gap-2 mt-2 text-sm text-text-main dark:text-text-main-dark opacity-90">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Detailed symptom review</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Lifestyle assessment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Step 2 Content (Left on Desktop) */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-12 pt-0 md:pt-4 order-1 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-3">
                <h3 className="text-primary font-bold tracking-wider uppercase text-sm">Step 02</h3>
                <span className="md:hidden size-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold shadow-md">
                  <span className="material-symbols-outlined text-xl">monitor_heart</span>
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">Bioresonance Analysis</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Using advanced non-invasive scanning technology, we map your body's energetic state. This helps identify functional imbalances, food sensitivities, and environmental stressors that standard tests might miss.
              </p>
              <ul className="flex flex-col gap-2 mt-2 text-sm text-text-main dark:text-text-main-dark opacity-90">
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <span>Non-invasive technology</span>
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <span>Instant functional insights</span>
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                </li>
              </ul>
            </div>
            {/* Step 2 Center Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-8 z-10 hidden md:flex flex-col items-center">
              <div className="size-12 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg ring-8 ring-background-light dark:ring-background-dark">
                <span className="material-symbols-outlined text-2xl font-bold">monitor_heart</span>
              </div>
            </div>
            {/* Step 2 Image (Right on Desktop) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-12 order-2">
              <div className="w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXubRejLqVaMgis3hekd2XuNiJgEOC6lYGEE-mXQMiXm-E_hF0NwSf7nftWSgZInImQi7fJdBL4vGGoN6Ou52S4Cp1cm6Zdj6dbyafgpYyDcVog0784eV8JMs7k6xZ3zKAxrwMJqRItIsoeM5VNySgJDLDTC27apjc3dxnJ1CCcyEnlMquzsVY4vg4cZCOwm5DC_LgDs_aaWsc-9UxZoXk_ztn--YB16DmdaSWEGil274CpzvgrTiLr9renUDAK6BE8Wt-3bTmS_6h')" }}>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Step 3 Image (Left on Desktop) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 order-2 md:order-1">
              <div className="w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnamd232O0GXI_zOmldt0y_soU7kh_1m-djDrQwIWLjqyIBU0AkTxdZsK_spDr0yBwx-cu5W2sRxEAfrmq0-HnfyvEpH-mMQvgXiRuGqEyAOeI7yflBxERYK8BFKtWRiDI8pnAd6Ltkd8_IP5W8avKwKWWggxYWCe36wZLd-eogdB5ORQPBQcJHfqxMngRKcq1-6McSKO-SyQ77pHOcCmYOYznKBOG3lW5oyapg5lrus-6pFaBgnKsPxnm665Am5gutKLFMFfUr2z7')" }}>
                </div>
              </div>
            </div>
            {/* Step 3 Center Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-8 z-10 hidden md:flex flex-col items-center">
              <div className="size-12 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg ring-8 ring-background-light dark:ring-background-dark">
                <span className="material-symbols-outlined text-2xl font-bold">spa</span>
              </div>
            </div>
            {/* Step 3 Content (Right on Desktop) */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:pl-12 pt-0 md:pt-4 order-1 md:order-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="md:hidden size-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold shadow-md">
                  <span className="material-symbols-outlined text-xl">spa</span>
                </span>
                <h3 className="text-primary font-bold tracking-wider uppercase text-sm">Step 03</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">Your Wellness Springboard</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We create a personalized roadmap including nutritional therapy, lifestyle shifts, and targeted support to restore balance. This isn't a temporary fix; it's a sustainable plan for long-term vitality.
              </p>
              <ul className="flex flex-col gap-2 mt-2 text-sm text-text-main dark:text-text-main-dark opacity-90">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Tailored nutrition plans</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Targeted supplementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-primary/10 dark:bg-primary/5 p-8 md:p-16 text-center border border-primary/20">
          <div className="flex flex-col items-center gap-6">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-4xl">calendar_month</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-main dark:text-white">
              Ready to restore balance?
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-xl text-lg">
              Book your detailed consultation today and take the first step towards holistic wellness with Solora.
            </p>
            <div className="mt-4 w-full flex justify-center">
              <Link to="/contact" className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-background-dark text-base font-bold shadow-lg hover:bg-primary/90 transition-all hover:scale-105">
                <span className="truncate">Schedule Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;