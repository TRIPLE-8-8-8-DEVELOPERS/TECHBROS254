import { useAuth } from "@/components/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { Loader2, Upload } from "lucide-react";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`public/${user?.id}`, selectedFile, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      console.error("Error uploading avatar:", error);
      setError(error);
    } else {
      console.log("Avatar uploaded successfully:", data);
      setAvatarUrl(data.path);

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .update({ avatar_url: data.path })
        .eq("user_id", user?.id)
        .single();

      if (profileError) {
        console.error("Error updating profile:", profileError);
        setError(profileError);
      } else {
        console.log("Profile updated successfully:", profileData);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user?.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        setError(error);
      } else if (data) {
        setProfile(data);
        setAvatarUrl(data.avatar_url);
      }
    };

    fetchProfile();
  }, [user, navigate]);

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error loading profile.</div>;
  }

  if (!user || !profile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-500">
        <Loader2 className="animate-spin text-white w-10 h-10" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-all">
        <div className="flex-grow flex items-center justify-center py-16 px-6">
          <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 space-y-6">
            <h1 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-400 mb-2">
              ✨ Your Profile
            </h1>

            <div className="flex flex-col items-center space-y-4">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full shadow-lg border-4 border-purple-300"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-700 text-3xl font-bold">
                  {user.email[0].toUpperCase()}
                </div>
              )}

              <div className="text-center text-gray-700 dark:text-gray-300 space-y-1">
                <p className="text-lg font-medium">{user.email}</p>
                {profile.full_name && (
                  <p>Full Name: <span className="font-semibold">{profile.full_name}</span></p>
                )}
                {profile.username && (
                  <p>Username: <span className="font-semibold">{profile.username}</span></p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="file"
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                />

                <button
                  onClick={handleFileUpload}
                  disabled={loading}
                  className={`mt-4 w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition
                    ${
                      loading
                        ? "bg-purple-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    }`}
                >
                  {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Upload className="w-5 h-5" />}
                  {loading ? "Uploading..." : "Upload Avatar"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
