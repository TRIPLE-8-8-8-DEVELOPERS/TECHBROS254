import { useAuth } from "@/components/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
      } else {
        setProfile(data);
      }
    };

    fetchProfile();
  }, [user, navigate]);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  if (!user) {
    return null;
  }

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
              Your Profile
            </h1>
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Email: {user.email}
              </p>
              {profile.full_name && (
                <p className="text-gray-700 dark:text-gray-300">
                  Full Name: {profile.full_name}
                </p>
              )}
              {profile.username && (
                <p className="text-gray-700 dark:text-gray-300">
                  Username: {profile.username}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;