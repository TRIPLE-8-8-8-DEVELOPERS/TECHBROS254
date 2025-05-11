
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/components/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { AtSign, KeyRound, AlertCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AuthPage = () => {
  const navigate = useNavigate();
  const { user, signIn, signUp } = useAuth();
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If user is already authenticated, redirect to home
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (activeTab === "login") {
        const { error } = await signIn({ email, password });
        if (error) throw error;
      } else {
        const { error } = await signUp({ email, password });
        if (error) throw error;
        else {
          setError("Please check your email to confirm your account.");
        }
      }
    } catch (error: any) {
      console.error("Authentication error:", error);
      setError(error.message || "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to TechBros</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in or create an account</p>
          </div>

          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 w-full mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>
                    {activeTab === "login" ? "Sign In" : "Create Account"}
                  </CardTitle>
                  <CardDescription>
                    {activeTab === "login" 
                      ? "Enter your credentials to access your account" 
                      : "Fill out the form to create a new account"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AtSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <KeyRound className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder={activeTab === "login" ? "Enter your password" : "Create a password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                        minLength={6}
                      />
                    </div>
                  </div>

                  {activeTab === "login" && (
                    <div className="text-sm text-right">
                      <Link 
                        to="/forgot-password" 
                        className="text-tech-600 hover:text-tech-500 dark:text-tech-400 dark:hover:text-tech-300"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex flex-col gap-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-500 hover:bg-tech-600" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {activeTab === "login" ? "Signing in..." : "Creating account..."}
                      </>
                    ) : (
                      activeTab === "login" ? "Sign In" : "Create Account"
                    )}
                  </Button>
                  
                  <div className="text-sm text-center text-gray-500">
                    {activeTab === "login" ? (
                      <>
                        Don't have an account?{" "}
                        <button 
                          type="button"
                          onClick={() => setActiveTab("register")}
                          className="text-tech-600 hover:text-tech-500 dark:text-tech-400 dark:hover:text-tech-300"
                        >
                          Register
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button 
                          type="button"
                          onClick={() => setActiveTab("login")}
                          className="text-tech-600 hover:text-tech-500 dark:text-tech-400 dark:hover:text-tech-300"
                        >
                          Sign In
                        </button>
                      </>
                    )}
                  </div>
                </CardFooter>
              </form>
            </Card>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
