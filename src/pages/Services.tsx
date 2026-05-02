import { Link } from 'react-router-dom';
import BlurText from '../components/animations/BlurText';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="px-6 md:px-16 pt-32 pb-20 lg:pb-40 bg-white overflow-hidden">
        <div className="grid grid-cols-12 gap-12 max-w-[1440px] mx-auto items-center">
          <div className="col-span-12 lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <p className="font-inter text-xs font-bold tracking-[0.2em] text-primary mb-6 uppercase animate-fade-in-up opacity-0 [animation-delay:200ms]">EXCEPTIONAL CARE</p>
            <BlurText
              text="Precision Dentistry. Clinical Excellence."
              delay={100}
              animateBy="words"
              direction="top"
              className="font-manrope text-[40px] md:text-[64px] lg:text-[80px] font-semibold text-navy-slate leading-[1.1] tracking-[-0.04em] mb-8"
            />
            <p className="font-inter text-base md:text-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:600ms]">
              Experience a higher standard of dental services in a serene, modern environment. We blend surgical precision with a compassionate approach to oral health.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 relative h-[300px] md:h-[400px] lg:h-full order-1 lg:order-2" data-aos="fade-left">
            <div className="absolute inset-0 bg-slate-50 rounded-2xl rotate-3 scale-105 z-0"></div>
            <img 
              alt="Advanced Dental Technology" 
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl grayscale-[15%] brightness-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVBsGNDpCHxbK5s2zMQNkpAxa0DYECr252Op-ZEgKseUQ1gA7ksOqQGrASH2BJmL1XTUBvrpCIE2TURaV91Hqt4Yjwv3SXcAo_raV-KxEwgO9X0c3e2oH35aNDtSfm6cOBm5PGTIRiJ1sWN7l0SqdDa663c3xLmIpywI-h6vnn3_OWwJjKVvocyMBLap04E_a649D8GBDmlQnWYw60rhHb4nz-1KS0SZJVWEaYpvo5Cgjig0h7CPLWezMPODUWaP7tFSkKHBHoZRk" 
            />
          </div>
        </div>
      </header>

      {/* Service Categories */}
      <section className="px-6 md:px-16 pb-20 lg:pb-40 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-y-20 lg:gap-y-32 gap-x-0 lg:gap-x-12">
          
          {/* Preventative */}
          <div className="col-span-12 lg:col-span-4 space-y-6 lg:space-y-8" data-aos="fade-up">
            <div className="aspect-square bg-slate-100 overflow-hidden rounded-lg border border-slate-200">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYhsQcRyWZA-WpyFmi-Q8sK4dtM1Sc1O-hthdmnFUXUcKGmtC4MdWf8f3wZGA-o9L6oQlEJ6vh6aEYuCp4y424jiLomzJhf8uXY9kRvsvl8sEh3X_SkwrNSO-MHJaNTuNgpVHNN2vF7tALArirU4tbcyiAnk07pxPuEic6_5j0XNUv2jdEE3fQVJA5rMPVHX3Bc2bzq_WYsX65nrHvklYR5vIvt5Ej3c8vnbWBmh8s9ZZaNhV4HJCmzzomq0-wAsP67uw2_hdoZzA" 
                alt="Preventative" 
              />
            </div>
            <div className="text-center lg:text-left">
              <span className="text-slate-400 font-inter text-xs font-bold tracking-widest uppercase">01</span>
              <h2 className="font-manrope text-3xl lg:text-[48px] font-medium text-navy-slate mt-2 mb-4">Preventative</h2>
              <p className="font-inter text-sm lg:text-base text-on-surface-variant leading-relaxed">The foundation of long-term health through rigorous diagnostic and maintenance protocols.</p>
            </div>
          </div>

          <div className="col-span-12 lg:col-start-6 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 lg:p-10 border border-slate-200 bg-white transition-all duration-500 hover:border-slate-400 group rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <span className="material-symbols-outlined text-navy-slate mb-6 text-3xl">clinical_notes</span>
              <h3 className="font-manrope text-2xl lg:text-[32px] font-medium mb-3">Comprehensive Exams</h3>
              <p className="font-inter text-sm lg:text-base text-on-surface-variant leading-relaxed">Detailed digital diagnostics including 3D imaging and periodontal screening to identify underlying issues before they arise.</p>
            </div>
            <div className="p-8 lg:p-10 border border-slate-200 bg-white transition-all duration-500 hover:border-slate-400 group rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <span className="material-symbols-outlined text-navy-slate mb-6 text-3xl">dentistry</span>
              <h3 className="font-manrope text-2xl lg:text-[32px] font-medium mb-3">Professional Hygiene</h3>
              <p className="font-inter text-sm lg:text-base text-on-surface-variant leading-relaxed">Advanced ultrasonic scaling and precision airflow therapy for a thorough, non-invasive deep cleaning process.</p>
            </div>
          </div>

          {/* Cosmetic */}
          <div className="col-span-12 grid grid-cols-12 gap-8 lg:gap-12 pt-10 lg:pt-32 items-center" data-aos="fade-up">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
              <span className="text-slate-400 font-inter text-xs font-bold tracking-widest uppercase">02</span>
              <h2 className="font-manrope text-3xl lg:text-[48px] font-medium text-navy-slate mt-2 mb-6">Cosmetic Artistry</h2>
              <div className="space-y-6 lg:space-y-12">
                <div className="p-6 lg:p-8 border border-slate-200 bg-white transition-all hover:border-slate-400 rounded-lg text-left">
                  <h3 className="font-manrope text-2xl lg:text-[32px] font-medium mb-2">Porcelain Veneers</h3>
                  <p className="font-inter text-sm lg:text-base text-on-surface-variant leading-relaxed">Hand-crafted ceramic shells designed to match your natural tooth structure with absolute optical fidelity.</p>
                </div>
                <div className="p-6 lg:p-8 border border-slate-200 bg-white transition-all hover:border-slate-400 rounded-lg text-left">
                  <h3 className="font-manrope text-2xl lg:text-[32px] font-medium mb-2">Laser Whitening</h3>
                  <p className="font-inter text-sm lg:text-base text-on-surface-variant leading-relaxed">Medical-grade thermal activation for immediate, sensitivity-conscious aesthetic enhancement.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-start-7 lg:col-span-6 order-1 lg:order-2" data-aos="fade-left">
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-lg border border-slate-200">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYy5aV6Yns6EaNTxiMaA20rnBRfXanw4hgP0ZkGBPx6CxHvvcYskbPXKv-vFS5FX6H_SHEc3yFYYCCkqEeTwFWemBLGaAP8xcz38yvdKm3XO34qZhMti0oI9m4-_ymftNNpdnEsqDH0z_DS_zcT8fSoIfi7rKAq5LNhuLLr2S-FyHMnNIOBe70_oX2gXNFEWO9qvpOeHhRal_1iwUQFz0TbPKva9VXJfQ_LLXqJdP4ZP_PuVDdcgPmCCJeKfMnZVhNrIllgFYZUIs" 
                  alt="Cosmetic Artistry" 
                />
              </div>
            </div>
          </div>

          {/* Orthodontics */}
          <div className="col-span-12 pt-10 lg:pt-32" data-aos="fade-up">
            <div className="grid grid-cols-12 gap-8 lg:gap-12">
              <div className="col-span-12 lg:col-span-4 text-center lg:text-left">
                <span className="text-slate-400 font-inter text-xs font-bold tracking-widest uppercase">03</span>
                <h2 className="font-manrope text-3xl lg:text-[48px] font-medium text-navy-slate mt-2 mb-4">Orthodontics</h2>
                <p className="font-inter text-base lg:text-lg text-on-surface-variant leading-relaxed">Modern alignment solutions that prioritize both function and facial harmony.</p>
              </div>
              <div className="col-span-12 lg:col-start-5 lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 lg:p-10 bg-navy-slate text-white rounded-lg" data-aos="fade-up" data-aos-delay="100">
                    <span className="material-symbols-outlined text-white mb-6 text-3xl">visibility_off</span>
                    <h3 className="font-manrope text-2xl lg:text-[32px] font-medium mb-4">Invisalign® Clear Aligners</h3>
                    <p className="font-inter text-sm lg:text-base text-slate-300 leading-relaxed">Removable, transparent corrective trays engineered using proprietary SmartTrack technology for predictable tooth movement.</p>
                  </div>
                  <div className="p-8 lg:p-10 border border-slate-200 bg-white transition-all hover:border-slate-400 rounded-lg group" data-aos="fade-up" data-aos-delay="200">
                    <span className="material-symbols-outlined text-navy-slate mb-6 text-3xl">architecture</span>
                    <h3 className="font-manrope text-2xl lg:text-[32px] font-medium mb-4">Precision Brackets</h3>
                    <p className="font-inter text-sm lg:text-base text-on-surface-variant leading-relaxed">High-grade medical steel or ceramic options for complex structural alignment with minimal visibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 lg:py-32 border-t border-slate-200 text-center overflow-hidden">
        <div className="px-6 md:px-16 max-w-[1440px] mx-auto">
          <h2 className="font-manrope text-3xl md:text-4xl lg:text-[48px] font-medium text-navy-slate mb-8 leading-tight">Begin Your Consultation.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-navy-slate text-white px-10 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all">Schedule Appointment</button>
            </Link>
            <Link to="/pricing">
              <button className="w-full sm:w-auto border border-slate-300 px-10 py-4 rounded-lg font-semibold hover:bg-white transition-all text-navy-slate">View Pricing</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
