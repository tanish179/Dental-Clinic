import { Link } from 'react-router-dom';
import BlurText from '../components/animations/BlurText';
import ShinyText from '../components/animations/ShinyText';
import DecryptedText from '../components/animations/DecryptedText';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-16 w-full grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 z-10 py-20">
            <div className="mb-6 animate-fade-in-up opacity-0 [animation-delay:200ms]">
              <ShinyText 
                text="ESTABLISHED 2024" 
                disabled={false} 
                speed={3} 
                className="font-inter text-xs font-bold tracking-widest uppercase"
                color="#94a3b8"
                shineColor="#0F172A"
              />
            </div>
            
            <BlurText
              text="Precision Dentistry, Personal Care."
              delay={150}
              animateBy="words"
              direction="top"
              className="font-manrope text-[80px] font-semibold text-primary leading-[1.1] tracking-[-0.04em] mb-8"
            />

            <p className="font-inter text-lg text-on-surface-variant mb-12 max-w-xl leading-relaxed animate-fade-in-up opacity-0 [animation-delay:600ms]">
              Aura Dental combines Swiss clinical precision with a calming atmosphere to redefine your dental experience. Modern technology meets human touch.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in-up opacity-0 [animation-delay:800ms]">
              <Link to="/contact">
                <button className="bg-navy-slate text-white px-10 py-5 rounded-lg font-manrope font-semibold hover:bg-slate-700 transition-all duration-300">
                  Book Appointment
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-slate-200 bg-transparent px-10 py-5 rounded-lg font-manrope font-semibold hover:bg-sky-50 transition-all duration-300">
                  View Services
                </button>
              </Link>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 relative h-full min-h-[500px] lg:min-h-[700px]" data-aos="fade-left">
            <div className="absolute inset-0 bg-sky-50 rounded-2xl -rotate-2 scale-105 z-0"></div>
            <img 
              alt="Aura Dental Minimalist Clinic" 
              className="relative z-10 h-full w-full object-cover rounded-2xl shadow-2xl grayscale-[10%] brightness-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ72aXc9DnKqubzOxfkWpm7JSfI2oJ36A0X5dQm6LF1kDI_vNGZNPu4XbIXB_rHJxRFxEJoZplAsqTe4LsVe_RsdElHXfjn63BP4jYK3yOqP_XsI-IykdUH_oQqrIBefkR1CiV2eU99Q3YpSHyw3kAWdKGWOLRZwuRyXfzeqmoQyFCIM4iKv0u2vzjAhV013X32OEPAcrhAT4GhcFeLJ6hA0Iywn5m4yXRGJa6O0HeRGX8KHgCK_NRqxbzagwXZe200rsAp8XPRDM" 
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-[160px] bg-white">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="flex justify-between items-end mb-20" data-aos="fade-up">
            <div className="max-w-xl">
              <h2 className="font-manrope text-[48px] font-medium text-primary mb-6 leading-tight">Comprehensive Clinical Expertise</h2>
              <p className="font-inter text-on-surface-variant leading-relaxed">
                We offer a full spectrum of dental treatments utilizing the latest diagnostic imaging and surgical robotics.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="material-symbols-outlined text-4xl text-slate-300">clinical_notes</span>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 group relative overflow-hidden bg-surface-container-low p-10 h-[400px] border border-slate-100 flex flex-col justify-end transition-all duration-500 hover:border-slate-300" data-aos="fade-right">
              <div className="absolute top-10 right-10">
                <span className="material-symbols-outlined text-slate-400 text-3xl">dentistry</span>
              </div>
              <h3 className="font-manrope text-[32px] font-medium mb-4">Cosmetic Restorations</h3>
              <p className="font-inter text-on-surface-variant max-w-md mb-8 leading-relaxed">Crafting symmetrical, natural-looking smiles through advanced porcelain artistry and precision mapping.</p>
              <Link to="/services" className="inline-flex items-center text-sm font-semibold tracking-wider uppercase group-hover:gap-2 transition-all duration-300">
                Explore Service <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Link>
            </div>

            <div className="col-span-12 md:col-span-4 bg-navy-slate p-10 text-white h-[400px] flex flex-col justify-between" data-aos="fade-left">
              <span className="material-symbols-outlined text-4xl opacity-50">biotech</span>
              <div>
                <h3 className="font-manrope text-[32px] font-medium mb-4 text-white">Digital Imaging</h3>
                <p className="font-inter text-slate-400 leading-relaxed">Ultra-low radiation 3D scanning for pinpoint accuracy in treatment planning.</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 border border-slate-200 p-10 h-[400px] flex flex-col justify-between hover:bg-slate-50 transition-colors" data-aos="fade-up" data-aos-delay="100">
              <div>
                <span className="material-symbols-outlined text-3xl text-slate-600 mb-6">health_and_safety</span>
                <h3 className="font-manrope text-[32px] font-medium mb-4">Preventative Care</h3>
              </div>
              <p className="font-inter text-on-surface-variant leading-relaxed">Systematic hygiene protocols designed for long-term oral stability and systemic health.</p>
            </div>

            <div className="col-span-12 md:col-span-8 bg-surface-container h-[400px] relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <img 
                alt="Advanced Lab Tech" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl8EXvphZ-4n5HOAFvv0Un_6r0EhJHsM8pkgv_Tt9-iNJrqPzpXFKrlshf77Vgg6Xn4Dn4U800OvXxHeDRKv-GrtFzK0GdKoYuOPMK6tUCFOJAd90GtGRiSLf3RHRKGVJAhpKLHKrxAOmj8WxY7i36Y4YrdQvPL6ITJZ7RU7XtDgzFafho9QpaA42bz109PyH6hfFcS4C8PGTpEJiiUFJ3mxpO_m1uhMtiyOYWUr_bPc-bd-3V9VM9D_kowU4lXTlfi4zImbY3E5c" 
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-white/80 to-transparent">
                <h3 className="font-manrope text-[32px] font-medium mb-2">Oral Surgery</h3>
                <p className="font-inter text-on-surface-variant max-sm leading-relaxed">Specialized surgical procedures performed in a sterile, state-of-the-art environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[160px] bg-navy-slate text-white">
        <div className="max-w-[1440px] mx-auto px-16 text-center">
          <h2 className="font-manrope text-[80px] font-semibold mb-8 leading-tight tracking-tight">
            <DecryptedText 
              text="Ready for a Better Experience?" 
              animateOn="view"
              revealDirection="center"
              className="text-white"
              encryptedClassName="text-slate-500"
            />
          </h2>
          <p className="font-inter text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:400ms]">Book your initial consultation today and discover why Aura Dental is the preferred choice for precise, comfortable care.</p>
          <div className="flex justify-center animate-fade-in-up opacity-0 [animation-delay:600ms]">
            <Link to="/contact">
              <button className="bg-white text-navy-slate px-12 py-5 rounded-lg font-manrope font-bold hover:bg-slate-100 transition-all duration-300">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

