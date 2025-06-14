import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Globe, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">INFOCUS SOLUTION</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience in immigration consulting, we have helped thousands 
              of individuals and families achieve their dreams of international mobility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Trusted Immigration Partner
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                At INFOCUS SOLUTION, we understand that immigration is more than just paperwork—it's about 
                your future, your dreams, and your family's well-being. Our team of certified immigration 
                consultants provides personalized guidance throughout your entire journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Professionals</h4>
                    <p className="text-gray-600">Licensed immigration consultants with proven track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Service</h4>
                    <p className="text-gray-600">Tailored solutions based on your unique circumstances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">End-to-End Support</h4>
                    <p className="text-gray-600">From initial consultation to visa approval and beyond</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors duration-300">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center hover:bg-green-100 transition-colors duration-300">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
                  <div className="text-gray-600">Success Stories</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center hover:bg-purple-100 transition-colors duration-300">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center hover:bg-orange-100 transition-colors duration-300">
                  <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional immigration services that empower individuals and families 
                to achieve their international mobility goals with confidence and peace of mind.
              </p>
            </div>
            <div className={`bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading immigration consultancy firm, recognized for our integrity, 
                expertise, and commitment to helping clients navigate their journey to new horizons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;