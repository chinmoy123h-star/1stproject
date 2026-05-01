import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="font-sans w-full">

      <div className="flex items-center justify-between px-10 py-4 bg-black text-white w-full sticky top-0 z-50">
        
        <Link to="/" className="text-xl font-bold text-white tracking-widest hover:text-yellow-400 transition-colors">
          CIVICTRACK
        </Link>

        <div className="flex gap-8 text-gray-300 font-medium">
          <Link to="/" className="cursor-pointer hover:text-white transition-colors">Home</Link>
          <a href="#about" className="cursor-pointer hover:text-white transition-colors">About</a>
          <Link to="/features" className="cursor-pointer hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="cursor-pointer hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Search className="cursor-pointer text-gray-300 hover:text-white transition-colors" size={20} />

          <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-5 py-2 rounded-full font-semibold transition-colors">
            See How It Works
          </button>
        </div>

      </div>

      <div className="bg-black text-white py-32 px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Track Civic Progress <span className="text-yellow-400">Effectively</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              CivicTrack is your companion in monitoring local governance and community projects. Stay informed, stay involved, and drive change in your neighborhood.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                Get Started
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="bg-white text-black py-24 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About CivicTrack</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Our platform is designed to bridge the gap between citizens and local authorities. 
            By providing transparent data tracking and engagement tools, we empower every resident 
            to contribute to their community's growth and accountability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Transparency</h3>
              <p className="text-gray-500">Real-time data on local projects and government spending.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Participation</h3>
              <p className="text-gray-500">Tools for citizens to report issues and suggest improvements.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Accountability</h3>
              <p className="text-gray-500">Tracking systems to ensure promises are kept and projects completed.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Topbar;