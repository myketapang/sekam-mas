import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Flame, 
  Recycle, 
  MapPin, 
  Award, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Phone,
  Droplets,
  Factory,
  Zap,
  Box
} from 'lucide-react';

// --- Sub-Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strategy', href: '#impact' },
    { name: 'R&D', href: '#tech' },
    { name: 'Products', href: '#products' },
    { name: 'Founder', href: '#founder' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-700 rounded flex items-center justify-center shadow-lg">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter uppercase">
            SEKAM <span className="text-amber-500">MAS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-black text-xs tracking-widest transition-transform hover:scale-105 active:scale-95">
            PARTNER WITH US
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col p-6 gap-4 md:hidden animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white font-bold uppercase tracking-widest py-2">
              {link.name}
            </a>
          ))}
          <button className="bg-green-600 text-white py-4 rounded font-black tracking-widest">
            CONTACT NOW
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden bg-[#0a0f0a] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1530507629858-e4977730e9e0?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Perlis Industrial" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0a] via-[#0a0f0a]/80 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-1 rounded-full text-amber-500 text-xs font-black tracking-widest uppercase">
            <Zap className="w-3 h-3" /> RMK-13 Strategic Player
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            Turning Perlis <br/>Agri-Waste into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Sustainable Gold
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
            Bridging Perlis' agricultural heritage with global industrial standards through high-performance bio-energy engineered from 100% natural rice husk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded font-black tracking-widest transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-2">
              EXPLORE PRODUCTS <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/20 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded font-black tracking-widest transition-all">
              VIEW R&D SPECS
            </button>
          </div>
          <div className="pt-8 flex items-center gap-6 text-xs font-bold text-gray-500 tracking-widest uppercase border-t border-white/10 max-w-md">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-500" /> CVIA PERLIS</div>
            <div className="flex items-center gap-2"><Factory className="w-4 h-4 text-amber-500" /> NCIA ECOSYSTEM</div>
          </div>
        </div>

        {/* Stat Grid for Visual Weight */}
        <div className="hidden lg:grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right duration-1000">
          {[
            { label: 'Annual Husk', val: '100k+', color: 'text-amber-500' },
            { label: 'Paddy Output', val: 'Top 38%', color: 'text-green-500' },
            { label: 'Energy Density', val: '4.5k kcal', color: 'text-blue-500' },
            { label: 'Chemicals', val: '0%', color: 'text-purple-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:border-amber-500/50 transition-colors">
              <div className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformation = () => {
  return (
    <section id="impact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-gray-900">The Circular Transformation</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium">
            We solve the F&B sector's most pressing challenges: high maintenance, environmental stigma, and volatile costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="bg-white p-12 md:p-16 border-r border-slate-100">
            <h3 className="text-red-600 font-black uppercase tracking-widest mb-10 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" /> The Status Quo
            </h3>
            <div className="space-y-8">
              {[
                "Open Burning & Regulatory Risk",
                "Volatile Fossil Fuel Costs",
                "High Maintenance Ash & Smoke"
              ].map((text, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-slate-500 font-medium text-lg italic group-hover:text-red-500 transition-colors">{text}</span>
                  <X className="text-red-300 w-6 h-6" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0f0a] p-12 md:p-16 text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Recycle className="w-32 h-32" />
            </div>
            <h3 className="text-green-500 font-black uppercase tracking-widest mb-10 flex items-center gap-3">
              <CheckCircle className="w-6 h-6" /> The SEKAM MAS Solution
            </h3>
            <div className="space-y-8">
              {[
                "Carbon-Neutral Industrial Assets",
                "Guaranteed 20% Cost Advantage",
                "Smokeless & Minimal Residue (<10%)"
              ].map((text, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-white/10 group cursor-default">
                  <span className="font-bold text-lg group-hover:text-green-400 transition-colors">{text}</span>
                  <ArrowRight className="text-green-500 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Authority = () => {
  return (
    <section id="tech" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest rounded">
              Technical R&D Partnership
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
              UniMAP Industrial <br/>Laboratory Validated
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In the Agri-Tech sector, technical validation is the cornerstone of industrial trust. Every SEKAM MAS product meets stringent scientific benchmarks through the UniMAP-NanoMalaysia collaboration.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: <Flame />, title: 'Energy Density', detail: '4,200 - 4,500 kcal/kg Validated', bg: 'bg-amber-100', text: 'text-amber-600' },
                { icon: <Droplets />, title: 'Moisture Control', detail: 'Precision drying at <8%', bg: 'bg-blue-100', text: 'text-blue-600' },
                { icon: <ShieldCheck />, title: 'Food Safe', detail: 'Chemical-free binding (Starch)', bg: 'bg-green-100', text: 'text-green-600' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all group">
                  <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center ${item.text} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest text-gray-900">{item.title}</div>
                    <div className="text-sm text-slate-500 font-medium">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="absolute -inset-10 bg-amber-500/10 blur-[100px] rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" 
                alt="Laboratory" 
              />
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                <div className="text-xs font-black tracking-widest uppercase mb-2 text-amber-500">Global Certification</div>
                <div className="text-xl font-bold">NCIA Ecosystem & CVIA Resident</div>
                <p className="text-white/60 text-sm mt-2 font-medium">Strategic integration into the 13th Malaysia Plan (RMK-13).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const products = [
    {
      title: "Premium Bio-Briquettes",
      icon: <Box className="w-8 h-8 text-amber-500" />,
      desc: "High-density fuel offering 2x the burn time of charcoal (up to 4 hours). Smokeless, non-toxic, and chemical-free.",
      tags: ["4Hr Burn", "Low Ash", "Smokeless"]
    },
    {
      title: "Eco-Packaging Solutions",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      desc: "100% biodegradable takeaway solutions and seedling pots. BPA-Free and plastic-free engineered from rice husk fiber.",
      tags: ["ISO Certified", "Plastic Free", "Compostable"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-[#0a0f0a] text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">The Product Portfolio</h2>
            <p className="text-gray-400 font-medium">Sustainable Energy & Innovative Packaging.</p>
          </div>
          <div className="hidden md:block">
            <Award className="w-16 h-16 text-white/10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group relative bg-white/5 border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="mb-8">{p.icon}</div>
              <h3 className="text-3xl font-black mb-6 group-hover:text-amber-500 transition-colors">{p.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">{p.desc}</p>
              <div className="flex flex-wrap gap-3">
                {p.tags.map(tag => (
                  <span key={tag} className="px-4 py-1 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-widest border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-xl flex flex-col md:flex-row items-center gap-16 border border-slate-100">
          <div className="w-64 h-64 bg-slate-100 rounded-[2rem] shrink-0 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Muhammad Faris Jamaluddin - Placeholder Icon */}
            <Factory className="w-20 h-20 text-slate-300" />
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-600 font-black uppercase tracking-[0.2em] text-xs">
              <span className="w-8 h-[2px] bg-amber-600" /> Founder's Vision
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight italic">
              "I saw the untapped potential in our fields and realized that the 'waste' we were burning was actually a goldmine for the circular economy."
            </p>
            <div className="pt-4">
              <div className="text-xl font-black text-gray-900 uppercase tracking-tighter">Muhammad Faris bin Jamaluddin</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Founder & CEO, SEKAM MAS</div>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              A son of Perlis dedicated to moving the state up the value chain—transitioning from primary agriculture to high-value green manufacturing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <footer className="bg-[#0a0f0a] text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter">
          Ready to join the <br/><span className="text-amber-500">Waste-to-Wealth</span> movement?
        </h2>
        <div className="flex flex-col items-center gap-8">
          <a 
            href="https://wa.me/60123456789" 
            className="group bg-green-600 hover:bg-green-700 px-12 py-6 rounded-full font-black text-xl tracking-widest transition-all shadow-2xl flex items-center gap-4 active:scale-95"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> 
            CONTACT FOUNDER VIA WHATSAPP
          </a>
          <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-4">
            <span className="w-10 h-px bg-white/10" />
            CHUPING VALLEY INDUSTRIAL AREA &bull; PERLIS
            <span className="w-10 h-px bg-white/10" />
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 grid md:grid-cols-2 gap-8 text-left text-sm font-medium text-gray-500">
          <div>&copy; 2026 SEKAM MAS. Part of the 13th Malaysia Plan (RMK-13) Green Initiative.</div>
          <div className="md:text-right flex items-center md:justify-end gap-6 uppercase tracking-widest text-[10px] font-black">
            <button type="button" className="hover:text-white transition-colors">Privacy</button>
            <button type="button" className="hover:text-white transition-colors">Terms</button>
            <button type="button" className="hover:text-white transition-colors">Investor Portal</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Entry ---

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <Transformation />
      <Authority />
      <Portfolio />
      <Founder />
      <Contact />
    </div>
  );
}