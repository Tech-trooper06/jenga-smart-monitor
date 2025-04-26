
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-900">Jenga Smart</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-blue-900">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-900">How it works</a>
            <Button variant="default" className="bg-blue-900 hover:bg-blue-800">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
