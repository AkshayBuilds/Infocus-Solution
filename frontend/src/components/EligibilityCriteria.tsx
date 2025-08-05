import React from "react";
import logo from '../../public/LOGO.png';

const EligibilityCriteria: React.FC = () => (
  <section id="eligibility" className="bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12 relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-4 left-2 w-16 h-16 sm:top-10 sm:left-10 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-20 animate-pulse z-0"></div>
    <div className="absolute bottom-4 right-4 w-10 h-10 sm:bottom-10 sm:right-20 sm:w-16 sm:h-16 bg-blue-200 rounded-full opacity-30 animate-bounce z-0"></div>
    <div className="container mx-auto px-2 sm:px-4 relative z-10">
      <div className="max-w-lg sm:max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6 gap-4 sm:gap-10 text-center sm:text-left">
          <img 
                src={logo} 
                alt="INFOCUS SOLUTION" 
                className="h-12 sm:h-[59px]" 
              />
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-700">Eligibility Criteria for Tourist Visa</h2>
        </div>
        <p className="mb-4 sm:mb-6 text-gray-700 text-base sm:text-lg">The eligibility criteria for a tourist/travel visa can vary depending on the destination country. However, here are some general requirements that are often necessary:</p>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-base md:text-lg">
          <li><strong>Valid Passport:</strong> You must have a valid passport with a minimum of six months validity from the date of entry to the destination country.</li>
          <li><strong>Purpose of Travel:</strong> You must have a genuine and legitimate reason for travel, such as tourism, sightseeing, or visiting friends and family.</li>
          <li><strong>Financial Support:</strong> You must have sufficient funds to cover your expenses while traveling, such as transportation, accommodation, and meals. This may be demonstrated through bank statements, credit card statements, or other financial documents.</li>
          <li><strong>Travel Itinerary:</strong> You may need to provide a travel itinerary detailing your plans for the trip, including places you will visit and dates of travel.</li>
          <li><strong>Health Certificate:</strong> You may need to provide a certificate of good health to ensure that you do not pose a threat to public health.</li>
          <li><strong>Character Certificate:</strong> You may also need to provide a police clearance certificate to demonstrate that you have no criminal record.</li>
          <li><strong>Return Ticket:</strong> You may need to show proof of a return ticket or onward travel to your home country or another destination after your visit.</li>
          <li><strong>Travel Insurance (if required)</strong></li>
        </ul>
      </div>
    </div>
  </section>
);

export default EligibilityCriteria;