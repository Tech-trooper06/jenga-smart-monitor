
import { Button } from "@/components/ui/button";
import { BellRing, PackageCheck, Archive } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Smart Material Tracking for Modern Construction
            </h1>
            <p className="text-xl text-gray-600">
              Real-time notifications, accurate inventory tracking, and seamless stakeholder updates for your construction materials.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-900 hover:bg-blue-800">
                Start Tracking Now
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BellRing className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="font-semibold mb-2">Instant Alerts</h3>
              <p className="text-gray-600">Real-time notifications for material updates</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <PackageCheck className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="font-semibold mb-2">Stock Tracking</h3>
              <p className="text-gray-600">Monitor material quantities in real-time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Archive className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="font-semibold mb-2">Inventory Management</h3>
              <p className="text-gray-600">Efficient store management system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
