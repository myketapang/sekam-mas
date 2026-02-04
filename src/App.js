import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Flame, 
  Recycle, 
  TrendingUp, 
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
  Factory
} from 'lucide-react';

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Mission', href: '#mission' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'R&D Authority', href: '#tech' },
    { name: 'Products', href: '#products' },
    { name: 'Founder', href: '#founder' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-yellow-500 rounded-lg flex items-center justify-center">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            SEKAM <span className="text-yellow-500">MAS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium text-sm uppercase tracking-wider hover:text-yellow-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-green-600 text-center text-white py-3 rounded-lg font-bold"
            >
              Contact Founder
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop" 
          alt="Perlis Paddy Field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-white">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-1 rounded-full text-yellow-400 text-sm font-semibold tracking-wide">
            <Factory className="w-4 h-4" />
            RMK-13 Strategic Partner
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turning Perlis Agri-Waste into <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Sustainable Gold</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            Bridging Perlis’ agricultural heritage with global industrial standards. We transform 100,000 tons of rice husk into high-performance bio-energy and eco-packaging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#products" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
              Explore Products <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#tech" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 border border-white/20 transition-all">
              Our Technology
            </a>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-gray-400 border-t border-gray-800">
            <MapPin className="w-5 h-5 text-green-500" />
            <span>Chuping Valley Industrial Area (CVIA) &bull; Near Perlis Inland Port (PIP)</span>
          </div>
        </div>

        {/* Hero Card/Stats */}
        <div className="hidden md:block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                    <Recycle className="text-green-400" /> 
                    Circular Economy Impact
                </h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <div className="text-3xl font-bold text-white">100k+</div>
                        <div className="text-gray-400 text-sm">Tons/Year Waste Upcycled</div>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-green-500">
                        <div className="text-3xl font-bold text-white">20%</div>
                        <div className="text-gray-400 text-sm">Fuel Cost Savings</div>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-gray-400 text-sm">Biodegradable Packaging</div>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-purple-500">
                        <div className="text-3xl font-bold text-white">Top 38%</div>
                        <div className="text-gray-400 text-sm">Of National Paddy Output</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const comparisons = [
    {
      problem: "Open Burning Pollution",
      solution: "Carbon-Neutral Upcycling",
      icon: <Flame className="w-6 h-6" />
    },
    {
      problem: "Volatile Energy Costs",
      solution: "20% Guaranteed Savings",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      problem: "Single-Use Plastic Stigma",
      solution: "Biodegradable Eco-Packaging",
      icon: <Recycle className="w-6 h-6" />
    },
    {
      problem: "High Ash & Smoke",
      solution: "<10% Residue & Smokeless",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Problem-Solution Matrix</h2>
          <p className="text-gray-600 text-lg">
            Efficient waste management is no longer just an environmental goal; it is a strategic necessity for maintaining profit margins in a competitive, carbon-conscious market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Status Quo */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-full">
                        <AlertTriangle className="text-red-600 w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">The Status Quo</h3>
                </div>
                <div className="space-y-6">
                    {comparisons.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-red-50/50 rounded-lg">
                            <span className="text-gray-700 font-medium">{item.problem}</span>
                            <X className="text-red-400 w-5 h-5" />
                        </div>
                    ))}
                </div>
            </div>

            {/* SEKAM MAS Solution */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-xl transform md:-translate-y-4 md:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-500 p-3 rounded-full">
                        <CheckCircle className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">The SEKAM MAS Way</h3>
                </div>
                <div className="space-y-6">
                    {comparisons.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="text-green-400">{item.icon}</div>
                                <span className="text-white font-medium">{item.solution}</span>
                            </div>
                            <CheckCircle className="text-green-500 w-5 h-5" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section id="tech" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                    Technical Authority
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Engineered Precision: The UniMAP R&D Partnership
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    SEKAM MAS solidifies market authority through strategic partnership with the UniMAP TVET Centre and UniMAP-NanoMalaysia Industrial Laboratory. We don't just guess; we validate.
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Flame className="text-orange-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">High Calorific Value</h4>
                            <p className="text-gray-600">Validated at 4,200 - 4,500 kcal/kg. Equivalent to high-grade wood charcoal.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Droplets className="text-blue-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Moisture Optimization</h4>
                            <p className="text-gray-600">Precision drying maintains levels at &lt;8%, ensuring reliable ignition and no sparks.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <ShieldCheck className="text-green-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Safe & Organic</h4>
                            <p className="text-gray-600">100% organic with food-grade starch binders. Non-toxic for food preparation.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-500 mb-2 font-semibold uppercase">Ecosystem Partners</p>
                    <div className="flex flex-wrap gap-4 font-bold text-gray-400">
                        <span>UniMAP TVET</span> &bull; <span>NanoMalaysia</span> &bull; <span>NCIA</span> &bull; <span>NTIC Grant Recipient</span>
                    </div>
                </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-gray-100 h-64 rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1622323758558-8d1513e66e8e?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Lab" />
                    <span className="relative z-20 text-white font-bold">Scientific Validation</span>
                </div>
                <div className="bg-gray-100 h-48 mt-16 rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Clean Energy" />
                    <span className="relative z-20 text-white font-bold">Eco Compliance</span>
                </div>
                <div className="bg-gray-100 h-48 rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Industry" />
                    <span className="relative z-20 text-white font-bold">Industrial Scale</span>
                </div>
                 <div className="bg-gray-100 h-64 -mt-16 rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Nature" />
                    <span className="relative z-20 text-white font-bold">Pure Materials</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ title, category, description, features, image }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
        <div className="h-64 overflow-hidden relative">
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 z-10">
                {category}
            </div>
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold flex items-center gap-2">View Specifications <ArrowRight className="w-4 h-4"/></span>
            </div>
        </div>
        <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        {feat}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Products = () => {
    return (
        <section id="products" className="py-20 bg-green-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-green-300 font-bold uppercase tracking-widest text-sm">Our Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Sustainable Energy & Packaging</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Designed for maximum ESG impact. From high-volume industrial energy to high-growth eco-conscious retail.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard 
                        title="5kg Premium Briquettes"
                        category="Retail / BBQ"
                        image="https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=2000&auto=format&fit=crop"
                        description="Designed for home BBQ enthusiasts and premium glamping sites. Smokeless and safe for food."
                        features={[
                            "Smokeless & Non-Toxic",
                            "Consistent Heat",
                            "Perfect for Glamping",
                            "Clean Handling"
                        ]}
                    />
                     <ProductCard 
                        title="10kg Industrial Briquettes"
                        category="Commercial / B2B"
                        image="https://images.unsplash.com/photo-1616248238127-147814343166?q=80&w=2000&auto=format&fit=crop"
                        description="Industrial-grade solution for restaurants and boilers. Significant performance differentiator."
                        features={[
                            "2x Burn Time vs Charcoal",
                            "Up to 4 Hours Duration",
                            "No Mid-Service Refueling",
                            "Cost-Saving for Boilers"
                        ]}
                    />
                     <ProductCard 
                        title="Eco-Packaging Solutions"
                        category="F&B / Agriculture"
                        image="https://images.unsplash.com/photo-1605333190479-5092a0651280?q=80&w=2000&auto=format&fit=crop"
                        description="Biodegradable takeaway solutions and seedling pots. Eliminate single-use plastics entirely."
                        features={[
                            "100% Biodegradable",
                            "BPA-Free & Plastic-Free",
                            "Made from Husk Fiber",
                            "ISO & SGS Standards Ready"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const Founder = () => {
    return (
        <section id="founder" className="py-20 bg-amber-50">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 text-center">
                        <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-amber-200 shadow-inner">
                            {/* Placeholder for Founder Image */}
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                <span className="text-4xl">MF</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Muhammad Faris</h3>
                        <p className="text-amber-600 font-semibold mb-4">Founder & CEO</p>
                        <div className="flex justify-center gap-2">
                             <Award className="text-gray-400 w-5 h-5" />
                             <span className="text-sm text-gray-500">Son of Perlis</span>
                        </div>
                    </div>
                    <div className="md:w-2/3 relative">
                        <div className="absolute -top-6 -left-6 text-amber-200 opacity-50">
                            <Factory className="w-24 h-24" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">The Vision: Beyond Agriculture</h2>
                        <blockquote className="text-xl text-gray-600 italic mb-6 relative z-10 leading-relaxed">
                            "I view our landscape not just as farmland, but as a frontier for the 13th Malaysia Plan era. My mission is to move Perlis up the value chain—transitioning from primary agriculture to high-value green manufacturing. The 'waste' we were burning is a goldmine for the circular economy."
                        </blockquote>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-3 bg-amber-50 px-4 py-2 rounded-lg border border-amber-100">
                                <div className="bg-amber-500 rounded-full p-1"><CheckCircle className="text-white w-4 h-4"/></div>
                                <span className="text-sm font-medium text-gray-700">High-Skilled Jobs for Perlis Youth</span>
                            </div>
                            <div className="flex items-center gap-3 bg-amber-50 px-4 py-2 rounded-lg border border-amber-100">
                                <div className="bg-amber-500 rounded-full p-1"><CheckCircle className="text-white w-4 h-4"/></div>
                                <span className="text-sm font-medium text-gray-700">Community Wealth Retention</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the "Waste-to-Wealth" Movement</h2>
                <p className="text-xl text-gray-600 mb-10">
                    Whether you are a rice mill manager, restaurant owner, or investor. SEKAM MAS provides a validated, scalable opportunity.
                </p>
                
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl text-white">
                    <h3 className="text-2xl font-bold mb-2">Direct Founder Access</h3>
                    <p className="text-gray-400 mb-8">Discuss specific partnerships or bulk orders directly with leadership.</p>
                    
                    <a 
                        href="https://wa.me/60123456789" // Replace with actual number
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
                    >
                        <Phone className="w-6 h-6" />
                        Chat on WhatsApp
                    </a>
                    <p className="mt-4 text-xs text-gray-500">Typical response time: &lt; 2 hours</p>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                            <Leaf className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold text-white">SEKAM MAS</span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs">
                        From Perlis to the World. Engineering the future of sustainable energy and bio-packaging through advanced agricultural upcycling.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#mission" className="hover:text-green-500 transition-colors">Our Mission</a></li>
                        <li><a href="#products" className="hover:text-green-500 transition-colors">Products</a></li>
                        <li><a href="#tech" className="hover:text-green-500 transition-colors">Technology</a></li>
                        <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Location</h4>
                    <address className="not-italic text-sm space-y-2">
                        <p>Chuping Valley Industrial Area (CVIA)</p>
                        <p>Perlis, Malaysia</p>
                        <p className="pt-2 text-green-500">Near Perlis Inland Port (PIP)</p>
                    </address>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
                &copy; {new Date().getFullYear()} SEKAM MAS. All Rights Reserved. Built for the Green Economy.
            </div>
        </footer>
    );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Technology />
      <Products />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}