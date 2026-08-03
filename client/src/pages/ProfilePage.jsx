import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState(authUser.fullName);
  const [bio, setBio] = useState(authUser.bio);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      await updateProfile({ fullName: name, bio });
      navigate("/");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = async () => {
      const base64Image = reader.result;
      await updateProfile({ profilePic: base64Image, fullName: name, bio });
      navigate("/");
    };
  };

  return (
    <div className="min-h-screen bg-[#FFF2DB] flex items-center justify-center p-4 font-sans overflow-hidden">
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl neo-raised rounded-[2rem] overflow-hidden relative z-10"
      >
        <div className="flex flex-col lg:flex-row h-full">
          {/* Branding Side */}
          <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#F62440] to-[#b3132a] p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFFAF3] rounded-full filter blur-[90px]"></div>
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#FFE5BF] rounded-full filter blur-[90px]"></div>
            </div>
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
                  Complete Your Profile
                </motion.h1>
                <motion.p
                  className="text-[#FFF2DB] text-lg max-w-md leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Add your details to help friends recognize you on ChitChat.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#FFF2DB] font-medium">Secure profile</p>
                  <p className="font-medium">End-to-end encrypted</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="flex-1 p-8 sm:p-12 relative bg-[#FFFAF3]">
            <div className="max-w-md w-full mx-auto">
              <motion.h2
                className="text-3xl font-bold neo-text tracking-tight mb-8"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Profile Details
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Picture Upload */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <label className="neo-text text-sm font-medium">Profile Picture</label>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        className="w-20 h-20 rounded-full object-cover neo-raised-sm p-1"
                        src={
                          selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : authUser.profilePic || assets.avatar_icon
                        }
                        alt="Profile"
                      />
                      <label
                        htmlFor="avatar"
                        className="absolute -bottom-2 -right-2 neo-btn p-2 rounded-full cursor-pointer"
                        title="Change photo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 neo-text-soft"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <input
                          onChange={(e) => setSelectedImage(e.target.files[0])}
                          type="file"
                          id="avatar"
                          accept=".png, .jpg, .jpeg .webp"
                          hidden
                        />
                      </label>
                    </div>
                    <div>
                      <p className="text-sm neo-text">Click to change photo</p>
                      <p className="text-xs neo-text-soft">JPG, PNG or WEBP (Max. 5MB)</p>
                    </div>
                  </div>
                </motion.div>

                {/* Full Name */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <label className="neo-text text-sm font-medium">Full Name</label>
                  <div className="relative group">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
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

                {/* Bio */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <label className="neo-text text-sm font-medium">Bio</label>
                  <textarea
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    rows={4}
                    className="w-full px-4 py-3 neo-inset rounded-xl neo-text placeholder-[#9c8a6f] focus:outline-none focus:ring-2 focus:ring-[#F62440]/40 transition-all"
                    placeholder="Briefly describe yourself..."
                    required
                  ></textarea>
                  <p className="text-xs neo-text-soft">This will be visible on your profile</p>
                </motion.div>

                {/* Save Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3 px-4 neo-btn-accent text-[#FFFAF3] font-medium rounded-xl flex items-center justify-center gap-2"
                >
                  Save Changes
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </form>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => navigate("/")}
                  className="neo-text-soft hover:neo-accent-text transition-colors flex items-center justify-center gap-1 mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to home
                </button>
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

export default ProfilePage;