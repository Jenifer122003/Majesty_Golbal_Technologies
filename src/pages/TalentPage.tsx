import { Building2, Users, Globe, Clock, CheckCircle, Briefcase } from 'lucide-react';

interface TalentPageProps {
  onNavigate: (page: 'home' | 'services' | 'talent') => void;
}

function TalentPage({ onNavigate }: TalentPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">MGT</span>
            </div>
            <div className="flex space-x-8">
              <button onClick={() => onNavigate('home')} className="text-gray-600 hover:text-blue-600 transition">Home</button>
              <button onClick={() => onNavigate('services')} className="text-gray-600 hover:text-blue-600 transition">Services</button>
              <button onClick={() => onNavigate('talent')} className="text-blue-600 font-medium">Talent Acquisition</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Talent Acquisition & Management</h1>
          <p className="text-xl text-gray-600 mb-2">Building Teams That Drive Success</p>
          <p className="text-lg text-gray-500">Precision • Flexibility • Efficiency</p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose MGT for Your Talent Needs?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-blue-100">Preferred partner for industry leaders including Reliance Jio, TCS, Oracle, and more</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-blue-100">Operations in India, US, UK, Canada, and Mexico with round-the-clock support</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-blue-100">Rapid deployment through multiple hiring models to meet urgent requirements</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Talent Spectrum</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We provide quality professionals across all experience levels and domains:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Entry Level:</strong> Trained freshers ready to make an impact</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Mid-Level:</strong> Experienced professionals with proven expertise</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Senior Level:</strong> Team leads and technical architects</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Leadership:</strong> Business unit heads and strategic leaders</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Hiring Models</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Flexible engagement models to suit your business needs:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Contract-to-Hire (C2H)</h3>
                <p className="text-gray-600">Evaluate talent before permanent placement</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Full-Time Employees (FTE)</h3>
                <p className="text-gray-600">Direct permanent hiring for long-term needs</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Freelancing</h3>
                <p className="text-gray-600">Project-based experts for specific deliverables</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Domains We Specialize In</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold text-gray-900 mb-3">IT Professionals</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Software Developers</li>
                <li>• Data Scientists & Engineers</li>
                <li>• Cloud Architects</li>
                <li>• DevOps Engineers</li>
                <li>• Cybersecurity Experts</li>
                <li>• AI/ML Specialists</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold text-gray-900 mb-3">Non-IT Professionals</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Finance Professionals</li>
                <li>• HR Specialists</li>
                <li>• Marketing Experts</li>
                <li>• Sales Professionals</li>
                <li>• Operations Managers</li>
                <li>• Business Analysts</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold text-gray-900 mb-3">Specialized Roles</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Project Managers</li>
                <li>• Scrum Masters</li>
                <li>• Product Owners</li>
                <li>• QA Engineers</li>
                <li>• Technical Writers</li>
                <li>• UX/UI Designers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Trusted Partners</h2>
          <p className="text-center text-slate-300 mb-8">
            We are the preferred talent partner for industry-leading organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">Reliance Jio</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">Eviden (ATOS)</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">TCS</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">Oracle</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">Tech Mahindra</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">HCL</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">UST Global</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold">LTI & Wipro</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Data Analyst Corp</h2>
          <p className="text-center text-gray-600 mb-6">Our Wholly Owned Subsidiary</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Data Analyst Corp, a specialized division of MGT, supports organizations with comprehensive
              Data, AI, and GenAI requirements. Born digital, we aim to transform lives through technology.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With deep expertise in Big Data analytics and generative artificial intelligence capabilities,
              we empower clients to access the latest advancements in data science, enabling informed
              decisions and unlocking the true potential of their data.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900">Data Analytics</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900">AI Solutions</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900">GenAI Experiments</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Majesty Global Technologies. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Head Office: Hyderabad, India</p>
        </div>
      </footer>
    </div>
  );
}

export default TalentPage;
