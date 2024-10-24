import { Link } from "react-router-dom";
import { Home, Mail, User, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="AI-PGF Logo" className="h-8 w-8" />
            <Link to="/" className="text-xl font-bold">AI-PGF</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
            <Link to="/settings" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
            <Link to="/auth">
              <Button variant="outline">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;