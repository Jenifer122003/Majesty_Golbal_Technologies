import { Building2, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'talent') => void;
}

function HomePage({ onNavigate }: HomePageProps) {
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
              <button onClick={() => onNavigate('home')} className="text-blue-600 font-medium">Home</button>
              <button onClick={() => onNavigate('services')} className="text-gray-600 hover:text-blue-600 transition">Services</button>
              <button onClick={() => onNavigate('talent')} className="text-gray-600 hover:text-blue-600 transition">Talent Acquisition</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Majesty Global Technologies
          </h1>
          <p className="text-xl text-gray-600 mb-4">Transforming the Future Through Innovation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Majesty Global Technologies is an innovative startup IT company committed to transforming
              the future of technology through creativity, expertise, and forward-thinking solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With a strong foundation in delivering end-to-end IT projects and services, we focus on
              empowering businesses with the right technology to achieve measurable success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Operating from our Head Office in Hyderabad, India, we maintain a global presence with
              offices in the US, UK, Canada, and Mexico.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>AI, AR & VR:</strong> Enabling intelligent systems, immersive experiences,
                  and data-driven decision-making
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Strategic Talent Solutions:</strong> Workforce augmentation with precision,
                  flexibility, and efficiency
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Data & AI Excellence:</strong> Deep expertise in Big Data analytics and
                  generative AI through our subsidiary Data Analyst Corp
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Our Legacy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Trusted Partners</h3>
              <p className="text-blue-100 leading-relaxed">
                As the preferred partner for industry leaders including Reliance Jio, Eviden (ATOS),
                TCS, Oracle, Tech-M, HCL, UST Global, LTi, and Wipro, we have consistently delivered
                quality talent and solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-blue-100 leading-relaxed">
                Our presence spans across multiple continents with dedicated teams in India, US, UK,
                Canada, and Mexico, ensuring round-the-clock support for our global clients.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            <span className="text-lg font-semibold">Explore Our Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
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

export default HomePage;
