
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
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
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useToast } from "../hooks/use-toast";
import { Bell, Settings, User as UserIcon, CreditCard, HelpCircle, LogOut } from "lucide-react";
import { Badge } from "./ui/badge";

export const UserProfile = () => {
  const { user, signOut, loading } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
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

  const clearNotifications = () => {
    setHasNotifications(false);
    toast({
      title: "Notifications cleared",
      description: "All notifications have been marked as read.",
    });
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
      <div className="flex items-center space-x-2">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full relative">
              <Bell className="h-4 w-4" />
              {hasNotifications && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500">
                  <span className="text-[10px]">2</span>
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              {hasNotifications && (
                <Button variant="ghost" size="sm" onClick={clearNotifications} className="h-auto py-1 px-2 text-xs">
                  Mark all as read
                </Button>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {hasNotifications ? (
              <>
                <div className="max-h-80 overflow-auto">
                  <DropdownMenuItem className="p-3 cursor-default">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">Welcome to TechBros!</p>
                        <span className="text-xs text-muted-foreground">Just now</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Thanks for creating an account with us. Explore our services and contact us if you need help.</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-default">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">New service available</p>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">We've just launched AI Development services. Check it out!</p>
                    </div>
                  </DropdownMenuItem>
                </div>
              </>
            ) : (
              <div className="py-6 text-center text-muted-foreground">
                <p>No new notifications</p>
                <p className="text-sm">We'll notify you when something arrives</p>
              </div>
            )}
            
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/notifications" className="justify-center cursor-pointer">
                View all notifications
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      
        {/* User Profile */}
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
            
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="/profile">
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard">
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                  <DropdownMenuItem>Notifications</DropdownMenuItem>
                  <DropdownMenuItem>Security</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
