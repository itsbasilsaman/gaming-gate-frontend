import React, { useState } from "react";

export const MainDetails = () => {

  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password: string) => {
    const passwordRegex = /^.{8,}$/; // At least 8 characters, no requirement for special characters or case
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (!validatePassword(value)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters.",
      }));
    } else {
      setErrors((prev) => {
        const { password, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (value !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setErrors((prev) => {
        const { confirmPassword, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "firstName") setFirstName(value);
    if (field === "lastName") setLastName(value);
    if (field === "email") setEmail(value);

    // Clear errors when input is updated
    setErrors((prev) => {
      const updatedErrors = { ...prev };
      delete updatedErrors[field];
      return updatedErrors;
    });
  };

  const handleSave = () => {
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Please enter your email.";
    if (firstName.length < 2) newErrors.firstName = "First Name must be at least 2 characters.";
    if (lastName.length < 2) newErrors.lastName = "Last Name must be at least 2 characters.";
    if (!validatePassword(password))
      newErrors.password = "Password must be at least 8 characters.";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    if (!termsAccepted) newErrors.terms = "You must accept the terms and conditions.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Saved successfully!");
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

    return (
       <div className="flex flex-col lg:flex-row items-start gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 text-[#343869]">Account</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 p-2 rounded bg-[#02032F] text-white cursor-pointer">
            <span className="material-icons">person</span> Account
          </li>
          <li className="flex items-center gap-2 p-2 rounded hover:bg-[#343869]">
            <span className="material-icons">share</span> Social Connect
          </li>
          <li className="flex items-center gap-2 p-2 rounded hover:bg-[#343869]">
            <span className="material-icons">shield</span> Privacy & Security
          </li>
          <li className="flex items-center gap-2 p-2 rounded hover:bg-[#343869]">
            <span className="material-icons">verified</span> Verification
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6 text-[#02032F]">Personal</h2>
        <form className="space-y-6">
          {/* Language Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Language</span>
            <div
              className="relative w-40 h-10 bg-[#343869] rounded-full flex items-center cursor-pointer"
              onClick={toggleLanguage}
            >
              <div
                className={`absolute left-1 top-1 h-8 w-20 bg-[#02032F] rounded-full transition-transform ${
                  language === "ar" ? "translate-x-full" : ""
                }`}
              />
              <span className="absolute left-3 text-white text-sm">English</span>
              <span className="absolute right-3 text-white text-sm">Arabic</span>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#343869]">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={`mt-1 block w-full p-3 border ${
                  errors.firstName ? "border-red-500" : "border-[#343869]"
                } rounded-lg shadow-md focus:ring-2 focus:ring-[#02032F]`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#343869]">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={`mt-1 block w-full p-3 border ${
                  errors.lastName ? "border-red-500" : "border-[#343869]"
                } rounded-lg shadow-md focus:ring-2 focus:ring-[#02032F]`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#343869]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`mt-1 block w-full p-3 border ${
                errors.email ? "border-red-500" : "border-[#343869]"
              } rounded-lg shadow-md focus:ring-2 focus:ring-[#02032F]`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Fields */}
          <div>
            <label className="block text-sm font-medium text-[#343869]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                className={`mt-1 block w-full p-3 border ${
                  errors.password ? "border-red-500" : "border-[#343869]"
                } rounded-lg shadow-md focus:ring-2 focus:ring-[#02032F]`}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#343869]">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                className={`mt-1 block w-full p-3 border ${
                  errors.confirmPassword ? "border-red-500" : "border-[#343869]"
                } rounded-lg shadow-md focus:ring-2 focus:ring-[#02032F]`}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm text-[#343869]">I accept the terms and conditions</label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

          {/* Save Button */}
          <button
            type="button"
            onClick={handleSave}
            className="w-full bg-[#02032F] text-white py-3 rounded-lg mt-6 hover:bg-[#343869] transition-colors"
          >
            Save
          </button>
        </form>
      </div>
    </div>
    )
}