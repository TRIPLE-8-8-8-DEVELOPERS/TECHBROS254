
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { useAuth } from "../hooks/use-auth";
import { Button } from "./ui/button";
import { AuthModal } from "./AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useToast } from "../hooks/use-toast";

export const UserProfile = () => {
  const { user, signOut, loading } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "An error occurred while signing out.",
        variant: "destructive",
      });
    }
  };

  const getUserInitials = (user: User | null) => {
    if (!user || !user.email) return "U";
    return user.email.substring(0, 1).toUpperCase();
  };

  if (loading) {
    return (
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full relative">
        <div className="h-5 w-5 animate-pulse bg-gray-200 rounded-full" />
      </Button>
    );
  }

  if (!user) {
    return (
      <>
        <Button 
          onClick={() => setIsAuthModalOpen(true)}
          variant="outline" 
          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-full"
        >
          Sign In
        </Button>
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full relative">
            <Avatar className="h-8 w-8 border-2 border-vibrant-purple">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${getUserInitials(user)}`} />
              <AvatarFallback className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white">
                {getUserInitials(user)}
              </AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem disabled className="text-sm opacity-70">
            {user.email}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile Settings</DropdownMenuItem>
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
