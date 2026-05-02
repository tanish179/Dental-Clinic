import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import ShinyText from './animations/ShinyText';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Our Practice', path: '/practice' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 h-20">
      <div className="flex justify-between items-center h-full px-16 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-900 uppercase">
          <div className="w-8 h-8 bg-navy-slate rounded-lg flex items-center justify-center text-white">
            <Heart fill="currentColor" size={16} />
          </div>
          <ShinyText text="Aura Dental" disabled={false} speed={3} className="font-bold" color="#0F172A" shineColor="#7DD3FC" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out pb-1 ${
                location.pathname === link.path 
                ? 'text-slate-900 border-b-2 border-slate-900' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <Link to="/contact">
          <button className="bg-navy-slate text-white px-6 py-3 rounded-lg font-manrope text-sm font-semibold hover:bg-slate-700 transition-all duration-300 scale-95 active:opacity-80">
            <ShinyText text="Book Appointment" disabled={false} speed={3} color="#FFFFFF" shineColor="#7DD3FC" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-slate-50 border-t border-slate-200">
      <div className="grid grid-cols-12 gap-8 px-16 max-w-[1440px] mx-auto">
        <div className="col-span-12 md:col-span-4">
          <div className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-tighter">Aura Dental</div>
          <p className="font-manrope text-sm leading-relaxed text-slate-500 max-w-xs">
            Pioneering a new standard in dental clinical excellence through modern technology and specialized human care.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="font-bold text-slate-900 text-sm mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-slate-500 hover:text-slate-900 transition-colors duration-300 text-sm">General Dentistry</Link></li>
            <li><Link to="/services" className="text-slate-500 hover:text-slate-900 transition-colors duration-300 text-sm">Cosmetic Care</Link></li>
            <li><Link to="/services" className="text-slate-500 hover:text-slate-900 transition-colors duration-300 text-sm">Implantology</Link></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="font-bold text-slate-900 text-sm mb-6">Practice</h4>
          <ul className="space-y-4">
            <li><Link to="/practice" className="text-slate-500 hover:text-slate-900 transition-colors duration-300 text-sm">Our Team</Link></li>
            <li><Link to="/practice" className="text-slate-500 hover:text-slate-900 transition-colors duration-300 text-sm">Sustainability</Link></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h4 className="font-bold text-slate-900 text-sm mb-6">Connect</h4>
          <p className="text-sm text-slate-500 mb-6">102 Medical Plaza, Innovation District<br/>New York, NY 10012</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-navy-slate hover:text-white transition-all">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-navy-slate hover:text-white transition-all">
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
