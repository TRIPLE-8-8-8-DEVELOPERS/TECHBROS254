import { useAuth } from "@/components/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smile } from "lucide-react";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 transition-all">
        <div className="flex-grow flex items-center justify-center py-16 px-6">
          <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 space-y-6">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-full shadow-lg">
                <Smile className="w-10 h-10" />
              </div>

              <h1 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-400">
                📊 Your Dashboard
              </h1>

              <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
                Welcome back, <span className="font-semibold">{user.email}</span>!
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-center">
                Start exploring your account features and activities here.
              </p>

              <button
                onClick={() => navigate("/profile")}
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition
                  bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
