import { Building2, FolderKanban, Shield, Users, BarChart3, Lightbulb, ArrowDown } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: 'home' | 'services' | 'talent') => void;
}

function ServicesPage({ onNavigate }: ServicesPageProps) {
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
              <button onClick={() => onNavigate('services')} className="text-blue-600 font-medium">Services</button>
              <button onClick={() => onNavigate('talent')} className="text-gray-600 hover:text-blue-600 transition">Talent Acquisition</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive IT Solutions for Modern Businesses</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-blue-600 hidden md:block"></div>

          <div className="space-y-16">
            <div className="relative">
              <div className="md:flex md:items-center md:space-x-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex items-center justify-end space-x-3 mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                      <FolderKanban className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      End-to-end IT project implementation with expertise in cutting-edge technologies.
                      We deliver transformative solutions that enhance operational efficiency and drive business growth.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• AI & Machine Learning Implementation</li>
                      <li>• AR/VR Immersive Experience Development</li>
                      <li>• Cloud Solutions & Digital Transformation</li>
                      <li>• Enterprise Application Development</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="md:w-1/2"></div>
              </div>
              <div className="flex justify-center mt-8">
                <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
              </div>
            </div>

            <div className="relative">
              <div className="md:flex md:items-center md:space-x-8 md:flex-row-reverse">
                <div className="md:w-1/2 md:text-left">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Cybersecurity & Audit</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Comprehensive security solutions to protect your digital assets and ensure compliance
                      with industry standards. We safeguard your business against evolving cyber threats.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Security Assessment & Penetration Testing</li>
                      <li>• Compliance Audits & Risk Management</li>
                      <li>• Infrastructure Security Implementation</li>
                      <li>• 24/7 Security Monitoring & Response</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="md:w-1/2"></div>
              </div>
              <div className="flex justify-center mt-8">
                <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
              </div>
            </div>

            <div  className="relative cursor-pointer"
  onClick={() =>  onNavigate('talent')}>
              <div className="md:flex md:items-center md:space-x-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex items-center justify-end space-x-3 mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">Talent Acquisition & Staff Augmentation</h2>
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Strategic talent solutions with precision, flexibility, and efficiency. We provide
                      quality professionals from trained freshers to business unit heads across IT and non-IT domains.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• C2H, FTE & Freelancing Models</li>
                      <li>• US Onshore IT Staffing</li>
                      <li>• Global Talent Pool (US, UK, Canada, Mexico)</li>
                      <li>• Quick Turnaround Time</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="md:w-1/2"></div>
              </div>
              <div className="flex justify-center mt-8">
                <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
              </div>
            </div>

            <div className="relative">
              <div className="md:flex md:items-center md:space-x-8 md:flex-row-reverse">
                <div className="md:w-1/2 md:text-left">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex items-center space-x-3 mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Data Analytics</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Through our subsidiary Data Analyst Corp, we provide deep expertise in Big Data analytics
                      and generative AI capabilities, empowering informed decisions and unlocking data potential.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Big Data Analytics & Visualization</li>
                      <li>• Generative AI Solutions & Experiments</li>
                      <li>• Data Science & Machine Learning</li>
                      <li>• Critical Resource Onboarding</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="md:w-1/2"></div>
              </div>
              <div className="flex justify-center mt-8">
                <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
              </div>
            </div>

            <div className="relative">
              <div className="md:flex md:items-center md:space-x-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex items-center justify-end space-x-3 mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">Consultancy Services</h2>
                      <Lightbulb className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Strategic IT consulting that blends emerging technologies with agile business strategies.
                      We help organizations adapt, evolve, and deliver transformative value.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Digital Transformation Strategy</li>
                      <li>• Technology Stack Optimization</li>
                      <li>• Business Process Re-engineering</li>
                      <li>• Innovation & R&D Guidance</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="md:w-1/2"></div>
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

export default ServicesPage;
