import React from "react";
import { CheckCircle, FileText, ClipboardList, UserCheck, CalendarCheck, RefreshCcw, AlertCircle } from "lucide-react";

const helpPoints = [
  {
    icon: <CheckCircle className="h-7 w-7 text-blue-600" />, 
    title: "Visa Eligibility Assessment",
    desc: "Evaluating your eligibility and guiding you on the best visa options based on your travel purpose."
  },
  {
    icon: <FileText className="h-7 w-7 text-blue-600" />,
    title: "Document Preparation & Verification",
    desc: "Assisting in gathering and verifying all necessary documents to ensure a smooth visa application process."
  },
  {
    icon: <ClipboardList className="h-7 w-7 text-blue-600" />,
    title: "Visa Application Assistance",
    desc: "Completing and submitting visa applications accurately to avoid delays or rejections."
  },
  {
    icon: <UserCheck className="h-7 w-7 text-blue-600" />,
    title: "Interview Preparation",
    desc: "Providing guidance and mock interview sessions to help you confidently answer visa officer questions."
  },
  {
    icon: <CalendarCheck className="h-7 w-7 text-blue-600" />,
    title: "Travel Itinerary Planning",
    desc: "Helping create a detailed itinerary, including flight bookings, accommodations, and travel insurance."
  },
  {
    icon: <RefreshCcw className="h-7 w-7 text-blue-600" />,
    title: "Follow-ups & Status Updates",
    desc: "Keeping track of your application and updating you on its progress until approval."
  },
  {
    icon: <AlertCircle className="h-7 w-7 text-blue-600" />,
    title: "Visa Rejection Appeals",
    desc: "Assisting with reapplying or appealing in case of visa denials by identifying and rectifying issues."
  },
];

const HowWeHelp: React.FC = () => (
  <section className="bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12 relative overflow-hidden">
    <div className="absolute top-4 left-2 w-16 h-16 sm:top-16 sm:left-10 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-20 animate-pulse z-0"></div>
    <div className="absolute bottom-4 right-4 w-10 h-10 sm:bottom-10 sm:right-20 sm:w-16 sm:h-16 bg-blue-200 rounded-full opacity-30 animate-bounce z-0"></div>
    <div className="container mx-auto px-2 sm:px-4 relative z-10">
      <div className="max-w-8lg mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12">
        <div className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-4 justify-center text-center" >
          How We Can Help You With Tourist Visa Process
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {helpPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 sm:gap-4 bg-blue-50 rounded-xl p-4 sm:p-5 shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">{point.icon}</div>
              <div>
                <h3 className="font-semibold text-sm sm:text-lg text-gray-900 mb-1">{point.title}</h3>
                <p className="text-gray-700 text-xs sm:text-base">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowWeHelp;