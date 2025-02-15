
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Subjects", href: "#subjects" },
    { name: "Admissions", href: "#admissions" },
    { name: "Our Students", href: "#students" },
    { name: "Our Faculty", href: "#faculty" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-college-primary hover:text-college-dark transition-colors duration-300">
              Firoza Khatoon
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-college-secondary hover:text-college-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-college-primary after:bottom-[-4px] after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-college-secondary hover:text-college-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-college-secondary hover:text-college-primary hover:bg-college-light transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
