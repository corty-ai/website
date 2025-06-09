const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3">
            <div className="mb-4">
              <span className="text-lg font-bold text-white font-space">Corty</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-lg leading-relaxed text-sm">
              Revolutionizing software development with AI-powered code intelligence. 
              Helping teams understand, navigate, and collaborate on complex codebases faster than ever before.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4 font-space text-sm">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Corty. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;