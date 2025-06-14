import React, { useEffect, useRef, useState } from 'react';
import { X, FileText, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';

interface Country {
  name: string;
  flag: string;
  requirements: string[];
  processingTime: string;
  fee: string;
  description: string;
}

const countries: Country[] = [
  {
    name: 'United States',
    flag: '🇺🇸',
    requirements: ['Valid Passport', 'DS-160 Form', 'Photo', 'Bank Statements', 'Interview Appointment'],
    processingTime: '3-5 weeks',
    fee: '$160 - $265',
    description: 'Tourist, business, and work visas for the United States'
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    requirements: ['Valid Passport', 'Application Form', 'Photos', 'Financial Proof', 'Travel Itinerary'],
    processingTime: '2-3 weeks',
    fee: '£95 - £348',
    description: 'Visitor, work, and study visas for the United Kingdom'
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    requirements: ['Valid Passport', 'IMM Form', 'Photos', 'Financial Support', 'Medical Exam (if required)'],
    processingTime: '2-4 weeks',
    fee: 'CAD $100 - $155',
    description: 'Temporary resident visas and work permits for Canada'
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    requirements: ['Valid Passport', 'Application Form', 'Health Insurance', 'Character Documents', 'English Test'],
    processingTime: '1-4 weeks',
    fee: 'AUD $145 - $365',
    description: 'Tourist, business, and skilled migration visas'
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    requirements: ['Valid Passport', 'Application Form', 'Photos', 'Travel Insurance', 'Accommodation Proof'],
    processingTime: '1-2 weeks',
    fee: '€75 - €80',
    description: 'Schengen visas and work permits for Germany'
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    requirements: ['Valid Passport', 'Application Form', 'Photos', 'Bank Statements', 'Hotel Booking'],
    processingTime: '3-5 days',
    fee: 'AED 350 - 1000',
    description: 'Tourist and business visas for the United Arab Emirates'
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    requirements: ['Valid Passport', 'Application Form', 'Photos', 'Financial Proof', 'Return Ticket'],
    processingTime: '1-3 days',
    fee: 'SGD $30 - $165',
    description: 'Tourist and business visas for Singapore'
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    requirements: ['Valid Passport', 'Application Form', 'Photos', 'Itinerary', 'Financial Documents'],
    processingTime: '4-6 days',
    fee: '¥3,000 - ¥6,000',
    description: 'Tourist, business, and work visas for Japan'
  }
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (country: Country) => {
    setSelectedCountry(country);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCountry(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visa Requirements by <span className="text-blue-600">Country</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore visa requirements for popular destinations worldwide. Click on any country 
              to see detailed information about documentation and processing times.
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(country)}
              >
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{country.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {country.processingTime}
                    </div>
                  </div>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{selectedCountry.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCountry.name}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Required Documents
                  </h4>
                  <div className="space-y-2">
                    {selectedCountry.requirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      <h5 className="font-semibold text-gray-900">Processing Time</h5>
                    </div>
                    <p className="text-gray-700">{selectedCountry.processingTime}</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                      <h5 className="font-semibold text-gray-900">Visa Fee</h5>
                    </div>
                    <p className="text-gray-700">{selectedCountry.fee}</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 mr-2 text-yellow-600" />
                    <h5 className="font-semibold text-gray-900">Need Help?</h5>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Our expert consultants can guide you through the entire visa application process.
                  </p>
                  <button
                    onClick={() => {
                      closeModal();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Get Professional Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;