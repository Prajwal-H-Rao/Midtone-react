import React, { useState } from "react";
import Logo from "../../../assets/logo.svg";
import Illustration from "../../../assets/illustration.svg";

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogin = () => {
    if (email && password) {
      showBreadcrumb("success", "Login successful! Redirecting...");
    } else {
      showBreadcrumb("error", "Please fill in all required fields");
    }
  };

  const showBreadcrumb = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      {/* Breadcrumb Notifications */}
      {notification.show && (
        <div
          className={`fixed top-5 right-5 p-4 rounded-lg shadow-xl z-50 ${
            notification.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div
        className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-gray-50"}`}
      >
        <div className="container sm:px-10 mx-auto">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* Left Panel */}
            <div className="hidden xl:flex flex-col min-h-screen">
              <div className="pt-5">
                <a href="#" className="flex items-center">
                  <img alt="Logo" className="w-6" src={Logo} />
                  <span
                    className={`text-lg ml-3 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Enigma
                  </span>
                </a>
              </div>
              <div className="my-auto">
                <img
                  alt="Illustration"
                  className="w-3/5 mx-auto -intro-x"
                  src={Illustration}
                />
                <div
                  className={`-intro-x mt-10 text-4xl font-medium ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  A few more clicks to
                  <br />
                  sign in to your account.
                </div>
                <p
                  className={`-intro-x mt-5 text-lg ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Manage all your e-commerce accounts in one place
                </p>
              </div>
            </div>

            {/* Right Panel */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-slate-800 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-xl shadow-lg xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl xl:text-3xl font-bold text-center xl:text-left dark:text-white">
                  Sign In
                </h2>
                <p className="mt-2 text-slate-500 dark:text-slate-400 text-center xl:hidden">
                  A few more clicks to sign in to your account
                </p>

                <div className="mt-8 space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Password"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <label className="flex items-center dark:text-slate-300">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded border-slate-300 dark:border-slate-600 mr-2"
                    />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleLogin}
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                  >
                    Login
                  </button>
                  <button className="w-full py-3 px-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Register
                  </button>
                </div>

                <p className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                  By signing in, you agree to our{" "}
                  <a
                    href="#"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="fixed bottom-8 right-8 flex items-center space-x-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm dark:text-slate-200">Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              darkMode ? "bg-emerald-600" : "bg-slate-300"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                darkMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
