import { Link } from 'react-router-dom';
import BlurText from '../components/animations/BlurText';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 mb-12 lg:mb-24 pt-20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 text-center lg:text-left mt-10 lg:mt-0">
            <span className="font-inter text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block animate-fade-in-up opacity-0 [animation-delay:200ms]">Reservation</span>
            <BlurText
              text="Begin your journey to a refined smile."
              delay={100}
              animateBy="words"
              direction="top"
              className="font-manrope text-[40px] md:text-[64px] lg:text-[80px] font-semibold text-primary leading-[1.1] tracking-[-0.04em] mb-8"
            />
            <p className="font-inter text-base md:text-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:600ms]">
              Schedule your visit at our state-of-the-art clinic. We prioritize clinical excellence and patient comfort in every interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Booking & Contact Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 mb-20 lg:mb-[160px]">
        <div className="grid grid-cols-12 gap-8 lg:gap-8">
          {/* Left Column: Simple Single-Column Form */}
          <div className="col-span-12 lg:col-span-6 bg-white p-8 lg:p-12 border border-slate-100" data-aos="fade-up">
            <h2 className="font-manrope text-2xl lg:text-[32px] font-medium mb-8 lg:mb-12 text-navy-slate">Request Appointment</h2>
            <form className="space-y-8 lg:space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="font-inter text-xs font-bold tracking-widest text-slate-500 block mb-2 uppercase">Full Name</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 focus:ring-0 focus:border-navy-slate transition-all duration-300 placeholder:text-slate-300 outline-none" placeholder="Johnathan Doe" type="text" />
              </div>
              <div className="group">
                <label className="font-inter text-xs font-bold tracking-widest text-slate-500 block mb-2 uppercase">Email Address</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 focus:ring-0 focus:border-navy-slate transition-all duration-300 placeholder:text-slate-300 outline-none" placeholder="hello@auradental.com" type="email" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <label className="font-inter text-xs font-bold tracking-widest text-slate-500 block mb-2 uppercase">Preferred Date</label>
                  <input className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 focus:ring-0 focus:border-navy-slate transition-all duration-300 outline-none" type="date" />
                </div>
                <div className="group">
                  <label className="font-inter text-xs font-bold tracking-widest text-slate-500 block mb-2 uppercase">Treatment Type</label>
                  <select className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 focus:ring-0 focus:border-navy-slate transition-all duration-300 text-slate-900 outline-none">
                    <option>General Consultation</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Orthodontics</option>
                    <option>Emergency Care</option>
                  </select>
                </div>
              </div>
              <div className="group">
                <label className="font-inter text-xs font-bold tracking-widest text-slate-500 block mb-2 uppercase">Message (Optional)</label>
                <textarea className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 focus:ring-0 focus:border-navy-slate transition-all duration-300 placeholder:text-slate-300 resize-none outline-none" placeholder="Tell us about your dental history or specific concerns..." rows={3}></textarea>
              </div>
              <button className="w-full bg-navy-slate text-white py-5 rounded-lg font-manrope font-bold uppercase tracking-widest text-sm hover:bg-slate-700 transition-colors duration-300" type="submit">
                Request Appointment
              </button>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8" data-aos="fade-up" data-aos-delay="100">
            {/* Contact Details Card */}
            <div className="bg-sky-50 p-8 lg:p-12 border border-blue-100 flex-grow">
              <h2 className="font-manrope text-2xl lg:text-[32px] font-medium mb-8 lg:mb-10 text-navy-slate">Our Studio</h2>
              <div className="space-y-8 lg:space-y-12">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-navy-slate shrink-0">location_on</span>
                  <div>
                    <h4 className="font-inter text-xs font-bold tracking-widest text-slate-900 mb-2 uppercase">Visit Us</h4>
                    <p className="font-inter text-sm lg:text-base text-slate-500 leading-relaxed">1200 Wellness Plaza, Floor 4<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-navy-slate shrink-0">call</span>
                  <div>
                    <h4 className="font-inter text-xs font-bold tracking-widest text-slate-900 mb-2 uppercase">Call Us</h4>
                    <p className="font-inter text-sm lg:text-base text-slate-500 leading-relaxed">+1 (555) 000-AURA</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-navy-slate shrink-0">schedule</span>
                  <div>
                    <h4 className="font-inter text-xs font-bold tracking-widest text-slate-900 mb-2 uppercase">Working Hours</h4>
                    <p className="font-inter text-sm lg:text-base text-slate-500 leading-relaxed">Mon – Fri: 08:00 – 19:00<br/>Sat: 09:00 – 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="h-[300px] lg:h-[400px] w-full bg-slate-200 overflow-hidden border border-slate-200 rounded-lg">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="San Francisco Map" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBGYwJljNkuo_levfLAXbSgmyZSu3g3Wtwxw04oWwcW7W-riZs1NL9CRjf9KZkmqjCC3n5XBeJ6U9hBIN78wmj3PHkM_dHSNdzHYoWokkQcgeyNvy3WtxS0DW9_5Ass2q2dkz3G9eLlMsnH3-YxRXplhwNvO9qRcDMURBvnHv5cYzptYO44RXvPpGKV6mHqlBqMW0F78VZti22vJS7p9Y_P4Goj-oN46RMl_gsZAn0-IeZwy4nvYDgF3sb7CQmgXTuPEz7Cv06j2g"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-slate-50 py-20 lg:py-[160px] overflow-hidden border-t border-slate-200" data-aos="fade-up">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex flex-col items-center text-center mb-12 lg:mb-24">
            <span className="font-inter text-xs font-bold tracking-widest text-slate-400 mb-4 uppercase">The Experience</span>
            <h2 className="font-manrope text-3xl md:text-4xl lg:text-[48px] font-medium text-navy-slate leading-tight max-w-2xl">What to expect from your first Aura visit</h2>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between max-w-5xl mx-auto space-y-12 md:space-y-0">
            {/* Horizontal line for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 hidden md:block"></div>

            {/* Nodes */}
            <div className="relative z-10 flex flex-col items-center group text-center">
              <div className="w-4 h-4 rounded-full bg-navy-slate mb-4 lg:mb-6 ring-8 ring-slate-50"></div>
              <h4 className="font-manrope text-xl lg:text-[24px] font-medium text-navy-slate mb-2">Consult</h4>
              <p className="font-inter text-sm lg:text-base text-slate-500 max-w-[200px] leading-relaxed">Initial clinical assessment and digital imaging.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center group text-center">
              <div className="w-4 h-4 rounded-full bg-navy-slate mb-4 lg:mb-6 ring-8 ring-slate-50"></div>
              <h4 className="font-manrope text-xl lg:text-[24px] font-medium text-navy-slate mb-2">Plan</h4>
              <p className="font-inter text-sm lg:text-base text-slate-500 max-w-[200px] leading-relaxed">Bespoke treatment path tailored to your needs.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center group text-center">
              <div className="w-4 h-4 rounded-full bg-navy-slate mb-4 lg:mb-6 ring-8 ring-slate-50"></div>
              <h4 className="font-manrope text-xl lg:text-[24px] font-medium text-navy-slate mb-2">Execute</h4>
              <p className="font-inter text-sm lg:text-base text-slate-500 max-w-[200px] leading-relaxed">Precise treatment using advanced technology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
