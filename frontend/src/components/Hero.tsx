import React from 'react';
import { ArrowRight, CheckCircle, Globe2, Users, Award, FileText, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEligibility = () => {
    const element = document.getElementById('eligibility');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-2 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-20 animate-pulse hidden sm:block"></div>
        <img 
                src="/Circle_logo.jpeg" 
                alt="INFOCUS SOLUTION" 
                className="absolute top-40 right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-200 rounded-full opacity-30 animate-bounce hidden sm:block"
              />
        <div className="absolute bottom-20 left-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-blue-300 rounded-full opacity-25 animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 sm:w-20 sm:h-20 bg-blue-150 rounded-full opacity-20 animate-bounce hidden sm:block"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 pt-20 pb-10 sm:pt-24 sm:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="text-blue-600">INFOCUS</span> SOLUTION
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-8 font-medium">
              Your Global Immigration Expert
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0">
              Navigate the complex world of international immigration with confidence. 
              We provide expert guidance and personalized solutions for your visa requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg order-1"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={scrollToEligibility}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg order-2"
              >
                Check Visa Requirements
              </button>
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSccGNHj9f8pjz3A63QadgJlOVMjz_KtQPkPTuoADK5_autLwQ/viewform?usp=dialog', '_blank')}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg order-3"
              >
                <FileText className="mr-2 h-5 w-5" />
                Apply Now
                <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-xs sm:max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe2 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 mt-10 sm:mt-12 lg:mt-0 w-full max-w-md sm:max-w-none mx-auto lg:mx-0">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-0 sm:rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Why Choose Us?</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Expert Guidance</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">Professional immigration consultants with years of experience</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Document Assistance</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">Complete support for all required documentation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Fast Processing</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">Quick turnaround times for all visa applications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Globe2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;