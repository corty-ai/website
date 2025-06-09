import { Shield, Zap, Globe, ArrowRight } from "lucide-react";

const Enterprise = () => {
  return (
    <section className="py-20 bg-black relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-red-900/20 via-red-950/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid-cols-1 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Header - matching Core Features style */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-space">
                Built for
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 bg-clip-text text-transparent block">
                  scale & security
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Enterprise-grade code intelligence designed for teams that need
                reliability, security, and performance at any scale.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 font-space">
                      Seamless integrations
                    </h3>
                    <p className="text-gray-400 mb-3 leading-relaxed">
                      Corty integrates with all your code hosts & works in the
                      CLI & VS Code
                    </p>
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-red-500/15 border border-red-500/25 rounded-lg flex items-center justify-center hover:bg-red-500/25 transition-colors">
                        <span className="text-red-400 text-xs font-bold">
                          VS
                        </span>
                      </div>
                      <div className="w-8 h-8 bg-pink-500/15 border border-pink-500/25 rounded-lg flex items-center justify-center hover:bg-pink-500/25 transition-colors">
                        <span className="text-pink-400 text-xs">📦</span>
                      </div>
                      <div className="w-8 h-8 bg-violet-500/15 border border-violet-500/25 rounded-lg flex items-center justify-center hover:bg-violet-500/25 transition-colors">
                        <span className="text-violet-400 text-xs">🐙</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/20">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 font-space">
                      Scale with confidence
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Leverage Corty across any size codebase as it can handle
                      your largest files effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 font-space">
                      Enterprise-grade security
                    </h3>
                    <p className="text-gray-400 mb-3 leading-relaxed">
                      Strict security controls through full data isolation, zero
                      retention, no model training, detailed audit logs, and
                      controlled access.
                    </p>
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-red-500/15 border border-red-500/25 rounded-lg flex items-center justify-center hover:bg-red-500/25 transition-colors">
                        <span className="text-red-400 text-xs">🔒</span>
                      </div>
                      <div className="w-8 h-8 bg-pink-500/15 border border-pink-500/25 rounded-lg flex items-center justify-center hover:bg-pink-500/25 transition-colors">
                        <span className="text-pink-400 text-xs">🛡️</span>
                      </div>
                      <div className="w-8 h-8 bg-violet-500/15 border border-violet-500/25 rounded-lg flex items-center justify-center hover:bg-violet-500/25 transition-colors">
                        <span className="text-violet-400 text-xs">📋</span>
                      </div>
                      <div className="w-8 h-8 bg-red-500/15 border border-red-500/25 rounded-lg flex items-center justify-center hover:bg-red-500/25 transition-colors">
                        <span className="text-red-400 text-xs">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-red-900/15 via-pink-900/15 to-violet-900/15 rounded-3xl p-10 border border-red-500/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-violet-500/5 rounded-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-3 font-space">
                Ready to transform your development workflow?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Join the waitlist to be among the first to experience AI-powered
                code intelligence that scales with your team.
              </p>

              {/* Email Input and Button */}
              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                action="https://getlaunchlist.com/s/LZUJcK"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center whitespace-nowrap font-space shadow-lg shadow-red-500/25"
                  type="submit"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
