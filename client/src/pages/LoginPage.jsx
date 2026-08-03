import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsAlert, setShowTermsAlert] = useState(false);

  const { login } = useContext(AuthContext);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      setShowTermsAlert(true);
      return;
    }

    if (currState === "Sign Up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currState === "Sign Up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF2DB] flex items-center justify-center p-4 font-sans overflow-hidden">
      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl neo-raised rounded-[2rem] overflow-hidden relative z-10"
      >
        <div className="flex flex-col lg:flex-row h-full">
          {/* Branding Side */}
          <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#F62440] to-[#b3132a] p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFFAF3] rounded-full filter blur-[90px]"></div>
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#FFE5BF] rounded-full filter blur-[90px]"></div>
            </div>
            {/* signature wave */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#FFF2DB]/10"></div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex flex-col h-full justify-between text-[#FFFAF3]"
            >
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <motion.img
                    src={assets.logo_icon}
                    alt="Logo"
                    className="h-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                  <motion.span
                    className="text-2xl font-bold tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    ChitChat
                  </motion.span>
                </div>
                <motion.h1
                  className="text-4xl font-bold leading-tight mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currState === "Sign Up"
                    ? "Join the Conversation"
                    : "Welcome Back"}
                </motion.h1>
                <motion.p
                  className="text-[#FFF2DB] text-lg max-w-md leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currState === "Sign Up"
                    ? "A warm, secure space to chat, share, and stay close to the people who matter."
                    : "Sign in to pick up right where you left off with ChitChat."}
                </motion.p>
              </div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-[#FFFAF3]/10 backdrop-blur-sm rounded-2xl border border-[#FFFAF3]/15"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#FFFAF3]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#FFF2DB] font-medium">Enterprise-grade security</p>
                  <p className="font-medium">End-to-end encrypted</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="flex-1 p-8 sm:p-12 relative bg-[#FFFAF3]">
            <div className="max-w-md w-full mx-auto">
              <div className="flex justify-between items-center mb-10">
                <motion.h2
                  className="text-3xl font-bold neo-text tracking-tight"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {currState === "Sign Up" ? "Create Account" : "Sign In"}
                </motion.h2>
                {isDataSubmitted && (
                  <motion.button
                    onClick={() => setIsDataSubmitted(false)}
                    className="neo-btn h-10 w-10 rounded-full flex items-center justify-center neo-text-soft hover:neo-accent-text transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </motion.button>
                )}
              </div>

              <form onSubmit={onSubmitHandler} className="space-y-6">
                <AnimatePresence mode="wait">
                  {currState === "Sign Up" && !isDataSubmitted && (
                    <motion.div
                      key="name"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      className="space-y-2"
                    >
                      <label className="neo-text text-sm font-medium">Full Name</label>
                      <div className="relative group">
                        <input
                          type="text"
                          onChange={(e) => setFullName(e.target.value)}
                          value={fullName}
                          className="w-full px-4 py-3 neo-inset rounded-xl neo-text placeholder-[#9c8a6f] focus:outline-none focus:ring-2 focus:ring-[#F62440]/40 transition-all"
                          placeholder="Enter your full name"
                          required
                        />
                        <div className="absolute right-3 top-3 neo-text-soft group-hover:neo-accent-text transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isDataSubmitted && (
                  <>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <label className="neo-text text-sm font-medium">Email Address</label>
                      <div className="relative group">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3 neo-inset rounded-xl neo-text placeholder-[#9c8a6f] focus:outline-none focus:ring-2 focus:ring-[#F62440]/40 transition-all"
                        />
                        <div className="absolute right-3 top-3 neo-text-soft group-hover:neo-accent-text transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <label className="neo-text text-sm font-medium">Password</label>
                      <div className="relative group">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          type="password"
                          placeholder="••••••••"
                          required
                          className="w-full px-4 py-3 neo-inset rounded-xl neo-text placeholder-[#9c8a6f] focus:outline-none focus:ring-2 focus:ring-[#F62440]/40 transition-all"
                        />
                        <div className="absolute right-3 top-3 neo-text-soft group-hover:neo-accent-text transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                <AnimatePresence>
                  {currState === "Sign Up" && isDataSubmitted && (
                    <motion.div
                      key="bio"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 overflow-hidden"
                    >
                      <label className="neo-text text-sm font-medium">Your Bio</label>
                      <textarea
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                        rows={4}
                        placeholder="Briefly describe yourself..."
                        className="w-full px-4 py-3 neo-inset rounded-xl neo-text placeholder-[#9c8a6f] focus:outline-none focus:ring-2 focus:ring-[#F62440]/40 transition-all"
                      ></textarea>
                      <p className="text-xs neo-text-soft">This will be visible on your profile</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={() => {
                        setTermsAccepted(!termsAccepted);
                        setShowTermsAlert(false);
                      }}
                      className="h-4 w-4 accent-[#F62440] rounded transition-all"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="terms" className="block text-sm neo-text">
                      I agree to the <span className="neo-accent-text cursor-pointer hover:underline font-medium">Terms</span> and <span className="neo-accent-text cursor-pointer hover:underline font-medium">Privacy Policy</span>
                    </label>
                    <p className="text-xs neo-text-soft mt-1">By creating an account, you agree to our terms and conditions</p>
                  </div>
                </motion.div>

                {showTermsAlert && (
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-sm neo-accent-text flex items-center gap-2 neo-inset-deep p-3 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Please accept the terms and conditions to continue
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: termsAccepted ? 1.01 : 1 }}
                  whileTap={{ scale: termsAccepted ? 0.99 : 1 }}
                  className={`w-full py-3 px-4 font-medium rounded-xl flex items-center justify-center gap-2
                    ${termsAccepted ? "neo-btn-accent text-[#FFFAF3]" : "neo-chip neo-text-soft cursor-not-allowed"}`}
                  disabled={!termsAccepted}
                >
                  {currState === "Sign Up" ? (isDataSubmitted ? "Complete Registration" : "Continue") : "Sign In"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </form>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {currState === "Sign Up" ? (
                  <p className="neo-text-soft">
                    Already have an account?{" "}
                    <button
                      onClick={() => {
                        setCurrState("Sign In");
                        setIsDataSubmitted(false);
                      }}
                      className="neo-accent-text font-medium hover:underline transition-colors"
                    >
                      Sign in here
                    </button>
                  </p>
                ) : (
                  <p className="neo-text-soft">
                    Don't have an account?{" "}
                    <button
                      onClick={() => setCurrState("Sign Up")}
                      className="neo-accent-text font-medium hover:underline transition-colors"
                    >
                      Register now
                    </button>
                  </p>
                )}
              </motion.div>

              <motion.div
                className="mt-10 pt-6 border-t border-[#FFE5BF] flex flex-col items-center gap-2 neo-text-soft text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 neo-accent-text" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="neo-text">256-bit SSL encryption</span>
                </div>
                <p className="text-xs neo-text-soft">Your data is securely protected</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;