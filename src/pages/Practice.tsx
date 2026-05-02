import { Link } from 'react-router-dom';
import BlurText from '../components/animations/BlurText';
import ShinyText from '../components/animations/ShinyText';

const Practice = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-16 grid grid-cols-12 gap-8 mb-[160px] pt-20">
        <div className="col-span-12 md:col-span-8">
          <BlurText
            text="Clean Precision. Empathetic Care."
            delay={100}
            animateBy="words"
            direction="top"
            className="font-manrope text-[80px] font-light text-navy-slate mb-12 leading-tight tracking-[-0.04em]"
          />
          <p className="font-inter text-lg text-on-surface-variant max-w-xl leading-relaxed animate-fade-in-up opacity-0 [animation-delay:600ms]">
            Founded on the principles of surgical excellence and patient tranquility, Aura Dental redefines the clinical experience through minimalist design and advanced technology.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 self-end animate-fade-in-up opacity-0 [animation-delay:800ms]">
          <div className="border-l border-slate-200 pl-8 py-4">
            <span className="font-inter text-xs font-bold text-slate-400 block mb-2 uppercase tracking-widest">ESTABLISHED</span>
            <span className="font-manrope text-[32px] font-medium text-navy-slate">2014</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-[1440px] mx-auto px-16 mb-[160px] grid grid-cols-12 gap-12 items-center" data-aos="fade-up">
        <div className="col-span-12 md:col-span-6 relative">
          <img 
            className="w-full aspect-[4/5] object-cover grayscale-[20%]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ72aXc9DnKqubzOxfkWpm7JSfI2oJ36A0X5dQm6LF1kDI_vNGZNPu4XbIXB_rHJxRFxEJoZplAsqTe4LsVe_RsdElHXfjn63BP4jYK3yOqP_XsI-IykdUH_oQqrIBefkR1CiV2eU99Q3YpSHyw3kAWdKGWOLRZwuRyXfzeqmoQyFCIM4iKv0u2vzjAhV013X32OEPAcrhAT4GhcFeLJ6hA0Iywn5m4yXRGJa6O0HeRGX8KHgCK_NRqxbzagwXZe200rsAp8XPRDM" 
            alt="Philosophy" 
          />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-100 z-[-1]"></div>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <span className="font-inter text-xs font-bold text-slate-400 uppercase block mb-8 tracking-widest">Our Philosophy</span>
          <BlurText
            text="Clinical hygiene meets architectural comfort."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="font-manrope text-[48px] font-medium text-navy-slate mb-8 leading-tight"
          />
          <div className="space-y-6 font-inter text-on-surface-variant leading-relaxed">
            <p>We believe that the environment is as critical to healing as the procedure itself. Our clinic is designed to eliminate the 'white coat syndrome' through intentional whitespace and soft-tonal aesthetics.</p>
            <p>By integrating the latest in digital diagnostic imaging with a boutique hospitality approach, we provide a dental experience that is as precise as it is peaceful.</p>
          </div>
        </div>
      </section>

      {/* Practitioners */}
      <section className="bg-slate-50 py-40">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="mb-24 flex justify-between items-end border-b border-slate-200 pb-8" data-aos="fade-up">
            <h2 className="font-manrope text-[48px] font-medium text-navy-slate tracking-tight">The Practitioners</h2>
            <span className="font-inter text-xs font-bold text-slate-400 uppercase tracking-widest">Expertise & Innovation</span>
          </div>
          <div className="grid grid-cols-12 gap-12">
            {/* Bio 1 */}
            <div className="col-span-12 md:col-span-4 group" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDIpNPMTyoET8ykh5Xd-p2kIv6e502KNd5ym-D4KeDgzSg6mN5tJDSz5iFx9nztvjcR_TYjaKjVcQ9zr8r2KhRizl68SnCPJrVnxtnQ6GRldzpd4znOM2egOZytoP92UqFqks2SjZE_ci4Zq4gpSjAIVwD5pGW9UF4xORs4TTiXFGHrpEs7ujPQsyV1UBynsG-0yWhPY0py7LILsdLAS5Gj8WAA5lGdTLVW7Dx4ONX1QibQQi2m7k7roiKiqN2GCwSkWxSC005Joo" 
                  alt="Dr. Julian Vance" 
                />
              </div>
              <h3 className="font-manrope text-[32px] font-medium text-navy-slate mb-2">Dr. Julian Vance</h3>
              <p className="font-inter text-xs font-bold text-slate-400 uppercase mb-6 tracking-widest">Chief Medical Officer / Prosthodontics</p>
              <p className="font-inter text-on-surface-variant leading-relaxed">With over 15 years of clinical experience, Dr. Vance specializes in complex restorative architecture and digital smile design.</p>
            </div>
            {/* Bio 2 */}
            <div className="col-span-12 md:col-span-4 md:mt-24 group" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO6nv7-5AovjI78wU1lk8bNIXzODFbhnyO6z21LqY0QKlGTRByLdTLNbjV6qVtebMCp3It_PNVzhidtSz__bTiLLNScGgPpZQmvjcsm-FwVC2p2Cz0IHSZQAVUPSAn_l7dqydfJXQCuZovAGLq0TuyJCm28vbs4V_G3I6x6OCcTf-KzrHK8FsMRxCbCdKhtO-qlqGOpNOhWOKIB9_ZZiFviKWuMt75ACFSBmKCtWNtBrgrlVv7zQIo7EKAaM2MEw2vvzBZGVBJB8g" 
                  alt="Dr. Elara Thorne" 
                />
              </div>
              <h3 className="font-manrope text-[32px] font-medium text-navy-slate mb-2">Dr. Elara Thorne</h3>
              <p className="font-inter text-xs font-bold text-slate-400 uppercase mb-6 tracking-widest">Lead Orthodontics</p>
              <p className="font-inter text-on-surface-variant leading-relaxed">A pioneer in invisible aligner technology, Dr. Thorne focuses on the intersection of facial aesthetics and functional bite alignment.</p>
            </div>
            {/* Bio 3 */}
            <div className="col-span-12 md:col-span-4 group" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJB4dfKoqp9iLtPDxWDywttqUVjTqSsnosNGlT_V-i4oPpmNshReUlA0EhVe2JqmQ_ovJM3Os6JBEH86q2kpja08qljcWGe6mDuzjVtYdmu5TeBV7u_1-VeOXqpCQ6OlgPaSsjOjyEjnIOjHBrsBBb4j4uJGXPbjyoN-uda7QNSt5cfUhNG9sI6CAqz0xQQ0A6B5Wp0MK6TwWh9984e3ieEMjB-Zpu4TpBISWZ9fKzmWCCQQlDjU0AK95ODfwUTxb4DUjKTLHCoUc" 
                  alt="Dr. Marcus Chen" 
                />
              </div>
              <h3 className="font-manrope text-[32px] font-medium text-navy-slate mb-2">Dr. Marcus Chen</h3>
              <p className="font-inter text-xs font-bold text-slate-400 uppercase mb-6 tracking-widest">Periodontal Specialist</p>
              <p className="font-inter text-on-surface-variant leading-relaxed">Dedicated to the foundation of oral health, Dr. Chen utilizes microsurgical techniques for tissue regeneration and implantology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values: Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-16 my-[160px]">
        <div className="grid grid-cols-12 grid-rows-2 gap-8 h-auto lg:h-[800px]">
          <div className="col-span-12 lg:col-span-8 row-span-1 bg-navy-slate p-16 flex flex-col justify-end text-white rounded-lg" data-aos="fade-right">
            <span className="font-inter text-xs font-bold tracking-widest text-white/60 uppercase mb-4">Value 01</span>
            <h3 className="font-manrope text-[48px] font-medium mb-4">Absolute Clarity</h3>
            <p className="font-inter text-lg text-white/80 max-w-lg leading-relaxed">Every treatment plan is presented with transparent pricing and detailed digital mapping. No surprises, only solutions.</p>
          </div>
          <div className="col-span-12 lg:col-span-4 row-span-2 bg-slate-100 p-16 flex flex-col justify-between border border-slate-200 rounded-lg" data-aos="fade-left">
            <div>
              <span className="material-symbols-outlined text-4xl text-navy-slate mb-8">troubleshoot</span>
              <span className="font-inter text-xs font-bold tracking-widest text-slate-500 uppercase block mb-4">Value 02</span>
              <h3 className="font-manrope text-[32px] font-medium text-navy-slate mb-6">Technological Edge</h3>
            </div>
            <p className="font-inter text-on-surface-variant leading-relaxed">We invest in ultra-low radiation 3D scanning and AI-assisted diagnostics to ensure pinpoint accuracy in every procedure.</p>
          </div>
          <div className="col-span-12 lg:col-span-4 row-span-1 bg-white border border-slate-200 p-12 rounded-lg" data-aos="fade-up">
            <span className="font-inter text-xs font-bold tracking-widest text-slate-500 uppercase block mb-4">Value 03</span>
            <h3 className="font-manrope text-[32px] font-medium text-navy-slate mb-4">Sustainable Care</h3>
            <p className="font-inter text-on-surface-variant leading-relaxed">A digital-first, paperless workflow paired with eco-friendly sterilization protocols.</p>
          </div>
          <div className="col-span-12 lg:col-span-4 row-span-1 bg-sky-50 p-12 rounded-lg border border-sky-100" data-aos="fade-up" data-aos-delay="100">
            <span className="font-inter text-xs font-bold tracking-widest text-slate-500 uppercase block mb-4">Value 04</span>
            <h3 className="font-manrope text-[32px] font-medium text-navy-slate mb-4">Patient Peace</h3>
            <p className="font-inter text-slate-600 leading-relaxed">Sensory-optimized suites featuring noise-canceling technology and calming visual horizons.</p>
          </div>
        </div>
      </section>

      {/* Office Imagery: Large Layout */}
      <section className="mb-[160px]">
        <div className="max-w-[1440px] mx-auto px-16 mb-12">
          <h2 className="font-manrope text-[48px] font-medium text-navy-slate">The Space</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 overflow-hidden h-auto md:h-[600px] px-16 max-w-[1440px] mx-auto">
          <div className="w-full md:w-1/2 flex-shrink-0 h-[400px] md:h-full">
            <img 
              className="w-full h-full object-cover rounded-lg" 
              alt="Lounge" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVCA-3OOaQgqdm5_lBF0Yn-bGEJJjcAZ0zt4JawlUfe2nUtbjfPwKB4O9RNRYB_7Ar6C8x4FTcHYCkuLDIBvLFQtNLwkQM4IfcdtX6Fkxe0KGZP1cijxAsDslSssuGO1knNAzZUAV8FCZK5hp5MEmt8PR0cEi3qmmaHWcpOihnS3xmqjWGzVb_8cIPZQ-iN9WiW2L1AtN17Jfp0LsUm_Ph70wON-FiZfH36xq_BNIhVTeOMXmg1KFoMAX5778pjK0qZsAnUNvKQ2Q" 
            />
          </div>
          <div className="w-full md:w-1/4 flex-shrink-0 h-[400px] md:h-full">
            <img 
              className="w-full h-full object-cover grayscale rounded-lg" 
              alt="Equipment" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVBsGNDpCHxbK5s2zMQNkpAxa0DYECr252Op-ZEgKseUQ1gA7ksOqQGrASH2BJmL1XTUBvrpCIE2TURaV91Hqt4Yjwv3SXcAo_raV-KxEwgO9X0c3e2oH35aNDtSfm6cOBm5PGTIRiJ1sWN7l0SqdDa663c3xLmIpywI-h6vnn3_OWwJjKVvocyMBLap04E_a649D8GBDmlQnWYw60rhHb4nz-1KS0SZJVWEaYpvo5Cgjig0h7CPLWezMPODUWaP7tFSkKHBHoZRk" 
            />
          </div>
          <div className="w-full md:w-1/4 flex-shrink-0 h-[400px] md:h-full">
            <img 
              className="w-full h-full object-cover rounded-lg" 
              alt="Hallway" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQiAsmzpAMdSm7qJ5mbDfCREU_RZC-395FNmB03XTThkC3gdvYJNPNGLaeZciDBXQhbYz-r7C8GJbkwEx-W2pHD4-QZCjrDyKXdukP6n4qTAXncg4vKCRazYAYlncXibQe0_xZBZ4ZJ8NczNjJMOh3Yq5neFJQaIuTdLhVEP_WHiPdWpwIt_Pe1GbadWHrk7SaqEarhgUNUjXxZfuBN7ACjlAeH-5me75d8EWy5GvbJvZfm9LE0VPb82TQ4vb8EpZiR7rqp1Amgx4" 
            />
          </div>
        </div>
      </section>

      {/* Treatment Timeline */}
      <section className="max-w-[1440px] mx-auto px-16 mb-[160px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-manrope text-[48px] font-medium text-navy-slate mb-6">Your Journey</h2>
            <p className="font-inter text-on-surface-variant leading-relaxed">We have streamlined our patient onboarding to ensure every visit is efficient and every outcome is predictable.</p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 mt-12 md:mt-0">
            <div className="relative pl-12 border-l border-slate-200 space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-navy-slate ring-8 ring-white"></div>
                <h4 className="font-manrope text-[32px] font-medium text-navy-slate mb-4">01. Discovery</h4>
                <p className="font-inter text-on-surface-variant leading-relaxed">A comprehensive 3D digital scan and consultation where we map your current oral health and discuss your long-term aesthetic goals.</p>
              </div>
              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-navy-slate ring-8 ring-white"></div>
                <h4 className="font-manrope text-[32px] font-medium text-navy-slate mb-4">02. Design</h4>
                <p className="font-inter text-on-surface-variant leading-relaxed">Our team creates a digital prototype of your treatment plan, allowing you to visualize the results before we even begin.</p>
              </div>
              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-navy-slate ring-8 ring-white"></div>
                <h4 className="font-manrope text-[32px] font-medium text-navy-slate mb-4">03. Execution</h4>
                <p className="font-inter text-on-surface-variant leading-relaxed">Precise clinical intervention in our sensory-optimized suites, utilizing the latest in minimally invasive techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-[160px] bg-navy-slate text-white text-center">
        <div className="max-w-[1440px] mx-auto px-16">
          <h2 className="font-manrope text-[80px] font-semibold mb-8 leading-tight tracking-tighter">Join Our Practice.</h2>
          <Link to="/contact">
            <button className="bg-white text-navy-slate px-12 py-5 rounded-lg font-manrope font-bold hover:bg-slate-100 transition-all duration-300">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Practice;

